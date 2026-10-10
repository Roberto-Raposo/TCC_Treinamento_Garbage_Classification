import { RecycleIcon, TargetIcon, MonitorIcon } from "../components/icons.jsx";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-header text-center mb-10">
        Sobre o sistema
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-8 items-start">
        <div className="bg-primary/10 rounded-full p-8 mx-auto">
          <RecycleIcon className="w-16 h-16" color="#2F7A4B" />
        </div>

        <div className="space-y-6">
          <p className="text-gray-700">
            Este sistema utiliza técnicas de Visão Computacional e Aprendizado
            Profundo para identificar o tipo de resíduo sólido presente em
            uma imagem.
          </p>

          <p className="text-gray-700">
            Os modelos de classificação foram treinados com o dataset Garbage
            Classification V2 e implementados utilizando transfer learning
            com Fine-Tuning das arquiteturas EfficientNetV2S e ResNet50.
          </p>

          <div>
            <p className="font-semibold text-gray-800 flex items-center gap-2 mb-1">
              <TargetIcon className="w-5 h-5" />
              Objetivo
            </p>
            <p className="text-gray-700">
              Auxiliar no descarte correto de resíduos, promovendo a
              reciclagem e a preservação do meio ambiente.
            </p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 flex items-center gap-2 mb-1">
              <MonitorIcon className="w-5 h-5" />
              Tecnologias utilizadas
            </p>
            <p className="text-gray-700">
              Python, TensorFlow, FastAPI, React.js e outras. Além de modelo treinado com EfficientNetV2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
