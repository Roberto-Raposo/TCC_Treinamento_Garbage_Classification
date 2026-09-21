# API de Classificação de Resíduos Recicláveis

API REST desenvolvida com FastAPI para servir o modelo treinado (EfficientNetV2S
ou ResNet50) como serviço de inferência, conforme descrito na seção 3.3.5 da
proposta de TCC.

## Estrutura

```
api_tcc/
├── app/
│   ├── __init__.py
│   ├── main.py           # Endpoints da API
│   ├── model_loader.py   # Carregamento do modelo e inferência
│   ├── schemas.py        # Modelos de request/response (Pydantic)
│   └── config.py         # Configurações (caminho do modelo, classes, CORS)
├── models/                # Coloque aqui o(s) arquivo(s) .keras treinados
├── requirements.txt
└── README.md
```

## Como rodar localmente

1. Crie um ambiente virtual e instale as dependências:
   ```bash
   python -m venv venv
   source venv/bin/activate      # Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

2. Baixe o modelo treinado do Google Drive (pasta `models/` do projeto no
   Colab) e coloque em `api_tcc/models/efficientnetv2s_best.keras`
   (ou ajuste `MODEL_PATH` em `app/config.py` / variável de ambiente `MODEL_PATH`).

3. Rode a API:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

4. Acesse a documentação interativa (Swagger UI) em:
   ```
   http://localhost:8000/docs
   ```
   Você pode testar o endpoint `/classificar` diretamente por lá, enviando
   uma imagem, sem precisar do front-end pronto.

## Testando com curl

```bash
curl -X POST "http://localhost:8000/classificar" \
  -H "Content-Type: multipart/form-data" \
  -F "imagem=@caminho/para/uma/imagem.jpg"
```

## Trocando de modelo

Quando decidir qual arquitetura teve melhor desempenho (EfficientNetV2S vs
ResNet50), ajuste em `app/config.py`:
- `MODEL_PATH` -> caminho do `.keras` escolhido
- `IMAGE_SIZE` -> `(384, 384)` para EfficientNetV2S ou `(224, 224)` para ResNet50

Se o modelo escolhido for o ResNet50, atenção: diferente do EfficientNetV2S,
o ResNet50 não inclui normalização interna. Como no notebook de treino o
`preprocess_input` foi embutido como camada `Lambda` dentro do próprio
modelo, a API não precisa de nenhum ajuste adicional — mas confirme isso
olhando o `model.summary()` do arquivo `.keras` salvo, para garantir que a
camada de pré-processamento realmente foi salva junto com o modelo.

## Próximos passos sugeridos

- [ ] Testar a API localmente com o modelo provisório (EfficientNetV2S)
- [ ] Conectar o front-end React ao endpoint `/classificar`
- [ ] Adicionar testes automatizados (ex: pytest + TestClient do FastAPI)
- [ ] Quando o modelo definitivo estiver pronto, trocar o arquivo em `models/`
- [ ] Revisar CORS (`ALLOWED_ORIGINS`) antes de qualquer deploy
