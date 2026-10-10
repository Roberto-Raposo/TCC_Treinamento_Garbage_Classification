"""
Modelos Pydantic usados para validar e documentar as respostas da API.
O FastAPI usa essas classes para gerar automaticamente a documentação
interativa em /docs.
"""

from pydantic import BaseModel
from typing import Dict


class ClassificationResponse(BaseModel):
    categoria: str
    categoria_pt: str
    confianca: float
    probabilidades: Dict[str, float]

    class Config:
        json_schema_extra = {
            "example": {
                "categoria": "plastic",
                "categoria_pt": "Plástico",
                "confianca": 94.2,
                "probabilidades": {
                    "Plástico": 94.2,
                    "Papelão": 2.1,
                    "Vidro": 1.0,
                    "Metal": 0.9,
                    "Papel": 0.7,
                    "Roupas": 0.4,
                    "Calçados": 0.3,
                    "Biológico": 0.2,
                    "Bateria": 0.1,
                    "Lixo Geral": 0.1,
                },
            }
        }


class ErrorResponse(BaseModel):
    detail: str


class HealthResponse(BaseModel):
    status: str
    model_loaded: bool
