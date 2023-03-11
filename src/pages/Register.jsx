import Logo from "../assets/images/logo.jpeg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-[#f9fafb80] pt-[55px]">
      <div className="">
        <img className="mx-auto  h-[48px]" src={Logo} alt="Brand Logo" />
      </div>
      <div className="">
        {" "}
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Criar nova conta
        </h2>
        <div className="flex justify-center gap-1 mt-2 mb-6">
          <span className="text-light">Ou</span>{" "}
          <Link className="text-[#5050ecf2]" to="/register">
            {" "}
            entrar na sua conta existente
          </Link>
        </div>
      </div>

      <form className="bg-white shadow py-8 px-10 w-[450px] mx-auto rounded">
        <div className="mb-6">
          <label className="block text-sm mb-1" htmlFor="email">
            E-mail
          </label>
          <input
            className="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            type="mail"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm mb-1" htmlFor="email">
            Repetir e-mail
          </label>
          <input
            className="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            type="mail"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="password">
            Senha
          </label>
          <input
            className="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            type="password"
          />
        </div>
        <div className="flex gap-1 my-4">
          <input
            className="mb-4 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="checkbox"
          />
          <p className="text-sm">
            Eu li e aceito os <Link className="underline">termos de uso</Link>,{" "}
            <Link className="underline">
              termos de licença de uso de software
            </Link>
            , <Link className="underline">política de conteúdo</Link> da Kiwify
          </p>
        </div>
        <button className="bg-[#5050ecf2] w-full py-2 rounded-lg block text-white">
          Criar conta
        </button>
      </form>
    </div>
  );
};

export default Register;
