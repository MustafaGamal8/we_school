import { useState } from "react";
import { FaUser, FaEnvelope, FaCamera, FaGraduationCap, FaEye, FaTimes, FaEdit } from "react-icons/fa";

function Profile() {
  const currentUser = JSON.parse(localStorage.getItem('user'));

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [user,setUser] = useState({
    picture:currentUser.picture,
    firstName:currentUser.firstName,
    lastName:currentUser.lastName,
    email:currentUser.email,
    role:currentUser.role,
    grade:currentUser.grade
  })
  const [newUserData,setNewUserData] = useState(user)

  
  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };



  


  const handleImageChange = (e) => {
    // ... (same as in your code)
  };

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
    setUser(newUserData)    
  };


  const handleInputChange = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <section className="flex justify-center items-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-[40%] w-1/2 mdmax-w-md">
        
        <div className="relative mb-6 drop-shadow m-auto  w-40">
          <img src={"https://we-school-api.vercel.app" + user.picture} className="w-32 h-32 mx-auto rounded-full" alt="Profile" />
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
                  className="flex items-center bg-slate-700 text-white p-2"
                  type="button"
                  onClick={handleEditClick}
                >
                  حفظ
                </button>
                <button
                  className="flex items-center bg-red-400 text-white p-2"
                  type="button"
                  onClick={handleCancelClick}
                >
                  <FaTimes className="mr-2" />
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
