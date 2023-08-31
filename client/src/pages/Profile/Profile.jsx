import { useState } from "react";
import { FaUser, FaEnvelope, FaCamera, FaGraduationCap, FaEye, FaTimes, FaEdit, FaUserCircle } from "react-icons/fa";
import { editUser } from "../../functions/users";
import ResetPassowrdModal from './../../components/resetPassowrdModal';
import { MdLock, MdSave } from "react-icons/md";

function Profile() {
  const currentUser = JSON.parse(localStorage.getItem('user'));


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [user, setUser] = useState({
    _id: currentUser._id,
    picture: currentUser.picture && "https://we-school-api.vercel.app" + currentUser.picture,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: currentUser.password,
    role: currentUser.role,
    grade: currentUser.grade
  })
  const [newUser, setNewUser] = useState(user)


  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };






  const handleImageChange = (e) => {
    const newPicture = URL.createObjectURL(e.target.files[0]);
    setUser({ ...user, picture: newPicture })
    setNewUser((prevUser) => ({
      ...prevUser,
      picture: e.target.files[0]
    }));

  };

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);

  };
  const handleSaveClick = async () => {
    await editUser(newUser)
    setIsEditMode(!isEditMode);

  };

  const handleCancelClick = () => {
    setIsEditMode(false);
    setNewUser(user)
  };


  const handleInputChange = (field, value) => {
    setNewUser((prevUser) => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <section className="flex justify-center items-center h-screen w-full lg:static relative ">

      
    <img
        className=" absolute bottom-0  scale-y-[-1] right-0 z-[-1] w-full h-max drop-shadow-xl "
        src="/assets/wave.svg"
        alt=""
      />
    <img
        className=" absolute top-0   right-0 z-[-1] w-full h-max drop-shadow-xl "
        src="/assets/wave.svg"
        alt=""
      />

      <div className="flex flex-col items-center  bg-white p-8 rounded-lg shadow-lg lg:w-[40%] w-[90%] mdmax-w-md dark:bg-slate-700 dark:text-white md:mt-0  mt-40">

        <div className="relative mb-6 drop-shadow m-auto  w-40">
          {user.picture ? <img src={user.picture} className="w-32 h-32 mx-auto rounded-full" alt="Profile" /> : <FaUserCircle className={`  text-gray-200  w-32 h-32`} />}
          {isEditMode && (
            <label
              htmlFor="input-file"
              className="absolute bottom-[40%] left-[40%] p-2 bg-gray-300 rounded-full cursor-pointer"
            >
              <FaCamera />
            </label>
          )}
          <input
            type="file"
            accept="image/*"
            id="input-file"
            onChange={handleImageChange}
            className="sr-only "
          />
        </div>

        <h1 className="text-2xl font-bold mb-4 text-center">الملف الشخصي</h1>



        <div className="p-6 flex flex-col items-start ">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <div className="flex items-center">
              <FaUser className="mr-2 text-gray-500" />
              {isEditMode ? (
                <input
                  type="text"
                  className=" outline-main  border-2 border-sec p-1 rounded bg-transparent  text-slate-800 dark:text-white"
                  value={newUser.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              ) : (
                <span className="">{newUser.firstName}</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <div className="flex items-center">
              <FaUser className="mr-2 text-gray-500" />
              {isEditMode ? (
                <input
                  type="text"
                  className=" outline-main  border-2 border-sec p-1 rounded bg-transparent text-slate-800 dark:text-white"
                  value={newUser.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              ) : (
                <span className="">{newUser.lastName}</span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-gray-500" />
              <span className="">{newUser.email}</span>
            </div>
          </div>
          {newUser.role === "student" && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
                Grade
              </label>
              <div className="flex items-center">
                <FaGraduationCap className="mr-2 text-gray-500" />
                <span className="">{newUser.grade}</span>
              </div>
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <div className="flex items-center">
              <FaEye className="mr-2 text-gray-500" />
              <span className="">{newUser.role}</span>
            </div>
          </div>
          {
            isEditMode && (
              <button
                onClick={handleToggleModal}
                className="bg-main  text-white font-semibold py-2 px-4 rounded-md focus:outline-none  m-auto"
              >
                <MdLock className="inline-block mr-2" />
                تغير كلمة السر
              </button>
            )
          }
        </div>


        {/* edit mode */}
        <div className="flex justify-center space-x-4 mt-6">
          {isEditMode ? (
            <>
              <button
                className="flex items-center bg-slate-800 text-white p-2 rounded"
                type="button"
                onClick={handleSaveClick}
              >
                <MdSave className="mr-2" />
                حفظ
              </button>
              <button
                className="flex items-center bg-red-400 text-white p-2 rounded"
                type="button"
                onClick={handleCancelClick}
              >
                <FaTimes className="mr-2 " />
                إلغاء
              </button>
            </>
          ) : (
            <button
              className="flex items-center bg-slate-700 text-white p-2 "
              type="button"
              onClick={handleEditClick}
            >
              <FaEdit className="mr-2" />
              تعديل
            </button>
          )}
        </div>
      </div>


      {isModalOpen && <ResetPassowrdModal
        isOpen={true}
        onClose={handleToggleModal} />}
    </section>
  );
}

export default Profile;
