import { honorRankings } from "@/features/home/utils/honorRanking";

const CardCuadroHonor = () => {
  return (
    <div className="flex justify-center flex-wrap mt-8 gap-4">
      {honorRankings.map((honorRanking, index) => {
        let color;
        if (index === 0) {
          color = "bg-yellow-200 text-yellow-600 border-yellow-600 border";
        } else if (index === 1) {
          color = "bg-gray-200 text-gray-600 border-gray-600 border";
        } else if (index === 2) {
          color = "bg-amber-950/70 text-white border-amber-600 border";
        } else {
          color = "bg-blue-200 text-blue-600 border-blue-600 border";
        }

        return (
          <div key={honorRanking.id} className="w-96 border-2 rounded-lg">
            <img
              src={honorRanking.imagen}
              alt={`Imagen de perfil de ${honorRanking.nombre}`}
              className="rounded-t-lg h-60 w-full object-cover object-center"
            />
            <div className="p-3">
              <p className="font-semibold text-lg">{honorRanking.nombre}</p>
              <p className="bg-blue-200 text-blue-800 w-max rounded-lg px-3 py-1 text-sm font-medium my-1">
                {honorRanking.cargo}
              </p>
              <div className="flex items-center gap-1 mt-2">
                <div className={`${color} rounded-full px-2`}>
                  <p className="text-sm font-medium">{index + 1}</p>
                </div>
                <p className="text-gray-500 font-medium">{honorRanking.cantidad}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardCuadroHonor;
