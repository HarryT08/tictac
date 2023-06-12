import { useState } from "react";
import { Link } from 'react-router-dom';

const tabsData = [
  {
    id: 1,
    title: "Todos",
    content: "Herramienta 37 las tecnologias y yo",
  },
  {
    id: 2,
    title: "Relaciones sociales y practicas cívicas",
    content: "Herramienta 38 las tecnologias y yo",
  },
  {
    id: 3,
    title: "Sexualidad y construcción de ciudadanía",
    content: "Herramienta 39 las tecnologias y yo",
  },
  {
    id: 4,
    title: "Educación ambiental",
    content: "Herramienta 40 las tecnologias y yo",
  },
  {
    id: 5,
    title: "Emprendimiento",
    content: "Herramienta 41 las tecnologias y yo",
  },
  {
    id: 6,
    title: "TIC",
    content: "Herramienta 42 las tecnologias y yo",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <ul className="flex">
        {tabsData.map((tab, index) => (
          <li key={tab.id}>
            <button
              className={`${activeTab === index
                ? "bg-white text-azul-50 border-azul-50"
                : "bg-gray-100"
                } text-sm px-4 py-2 text-gray-500 font-semibold uppercase border-b-2 transition duration-300`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        {tabsData.map((tab, _index) => (
          <div
            className="border-2 border-gray-100 max-w-4xl shadow-sm rounded-md p-4"
            key={tabsData[0].id}
            hidden={activeTab !== 0}
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">{tab.content}</p>
              <Link to={`/menu-lideres/verherramienta/${tab.content}`}>
                <button
                  className="bg-azul-50 hover:bg-azul-100 text-white font-medium px-6 py-2 rounded-md transition duration-300"
                  type="button"
                >
                  Ver
                </button>
              </Link>
            </div>
          </div>
        ))}
        {tabsData.map((tab, index) => (
          <div
            className="border-2 border-gray-100 max-w-4xl shadow-sm rounded-md p-4"
            key={tab.id}
            hidden={activeTab !== index || activeTab === 0}
          >
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">{tab.content}</p>
              <Link to={`/menu-directivos/verherramienta/${tab.content}`}>
                <button
                  className="bg-azul-50 hover:bg-azul-100 text-white font-medium px-6 py-2 rounded-md transition duration-300"
                  type="button"
                >
                  Ver
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
