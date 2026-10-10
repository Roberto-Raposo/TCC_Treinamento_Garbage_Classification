import { useEffect, useState } from "react";
import { RecycleIcon, TrashIcon } from "../components/icons.jsx";
import { getResults, deleteResult, clearResults } from "../utils/storage.js";

export default function SavedResults() {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    setResultados(getResults());
  }, []);

  function handleDelete(id) {
    deleteResult(id);
    setResultados(getResults());
  }

  function handleClearAll() {
    clearResults();
    setResultados([]);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-header text-center mb-2">
        Resultados salvos (sessão)
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Veja abaixo as classificações realizadas nesta sessão.
      </p>

      {resultados.length === 0 ? (
        <p className="text-center text-gray-500">
          Nenhuma classificação realizada ainda.
        </p>
      ) : (
        <>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-primary/5 text-gray-600">
                <tr>
                  <th className="text-left font-medium py-3 px-4">Imagem</th>
                  <th className="text-left font-medium py-3 px-4">Categoria</th>
                  <th className="text-left font-medium py-3 px-4">Confiança</th>
                  <th className="text-left font-medium py-3 px-4">Data e hora</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {resultados.map((r) => (
                  <tr key={r.id} className="border-t border-gray-100">
                    <td className="py-3 px-4">
                      <img
                        src={r.imagemDataUrl}
                        alt={r.categoria}
                        className="w-12 h-12 rounded object-cover"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-2 font-medium text-gray-800">
                        <RecycleIcon className="w-4 h-4" color="#2F7A4B" />
                        {r.categoria}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-700">
                      {r.confianca}%
                    </td>
                    <td className="py-3 px-4 text-gray-500">{r.data}</td>
                    <td className="py-3 px-4 text-right">
                      <button onClick={() => handleDelete(r.id)}>
                        <TrashIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleClearAll}
              className="border border-danger text-danger px-5 py-2.5 rounded-lg hover:bg-danger/5 transition-colors inline-flex items-center gap-2"
            >
              <TrashIcon className="w-4 h-4" />
              Limpar todos os resultados
            </button>
          </div>
        </>
      )}
    </div>
  );
}
