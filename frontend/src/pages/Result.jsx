import { useLocation, useNavigate } from "react-router-dom";
import { RecycleIcon } from "../components/icons.jsx";

const DESCRICOES = {
  Plástico: "Este item pertence à categoria Plástico. Descarte corretamente para reciclagem.",
  Papelão: "Este item pertence à categoria Papelão. Descarte corretamente para reciclagem.",
  Vidro: "Este item pertence à categoria Vidro. Descarte corretamente para reciclagem.",
  Metal: "Este item pertence à categoria Metal. Descarte corretamente para reciclagem.",
  Papel: "Este item pertence à categoria Papel. Descarte corretamente para reciclagem.",
  Roupas: "Este item pertence à categoria Roupas. Considere doação ou pontos de coleta têxtil.",
  Calçados: "Este item pertence à categoria Calçados. Considere doação ou pontos de coleta têxtil.",
  Biológico: "Este item pertence à categoria Biológico. Descarte em coleta orgânica.",
  Bateria: "Este item pertence à categoria Bateria. Descarte em ponto de coleta especializado.",
  "Lixo Geral": "Este item pertence à categoria Lixo Geral. Descarte no lixo comum.",
};

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { resultado, imagemDataUrl } = location.state || {};

  if (!resultado) {
    navigate("/");
    return null;
  }

  const descricao =
    DESCRICOES[resultado.categoria_pt] ||
    `Este item pertence à categoria ${resultado.categoria_pt}.`;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-header text-center mb-2">
        Resultado da classificação
      </h1>
      <p className="text-gray-600 text-center mb-10">
        O modelo identificou o seguinte tipo de material:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <p className="font-medium text-gray-700 mb-2">Imagem enviada</p>
          <img
            src={imagemDataUrl}
            alt="Resíduo enviado"
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>

        <div>
          <p className="font-medium text-gray-700 mb-2">Resultado</p>
          <div className="border border-gray-200 rounded-lg p-6 h-64 flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 rounded-full p-3">
                <RecycleIcon className="w-8 h-8" color="#2F7A4B" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">
                  {resultado.categoria_pt}
                </p>
                <p className="text-sm text-gray-500">
                  Confiança: {resultado.confianca}%
                </p>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${resultado.confianca}%` }}
              />
            </div>

            <div>
              <p className="font-medium text-gray-700 text-sm mb-1">
                Descrição
              </p>
              <p className="text-sm text-gray-500">{descricao}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => navigate("/")}
          className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
        >
          ↻  Nova classificação
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-primaryDark text-white px-5 py-2.5 rounded-lg hover:bg-header transition-colors"
        >
          ⌂  Voltar para início
        </button>
      </div>
    </div>
  );
}
