import { useForm } from 'react-hook-form';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import '../../src/styles.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="h-full pt-[80px]">
      <div className="">
        <img className="mx-auto  h-[48px]" src={Logo} alt="Brand Logo" />
      </div>
      <div className="">
        {' '}
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Entrar na sua conta
        </h2>
        <div className="flex justify-center gap-1 mt-2 mb-6">
          <span className="text-light">Ou</span>{' '}
          <Link
            className="text-[#5050ecd0] hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            to="/register"
          >
            {' '}
            fazer cadastro{' '}
          </Link>
        </div>
      </div>

      <form
        className="bg-white shadow py-8 px-10 mx-auto rounded w-full sm:w-[450px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <label className="block text-sm mb-1" htmlFor="email">
            E-mail
          </label>
          <input
            className={
              errors.email
                ? 'block bg-white py-2 px-3 border border-red-600 rounded-md shadow-sm focus:outline focus:outline-red-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
                : 'block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
            }
            type="email"
            {...register('email', { required: true })}
          />
          <p className="text-xs text-red-500 mt-1">
            {errors.email && 'Esse campo é obrigatório'}
          </p>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="password">
            Senha
          </label>
          <input
            className={
              errors.password
                ? 'block bg-white py-2 px-3 border border-red-600 rounded-md shadow-sm focus:outline focus:outline-red-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
                : 'block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
            }
            type="password"
            {...register('password', { required: true })}
          />
          <p className="text-xs text-red-500 mt-1">
            {errors.password && 'Esse campo é obrigatório'}
          </p>
        </div>
        <Link
          className="block text-right my-4 text-sm text-[#5050ecd0] hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          to="/resetPassword"
        >
          Esqueceu a senha?
        </Link>
        <button className="bg-[#5050ecf2] hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out w-full py-2 rounded-lg block text-white">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
