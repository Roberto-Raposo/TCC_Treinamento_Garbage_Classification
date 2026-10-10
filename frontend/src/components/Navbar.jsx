import { NavLink } from "react-router-dom";
import { RecycleIcon } from "./icons.jsx";

const linkBase =
  "text-white/90 hover:text-white transition-colors pb-1 border-b-2 border-transparent";
const linkActive = "text-white border-accent";

export default function Navbar() {
  return (
    <header className="bg-header">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <RecycleIcon className="w-6 h-6" color="#ffffff" />
          Classificação de resíduos sólidos
        </div>
        <nav className="flex items-center gap-8 text-sm font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            Nova Classificação
          </NavLink>
          <NavLink
            to="/resultados-salvos"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            Resultados salvos
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : ""}`
            }
          >
            Sobre
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
