import Image from "next/image";

const Menu = () => {
  return (
    <nav className="p-6 flex justify-center bg-emerald-500">
      <div className="flex items-center justify-between flex-wrap w-full max-w-screen-xl">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image src="/assets/logo dark.png" alt="Logo" width={250} height={250} />
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Como leer resultados
            </a>
            <a
              href="https://micm.gob.do/resultado-de-inspecciones-a-estaciones-de-servicio-de-combustibles/?utm_source=elbrifin&utm_medium=newsletter&utm_campaign=no-entendi-ni-el-tampoco"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              target="blank"
            >
              MICM <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 leading-none lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Precios
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
