import Logo from "../assets/images/logo.jpeg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#f9fafb80] pt-20">
      <div className="">
        <img className="mx-auto  h-[48px]" src={Logo} alt="Brand Logo" />
      </div>
      <div className="">
        {" "}
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Entrar na sua conta
        </h2>
        <div className="flex justify-center gap-1 mt-2 mb-6">
          <span className="text-light">Ou</span>{" "}
          <Link className="text-[#5050ecf2]" to="/register">
            {" "}
            fazer cadastro{" "}
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
        <div>
          <label className="block text-sm mb-1" htmlFor="password">
            Senha
          </label>
          <input
            className="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            type="password"
          />
        </div>
        <Link
          className="block text-right my-4 text-sm text-[#5050ecf2]"
          to="/forget"
        >
          Esqueceu a senha?
        </Link>
        <button className="bg-[#5050ecf2] w-full py-2 rounded-lg block text-white">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
