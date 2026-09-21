const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function classifyImage(file) {
  const formData = new FormData();
  formData.append("imagem", file);

  const response = await fetch(`${API_URL}/classificar`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || "Falha ao classificar a imagem.");
  }

  return response.json();
}
