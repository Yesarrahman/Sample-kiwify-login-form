import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Register = () => {
  const initialValues = { email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(Validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const Validate = (values) => {
    const errors = {};
    //const regex = /^[^\s@]+@\.[^s@]{2,}$/i;
    if (!values.email) {
      errors.email = 'Esse campo é obrigatório';
    }
    if (!values.email) {
      errors.email2 =
        'Os dois e-mails devem ser iguais Esse campo é obrigatório';
    }
    if (!values.password) {
      errors.password = 'Esse campo é obrigatório';
    }
    return errors;
  };
  return (
    <div className="bg-[#dbe9f8b6] pt-[55px] h-[800px]">
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
        className="bg-white shadow py-8 px-10 w-[450px] mx-auto rounded"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label className="block text-sm mb-1" htmlFor="email">
            E-mail
          </label>
          <input
            className="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            type="mail"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
        </div>
        <div className="mb-6">
          <label className="block text-sm mb-1" htmlFor="email2">
            Repetir e-mail
          </label>
          <input
            className="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            type="mail2"
            value={formValues.email2}
            onChange={handleChange}
          />
          <p className="text-xs text-red-500 mt-1">{formErrors.email2}</p>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="password">
            Senha
          </label>
          <input
            className="block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-blue-200 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            type="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p className="text-xs text-red-500 mt-1">{formErrors.password}</p>
        </div>
        <div className="flex gap-1 my-4">
          <input
            className="mb-4 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            type="checkbox"
          />
          <p className="text-sm">
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
