"""
API REST para classificação de resíduos sólidos recicláveis.

Endpoints:
  GET  /health        -> verifica se a API e o modelo estão prontos
  POST /classificar    -> recebe uma imagem e retorna a categoria prevista

Para rodar localmente:
  uvicorn app.main:app --reload --port 8000

Documentação interativa gerada automaticamente em:
  http://localhost:8000/docs
"""

from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.config import ALLOWED_CONTENT_TYPES, ALLOWED_ORIGINS
from app.model_loader import GarbageClassifier
from app.schemas import ClassificationResponse, HealthResponse

app = FastAPI(
    title="API de Classificação de Resíduos Recicláveis",
    description=(
        "API desenvolvida como parte do TCC 'Classificação de Resíduos "
        "Recicláveis Utilizando Visão Computacional e Aprendizado de Máquina'."
    ),
    version="1.0.0",
)

# Libera o front-end React (rodando em outra porta/origem) a consumir a API.
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo carregado uma única vez, na inicialização da aplicação.
classifier = GarbageClassifier()


@app.get("/health", response_model=HealthResponse, tags=["Status"])
def health_check():
    """Endpoint simples para verificar se a API está no ar e o modelo carregado."""
    return HealthResponse(status="ok", model_loaded=classifier.model is not None)


@app.post(
    "/classificar",
    response_model=ClassificationResponse,
    tags=["Classificação"],
    summary="Classifica uma imagem de resíduo sólido reciclável",
)
async def classificar_imagem(imagem: UploadFile = File(...)):
    """
    Recebe uma imagem (JPEG ou PNG), executa a inferência com o modelo
    treinado e retorna a categoria prevista com o percentual de confiança.
    """
    if imagem.content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(
            status_code=400,
            detail=(
                f"Tipo de arquivo não suportado: {imagem.content_type}. "
                f"Envie uma imagem JPEG ou PNG."
            ),
        )

    image_bytes = await imagem.read()

    if not image_bytes:
        raise HTTPException(status_code=400, detail="Arquivo de imagem vazio.")

    try:
        resultado = classifier.predict(image_bytes)
    except Exception as exc:
        raise HTTPException(
            status_code=500,
            detail=f"Erro ao processar a imagem: {str(exc)}",
        )

    return ClassificationResponse(**resultado)
