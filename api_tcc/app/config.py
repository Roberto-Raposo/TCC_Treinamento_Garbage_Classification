"""
Configurações da API de classificação de resíduos recicláveis.

Ajuste MODEL_PATH quando trocar de modelo (ex: ao migrar do EfficientNetV2S
para o modelo definitivo escolhido após a comparação com o ResNet50).
"""

import os

# Caminho do modelo treinado (.keras).
MODEL_PATH = os.getenv(
    "MODEL_PATH",
    "models/efficientnetv2s_finetuned_best.keras"
)

# Tamanho de entrada esperado pelo modelo (deve bater com o usado no treino).
# EfficientNetV2S -> (384, 384) | ResNet50 -> (224, 224)
IMAGE_SIZE = (384, 384)

# Nomes das classes, na MESMA ORDEM usada durante o treinamento
# Ordem alfabética dos diretórios do dataset, igual ao `classes` do notebook.
CLASS_NAMES = [
    "battery",
    "biological",
    "cardboard",
    "clothes",
    "glass",
    "metal",
    "paper",
    "plastic",
    "shoes",
    "trash",
]

# Rótulos em português, para exibir na resposta da API / na interface Web.
CLASS_NAMES_PT = {
    "battery": "Bateria",
    "biological": "Biológico",
    "cardboard": "Papelão",
    "clothes": "Roupas",
    "glass": "Vidro",
    "metal": "Metal",
    "paper": "Papel",
    "plastic": "Plástico",
    "shoes": "Calçados",
    "trash": "Lixo Geral",
}

# Extensões/tipos de imagem aceitos pelo endpoint de classificação.
ALLOWED_CONTENT_TYPES = {"image/jpeg", "image/jpg", "image/png"}

# Origens permitidas para o front-end (React) acessar a API (CORS).
# Ajuste conforme a porta/domínio real do seu front-end em desenvolvimento e produção.
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:5173",
]
