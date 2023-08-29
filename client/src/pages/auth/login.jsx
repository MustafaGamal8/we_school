import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineRollback } from 'react-icons/ai';
import { login} from '../../functions/auth';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import ResetPassowrdModal from '../../components/resetPassowrdModal';

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [resetPasswordForm, setResetPasswordForm] = useState({
    email: '',
    resetCode: '',
    newPassword: '',
    confirmPassword: '',
  });

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6).max(12).required('Password is required'),
  });


  
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };



  const toastConfig = {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    className: 'md:w-80 md:text-base w-60 text-sm',
  };
  +3

  const Navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleTogglePasswordVisibility = () => {
    setIsShowPassword((prev) => !prev);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      const loadingToast = toast.loading('loading', toastConfig);
      const { msg, error } = await login(formData);
      if (error) {
        toast.error(error, toastConfig);
        toast.dismiss(loadingToast)
      } else {
        toast.dismiss(loadingToast);
        toast.success(msg, toastConfig);
        Navigate('/main/timeline');
      }
    } catch (error) {
      error.inner ? error.inner.forEach((err) => {
        toast.error(err.message, toastConfig);
      }): toast.error(error.message, toastConfig);
    }
  };

  return (
    <>
      <nav className="relative flex items-center justify-between px-2 drop-shadow bg-white h-20 text-main z-[10] dark:bg-slate-700 dark:text-white">
        <Link
          to="/"
          className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg font-semibold"
        >
          رجوع <AiOutlineRollback />
        </Link>

        <img src="/logo.png" alt="" className="h-full" />
        <div></div>
      </nav>

      <main className="h-[100vh]">
        <img className="absolute top-0 right-0 z-[-1] w-full drop-shadow-xl" src="/assets/wave.svg" alt="" />

        <section className="h-full mt-20 capitalize">
          <h1 className="text-center text-5xl  capitalize lg:text-white  dark:text-white">login</h1>

          <div className="flex flex-col lg:flex-row-reverse w-[70%]  lg:h-[550px]  m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden mt-20 dark:bg-slate-700 dark:text-white ">
            <div className=" h-full lg:w-[80%]">
              <img src="/assets/student2.jpg" alt="" className="h-full w-full" />
            </div>

            <section className="w-full p-5 flex flex-col items-center justify-around my-8">
              <h1 className="text-center text-3xl font-semibold uppercase">We School</h1>

              <form
                action=""
                className="flex flex-col lg:flex-row w-full flex-wrap gap-7 p-5 "
                onSubmit={handleSubmit}
              >
                <div className="border-b border-bl w-full">
                  <input
                    className="w-full outline-none bg-transparent text-main dark:text-white"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex border-b border-bl w-full">
                  <input
                    className="w-full outline-none bg-transparent text-main dark:text-white"
                    type={isShowPassword ? 'text' : 'password'}
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                  />
                  <h1 className="text-gray-500 hover:text-main text-lg" onClick={handleTogglePasswordVisibility}>
                    {isShowPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </h1>
                </div>

                <button className="w-full bg-main text-white p-2 mx-3 rounded-lg capitalize">{'login'}</button>
                <div className='text-center  cursor-pointer  w-full ' onClick={() => { setIsModalOpen(true) }}>forget password ?</div>

                <Link
                  to={"/signup"}
                  className="lg:w-1/2 m-auto bg-main text-white p-2 rounded-lg capitalize text-center cursor-pointer"
                >
                  {'or sign up'}
                </Link>
              </form>
            </section>
          </div>
        </section>




{isModalOpen && <ResetPassowrdModal    
          isOpen={true}
          onClose={handleToggleModal} />}

      </main>
    </>
  );
};

export default Login;
