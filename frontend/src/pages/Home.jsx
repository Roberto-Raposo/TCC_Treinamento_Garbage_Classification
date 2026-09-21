import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloudIcon } from "../components/icons.jsx";
import { classifyImage } from "../api.js";
import { saveResult } from "../utils/storage.js";

export default function Home() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  function handleFile(selected) {
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setError(null);
  }

  function handleDrop(e) {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files?.[0]);
  }

  async function handleClassify() {
    if (!file) return;
    setLoading(true);
    setError(null);

    try {
      const resultado = await classifyImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        const entry = {
          id: Date.now().toString(),
          imagemDataUrl: reader.result,
          categoria: resultado.categoria_pt,
          confianca: resultado.confianca,
          data: new Date().toLocaleString("pt-BR"),
        };
        saveResult(entry);

        navigate("/resultado", {
          state: { resultado, imagemDataUrl: reader.result },
        });
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-header mb-2">
        Classifique seu resíduo
      </h1>
      <p className="text-gray-600 mb-8">
        Envie uma imagem do resíduo para identificar o tipo de material.
      </p>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl py-16 px-6 cursor-pointer transition-colors ${
          dragActive ? "border-primary bg-primary/5" : "border-primary/40"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/jpg"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        {preview ? (
          <img
            src={preview}
            alt="Pré-visualização"
            className="mx-auto max-h-56 rounded-lg object-contain"
          />
        ) : (
          <>
            <UploadCloudIcon className="w-16 h-16 mx-auto mb-4" />
            <p className="text-gray-700">
              Arraste e solte uma imagem aqui
              <br />
              ou clique para selecionar
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Formatos suportados: JPG, PNG, JPEG
            </p>
          </>
        )}
      </div>

      {error && <p className="text-danger mt-4 text-sm">{error}</p>}

      <button
        onClick={handleClassify}
        disabled={!file || loading}
        className="mt-8 bg-primary hover:bg-primaryDark disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
      >
        {loading ? "Classificando..." : "⬆  Classificar imagem"}
      </button>
    </div>
  );
}
