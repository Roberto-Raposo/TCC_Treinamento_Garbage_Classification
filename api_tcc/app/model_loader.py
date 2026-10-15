"""
Carregamento do modelo treinado e execução da inferência.

O modelo é carregado uma única vez, na inicialização da API (ver main.py),
e reaproveitado em todas as requisições — carregar o modelo a cada requisição
seria extremamente lento.
"""

import io

import numpy as np
from PIL import Image
import tensorflow as tf

from app.config import MODEL_PATH, IMAGE_SIZE, CLASS_NAMES, CLASS_NAMES_PT


class GarbageClassifier:
    def __init__(self, model_path: str = MODEL_PATH):
        self.image_size = IMAGE_SIZE
        self.class_names = CLASS_NAMES

        print(f"Carregando modelo de: {model_path}")
        self.model = tf.keras.models.load_model(model_path)
        print("Modelo carregado com sucesso!")

    def predict(self, image_bytes: bytes) -> dict:
        image_array = self.preprocess_image(image_bytes)

        predictions = self.model.predict(image_array, verbose=0)[0]

        predicted_index = int(np.argmax(predictions))
        predicted_class = self.class_names[predicted_index]
        confidence = float(predictions[predicted_index])

        all_probabilities = {
            CLASS_NAMES_PT[self.class_names[i]]: float(predictions[i])
            for i in range(len(self.class_names))
        }

        return {
            "categoria": predicted_class,
            "categoria_pt": CLASS_NAMES_PT[predicted_class],
            "confianca": round(confidence * 100, 2),
            "probabilidades": all_probabilities,
        }
    
    def preprocess_image(self, image_bytes: bytes) -> np.ndarray:
        image = tf.io.decode_image(
            image_bytes,
            channels=3,
            expand_animations=False
        )

        image = tf.image.resize(
            image,
            self.image_size,
            method="bilinear"
        )

        image = tf.expand_dims(image, axis=0)

        return image.numpy()

