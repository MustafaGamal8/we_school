import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible,AiOutlineRollback } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';
import { signUp } from '../../functions/auth';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    invitationCode: '',
    role: '',
    grade: '',
  });

  const Navigate = useNavigate();

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

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6).max(12).required('Password is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    invitationCode: Yup.string().min(8).required('Invitation Code is required'),
    role: Yup.string().required('Please select a role'),
    grade: Yup.string().when('role', {
      is: 'student',
      then: Yup.string().required('Please select a grade'),
      otherwise: Yup.string(),
    }),
  });

  const validateForm = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();

    if (await schema.isValid(formData)) {
      const loadingToast = toast.loading('loading', toastConfig);
      const { msg, error } = await signUp(formData);

      if (error) {
        toast.error(error, toastConfig);
        toast.dismiss(loadingToast);
      } else {
        toast.success(msg, toastConfig);
        toast.dismiss(loadingToast);
        Navigate('/main/timeline');
      }
    }
  };

  const handleTogglePasswordVisibility = () => {
    setIsShowPassword((prev) => !prev);
  };

  const handleChangeRole = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      grade: '', // Reset grade when changing role
    });
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
        <img src="/logo.jpg" alt="" className="h-full" />
        <div></div>
      </nav>

      <main className="h-[100vh]">
        <img className="absolute top-0 right-0 z-[-1] w-full drop-shadow-xl" src="/assets/wave.svg" alt="" />

        <section className="h-full mt-20 capitalize">
          <h1 className="text-center text-5xl  capitalize lg:text-white  dark:text-white">sign up</h1>

          <div className="flex flex-col lg:flex-row-reverse w-[70%]  lg:h-[550px]  m-auto bg-white drop-shadow-lg rounded-lg overflow-hidden mt-20 dark:text-white dark:bg-slate-700">
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
                <div className="border-b border-bl w-full lg:w-[45%]">
                  <input
                    className="w-full outline-none bg-transparent text-main"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="border-b border-bl w-full lg:w-[45%]">
                  <input
                    className="w-full outline-none bg-transparent text-main"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="border-b border-bl w-full ">
                  <input
                    className="w-full outline-none bg-transparent text-main"
                    type="text"
                    placeholder="invit Code"
                    name="invitationCode"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="relative w-full">
                  <select
                    className="w-full border border-gray-300 bg-white text-gray-900 rounded-md px-8 py-2 pr-8 focus:text-main appearance-none"
                    name="role"
                    value={formData.role}
                    onChange={(e) => {
                      handleInputChange(e);
                      handleChangeRole(e);
                    }}
                  >
                    <option value="" disabled>
                      Select Your Role
                    </option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none p-2">
                    <FaChevronDown className="w-5 h-5 text-main" />
                  </div>
                </div>
                {formData.role === 'student' && (
                  <div className="relative w-full">
                    <select
                      className="w-full border border-gray-300 bg-white text-gray-900 rounded-md px-8 py-2 pr-8 focus:text-main appearance-none"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled>
                        Select Your Grade
                      </option>
                      <option value="A">Grade 1 (A)</option>
                      <option value="B">Grade 2 (B)</option>
                      <option value="C">Grade 3 (C)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none p-2">
                      <FaChevronDown className="w-5 h-5 text-main" />
                    </div>
                  </div>
                )}
                <button className="w-full bg-main text-white p-2 mx-3 rounded-lg capitalize">{'sign up'}</button>
                <Link
                to={"/login"}
                  
                  className="lg:w-1/2 m-auto bg-main text-white p-2 rounded-lg capitalize text-center cursor-pointer"
                >
                  {'or login'}
                </Link>
              </form>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUp;
