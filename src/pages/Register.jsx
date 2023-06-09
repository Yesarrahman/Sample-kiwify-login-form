import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../../src/styles.css';

const Register = () => {
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
    <div className="pt-[55px] h-[800px]">
      <div className="">
        <img className="mx-auto  h-[48px]" src={Logo} alt="Brand Logo" />
      </div>
      <div className="">
        {' '}
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Criar nova conta
        </h2>
        <div className="flex justify-center gap-1 mt-2 mb-6">
          <span className="text-light">Ou</span>{' '}
          <Link
            className="text-[#5050ecd0] hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            to="/"
          >
            {' '}
            entrar na sua conta existente
          </Link>
        </div>
      </div>

      <form
        className="bg-white shadow py-8 px-10 w-full sm:w-[450px] mx-auto rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <label className="block text-sm mb-1" htmlFor="email">
            E-mail
          </label>
          <input
            {...register('email', { required: true })}
            className={
              errors.email
                ? 'block bg-white py-2 px-3 border border-red-500 rounded-md shadow-sm focus:outline focus:outline-red-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
                : 'block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
            }
            type="email"
          />
          <p className="text-xs text-red-500 mt-1">
            {errors.email && 'Esse campo é obrigatório'}
          </p>
        </div>
        <div className="mb-6">
          <label className="block text-sm mb-1" htmlFor="email2">
            Repetir e-mail
          </label>
          <input
            {...register('email2', { required: true })}
            className={
              errors.email2
                ? 'block bg-white py-2 px-3 border border-red-500 rounded-md shadow-sm focus:outline focus:outline-red-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
                : 'block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
            }
            type="email"
          />
          <p className="text-xs text-red-500 mt-1">
            {errors.email2 && 'Esse campo é obrigatório'}
          </p>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="password">
            Senha
          </label>
          <input
            {...register('password', { required: true })}
            className={
              errors.password
                ? 'block bg-white py-2 px-3 border border-red-500 rounded-md shadow-sm focus:outline focus:outline-red-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
                : 'block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
            }
            type="password"
          />
          <p className="text-xs text-red-500 mt-1">
            {errors.password && 'Esse campo é obrigatório'}
          </p>
        </div>
        <div className="flex gap-1 my-4">
          <input
            className="mb-4 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-5 h-5"
            type="checkbox"
            {...register('terms', { required: true })}
          />
          <p className="text-xs text-gray-500">
            Eu li e aceito os <Link className="underline">termos de uso</Link>,{' '}
            <Link className="underline">
              termos de licença de uso de software
            </Link>
            , <Link className="underline">política de conteúdo</Link> da Kiwify
          </p>
        </div>
        <button className="bg-[#5050ecf2] hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out w-full py-2 rounded-lg block text-white">
          Criar conta
        </button>
      </form>
    </div>
  );
};

export default Register;
