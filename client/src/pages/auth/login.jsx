import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineRollback } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';
import { login, sendResetCode } from '../../functions/auth';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

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

  const resetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    resetCode: Yup.string().when('isCodeSent', {
      is: true,
      then: Yup.string().required('Reset Code is required'),
    }),
    newPassword: Yup.string().when('isCodeSent', {
      is: true,
      then: Yup.string().min(6).max(12).required('New Password is required'),
    }),
    confirmPassword: Yup.string().when(['isCodeSent', 'newPassword'], {
      is: (isCodeSent, newPassword) => isCodeSent && newPassword,
      then: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
  });  
  
  

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

  const Navigate = useNavigate();

  const validateForm = async (validationSchema, formData) => {
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      toast.dismiss(); // Dismiss any previous error toasts
    } catch (error) {
      error.inner.forEach((err) => {
        toast.error(err.message, toastConfig);
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateForm(schema, formData);
  };

  const handleInputChange_resetPassword = (e) => {
    const { name, value } = e.target;
    setResetPasswordForm({
      ...resetPasswordForm,
      [name]: value,
    });
    validateForm(resetPasswordSchema, resetPasswordForm);
  };

  const handleTogglePasswordVisibility = () => {
    setIsShowPassword((prev) => !prev);
  };

  const handleSendResetCode = async (e) => {
    e.preventDefault();
    try {
      await resetPasswordSchema.validate(resetPasswordForm, { abortEarly: false });
      toast.info('Sending reset code...', toastConfig);
      const response = await sendResetCode(resetPasswordForm.email);
      const { error, msg } = response
      console.log(response)
      if (error) {
        toast.error(error, toastConfig);
      } else {
        toast.success(msg, toastConfig);
      }
    } catch (error) {
      toast.error(error.message, toastConfig);
    }
  };

  const handleSubmit_resetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPasswordSchema.validate(resetPasswordForm, { abortEarly: false });
      // Perform reset password logic
      // ...
    } catch (error) {
      toast.error(error.message, toastConfig);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      toast.info('Logging in...', toastConfig);
      const { msg, error } = await login(formData);
      if (error) {
        toast.error(error, toastConfig);
      } else {
        toast.success(msg, toastConfig);
        Navigate('/main/timeline');
      }
    } catch (error) {
      error.inner.forEach((err) => {
        toast.error(err.message, toastConfig);
      });
    }
  };

  return (
    <>
      <nav className="relative flex items-center justify-between px-2 drop-shadow bg-white h-20 text-main z-[10]">
        <Link
          to="/"
          className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg font-semibold"
        >
          رجوع <AiOutlineRollback />
        </Link>

        <img src="/logo.jpg" alt="" className="h-full" />
        <div></div>
      </nav>

      <main className="h-[100vh]">
        <img className="absolute top-0 right-0 z-[-1] w-full drop-shadow-xl" src="/assets/wave.svg" alt="" />

        <section className="h-full mt-20 capitalize">
          <h1 className="text-center text-5xl  capitalize lg:text-white ">{'login'}</h1>

          <div className="flex flex-col lg:flex-row-reverse w-[70%]  lg:h-[550px]  m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden mt-20">
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
                    className="w-full outline-none bg-transparent text-main"
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex border-b border-bl w-full">
                  <input
                    className="w-full outline-none bg-transparent text-main"
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



        <Modal
          isOpen={isModalOpen}
          className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] rounded-lg border-none outline-none bg-[#f7f2fb] p-2 drop-shadow-lg  w-80 md:w-[400px] lg:w-[600px]"
          overlayClassName="bg-[#48535a] bg-opacity-50 w-full h-full fixed top-0 left-0"

        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="close-button-style"
          >
            <MdClose size={24} />
          </button>
          <div className="h-10"></div>

          <div className="flex flex-col items-center justify-center h-full px-4 md:px-8">
            <h1 className="text-3xl font-semibold mb-6">Reset Your Password</h1>
            <input
              type="email"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Email"
              name="email"
              value={resetPasswordForm.email}
              onChange={handleInputChange_resetPassword}
            />

            <button
              className="w-full bg-sec text-white py-2 px-4 rounded-lg mb-4 disabled:opacity-50"
              disabled={!resetPasswordForm.email}
              onClick={handleSendResetCode}
            >
              Send Code
            </button>

            <input
              type="text"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="Reset Code"
              name="resetCode"
              value={resetPasswordForm.resetCode}
              
              disabled={!isCodeSent}
              onChange={handleInputChange_resetPassword}
            />

            <input
              type="password"
              className="w-full p-2 border rounded-lg mb-4"
              placeholder="New Password"
              name="newPassword"
              value={resetPasswordForm.newPassword}
              
              disabled={!isCodeSent}
              onChange={handleInputChange_resetPassword}
            />

            <input
              type="password"
              className="w-full p-2 border rounded-lg mb-6"
              placeholder="Confirm New Password"
              name="confirmPassword"
              value={resetPasswordForm.confirmPassword}
              
              disabled={!isCodeSent}
              onChange={handleInputChange_resetPassword}
            />

            <button
              className="w-full bg-main text-white py-2 px-4 rounded-lg"
              onClick={handleSubmit_resetPassword}
            >
              Reset Password
            </button>
          </div>
        </Modal>



      </main>
    </>
  );
};

export default Login;
