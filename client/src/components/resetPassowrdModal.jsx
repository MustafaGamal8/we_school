

import React, { useState } from 'react';

import {resetPassword, sendResetCode} from '../functions/auth';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import * as Yup from 'yup';

import { toast } from "react-toastify";

const ResetPassowrdModal = ({ isOpen, onClose }) => {
    const [isCodeSent, setIsCodeSent] = useState(false);
  const [resetPasswordForm, setResetPasswordForm] = useState({
    email: '',
    resetCode: '',
    newPassword: '',
    confirmPassword: '',
  });
  
  const toggleModal = () => {
    onClose();
  };
  let resetPasswordSchema;

  if (isCodeSent) {
    resetPasswordSchema = Yup.object().shape({
      resetCode: Yup.string().required('Reset Code is required'),
      newPassword: Yup.string()
        .min(6, 'New Password must be at least 6 characters')
        .max(12, 'New Password can be at most 12 characters')
        .required('New Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Passwords must match')
        .required('Confirm Password is required'),
    });
  } else {
    resetPasswordSchema = Yup.object().shape({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    });
  }

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


  const handleInputChange_resetPassword = (e) => {
    const { name, value } = e.target;
    setResetPasswordForm({
      ...resetPasswordForm,
      [name]: value,
    });
  };
  
  const handleSendResetCode = async (e) => {
    e.preventDefault();
    try {
      await resetPasswordSchema.validate(resetPasswordForm, { abortEarly: false });
      toast.info('Sending reset code...', toastConfig);
      const response = await sendResetCode(resetPasswordForm.email);
      const { error, msg } = response
      if (error) {
        toast.error(error, toastConfig);
      } else {
        toast.success(msg, toastConfig);
        setIsCodeSent(true)
      }
    } catch (error) {
      toast.error(error.message, toastConfig);
    }
  };

  const handleSubmit_resetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPasswordSchema.validate(resetPasswordForm, { abortEarly: false });
      toast.info('Trying To Change Password ...', toastConfig);
      const response = await resetPassword(resetPasswordForm.resetCode, resetPasswordForm.confirmPassword);
      const { error, msg } = response
      console.log(response)
      if (error) {
        toast.error(error, toastConfig);
      } else {
        toast.success(msg, toastConfig);
        setIsCodeSent(false)
        setIsModalOpen(false)
      }
    } catch (error) {
      error.inner ? error.inner.forEach((err) => {
        toast.error(err.message, toastConfig);
      }): toast.error(error.message, toastConfig);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] rounded-lg border-none outline-none bg-[#f7f2fb] p-5 drop-shadow-lg  w-80 md:w-[500px] lg:w-[600px] dark:bg-slate-800 dark:text-white  "
      overlayClassName="bg-[#48535a] bg-opacity-50 w-full h-full fixed top-0 left-0"

    >
      <button
        onClick={toggleModal}
        className="close-button-style"
      >
        <MdClose size={24} />
      </button>
      <div className="h-10"></div>

      <div className="flex flex-col items-center justify-center h-full px-4 md:px-8">
        <h1 className="text-3xl font-semibold mb-6">Reset Your Password</h1>
        <input
          type="email"
          className="w-full p-2 border rounded-lg mb-4 text-black"
          placeholder="Email"
          name="email"
          value={resetPasswordForm.email}
          disabled={isCodeSent}
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
          className="w-full p-2 border rounded-lg mb-4 text-black "
          placeholder="New Password"
          name="newPassword"
          value={resetPasswordForm.newPassword}

          disabled={!isCodeSent}
          onChange={handleInputChange_resetPassword}
        />

        <input
          type="password"
          className="w-full p-2 border rounded-lg mb-6 text-black"
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
  );
}

export default ResetPassowrdModal;
