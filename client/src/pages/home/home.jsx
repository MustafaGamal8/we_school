import { useState } from "react";
import { CiUser } from "react-icons/ci"
import {  MdHome, MdMenu, MdPeopleAlt, MdEditLocation, MdClass, MdPhoneBluetoothSpeaker,  MdEmail } from "react-icons/md"
import {BiShowAlt} from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"
import {AiOutlineArrowUp} from "react-icons/ai"

import { FaHandshake, FaPhone, FaSchool, FaThLarge } from 'react-icons/fa';
import { IoMdPhotos } from 'react-icons/io';
import { Link } from "react-router-dom";
import "./home.css"
import ListItem from "../../components/listItem";
import Slider from './../../components/slider';
import { BsFileText } from "react-icons/bs";
import Footer from "../../components/footer/Footer";
import { Trans} from "react-i18next";
import  i18n from 'i18next';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShowMore, setIsShowMore] = useState(false)

  const handleMenuClick = (elementId) => {
    const targetElement = document.getElementById(elementId);
  
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }

    setTimeout(() => {
      setIsMenuOpen(false)
    }, 300);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const emailBody = `اسم: ${name}%0Aبريد إلكتروني: ${email}%0Aرسالة: ${message}`;
    const emailLink = `mailto:weschoolmansoura@gmail.com?subject=رسالة من ${name}&body=${emailBody}`;
    window.location.href = emailLink;
  };


  const slides = [ { img: "/assets/nardin.jpg" }, { img: "/assets/school/school1.jpeg" }, { img: "/assets/school/school2.jpeg" }, { img: "/assets/school/school3.jpeg" }, { img: "/assets/school/school4.jpeg" } ]


  const btn = document.getElementById('btn');


const handelGoTop = ()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
});

}
  
  const userJSON = localStorage.getItem('user');
  const user = JSON.parse(userJSON);
  
  

  
  return (

    <>


<button onClick={handelGoTop} className="bg-main text-white font-semibold h-10 w-10 flex items-center justify-center rounded-full fixed bottom-7 right-7 z-10" id="btn"><AiOutlineArrowUp/></button>


 <nav className="relative flex items-center justify-between px-2 drop-shadow bg-white h-20 text-main z-[10]">

{/* sm screen*/}
<div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex md:hidden text-3xl hover:bg-main hover:text-white rounded-full cursor-pointer p-1 transition-all ">
  <MdMenu />
</div>

<div className={` ${isMenuOpen ? "menuAnimitionOpen flex md:hidden" : "hidden"} absolute top-[100%] left-0 bg-white text-main  w-full h-0  flex-col-reverse items-center justify-center   whitespace-nowrap`}>
  <div onClick={() => handleMenuClick("school_contact")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2]  hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>تواصل</Trans></h1> <FaPhone className="text-xl" />
  </div>
  <div onClick={() => handleMenuClick("school_terms")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>شروط التقديم</Trans></h1> <BsFileText />
  </div>
  <div onClick={() => handleMenuClick("school_debartments")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>الأقسام</Trans></h1> <FaThLarge className="text-xl" />
  </div>
  <div onClick={() => handleMenuClick("about_school")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>عن المدرسة</Trans></h1> <FaSchool className="text-xl" />
  </div>
  <div onClick={() => handleMenuClick("school_partners")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>شركاؤنا</Trans></h1> <FaHandshake />
  </div>
  <div onClick={() => handleMenuClick("school_main")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>الصفحة الرئيسية</Trans></h1> <MdHome className="text-xl" />
  </div>
</div>
{/* end of sm screen*/}

<img src="/logo.jpg" alt="" className="h-full " />

<div className="hidden  md:flex items-center justify-center lg:gap-3  whitespace-nowrap">
  <div onClick={() => handleMenuClick("school_contact")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2]  hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>تواصل</Trans></h1> <FaPhone className="text-xl" />
  </div>
  <div onClick={() => handleMenuClick("school_terms")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>شروط التقديم</Trans></h1> <BsFileText />
  </div>
  <div onClick={() => handleMenuClick("school_debartments")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>الأقسام</Trans></h1> <FaThLarge className="text-xl" />
  </div>
  <div onClick={() => handleMenuClick("about_school")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>عن المدرسة</Trans></h1> <FaSchool className="text-xl" />
  </div>
  <div onClick={() => handleMenuClick("school_partners")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>شركاؤنا</Trans></h1> <FaHandshake />
  </div>
  <div onClick={() => handleMenuClick("school_main")} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg">
    <h1><Trans>الصفحة الرئيسية</Trans></h1> <MdHome className="text-xl" />
  </div>
</div>

<Link to={user ? "/main/timeline" : "/login"} className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg font-semibold">
  <Trans>تسجيل الدخول</Trans><CiUser className="md:text-2xl text-lg " />
</Link>
</nav>





      <main className="relative  w-full flex flex-col gap-8">
        <img className=" absolute top-0 right-0 -z-10 w-full drop-shadow-xl" src="/assets/wave.svg" alt="" />


        <section id="school_main">
  <div className="text-center  mt-20 bg-white rounded-lg w-80  m-auto py-2 drop-shadow">
    <h1 className="text-xl md:text-3xl drop-shadow text-center"><Trans>مدرسة وي للتكنولوجيا التطبيقية</Trans></h1>
    <h2 className="mt-2 md:text-2xl  text-[#6e237e] relative w-max m-auto text-animition "><Trans>في المنصورة</Trans></h2>
  </div>
</section>

<section className="flex flex-col md:flex-row items-center justify-around px-5 w-full   pt-20 text-right">
  <div className="overflow-hidden bg-white p-2 rounded-lg drop-shadow-2xl relative">
    <img
      className="md:h-96 h-60 rounded-lg transition-all duration-500 transform hover:scale-105"
      src="/assets/student.jpg"
      alt="الطلاب في مدرسة WeTech للتكنولوجيا التطبيقية"
    />

    <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
      <h2 className="text-2xl font-semibold mb-4"><Trans>مدرسة وي للتكنولوجيا التطبيقية</Trans></h2>
      <p className="text-lg text-center">
        <Trans>تعلم  البرمجة واستكشف عالمًا مشوقًا في تقنية الاتصالات والشبكات في مدرسة وي.</Trans>
      </p>
      <button onClick={() => handleMenuClick("school_debartments")} className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 mt-4 rounded">
        <Trans>استكشف المناهج</Trans>
      </button>
    </div>
  </div>

  <div className="md:w-[520px]  flex flex-col items-end justify-end  gap-3 mt-5">
    <p className="font-semibold text-lg"><Trans>ما هي ؟</Trans></p>
    <h1 className="text-main text-3xl semi semi"><Trans>مدرسة وي للتكنولوجيا التطبيقية</Trans></h1>
    <p className="md:text-lg"><Trans>مرحبًا بك في "مدرسة وي للتكنولوجيا التطبيقية"! مدرستنا هي مؤسسة رائدة متخصصة في تقديم تعليم متميز في مجالات البرمجة والاتصالات والشبكات. في "وي للتكنولوجيا التطبيقية"، نسعى لتمكين طلابنا بالمعرفة والمهارات اللازمة للتفوق في عالم التكنولوجيا سريع التطور.</Trans></p>
  </div>
</section>

<img className="m-auto h-12 mt-10" src="/assets/mouseAnimition.gif" />

<section id="school_partners" className="w-full">
  <h1 className="md:text-3xl  text-xl  text-sec font-semibold animated-title text-center relative w-max m-auto">
    <MdPeopleAlt className="inline-block mr-2 text-2xl md:text-4xl " />            
    <Trans>شركاؤنا</Trans>
  </h1>
            

          <div className="w-full  bg-white  border-y flex flex-col md:flex-row items-center justify-evenly gap-5 p-5 mt-10">
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture1.png" alt="" /></div>
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture2.png" alt="" /></div>
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture3.png" alt="" /></div>
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture4.png" alt="" /></div>
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture5.png" alt="" /></div>
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture6.png" alt="" /></div>
          </div>
        </section>




        <section id="school_debartments" className="w-full mt-5 ">
          <h1 className="md:text-3xl  text-xl  text-sec font-semibold animated-title text-center relative w-max m-auto">
            <MdClass  className="inline-block mr-2 text-2xl md:text-4xl " />            
            الأقسام
            </h1>

          <div className="w-full bg-white mt-3 flex flex-col md:flex-row items-center justify-around gap-5 p-5">
            <div className="bg-white drop-shadow flex-col rounded-lg w-[80%] md:w-[350px] h-[450px] flex hover:scale-[1.07] transition-all">
              <img src="/assets/network.jfif" alt="" className="w-full h-[50%] object-cover rounded-lg" />
              <h1 className="text-center p-3 text-3xl font-bold text-main">الشبكات</h1>
              <p className="text-center p-3">
                في هذا القسم، ندرس مجال الشبكات وأمن المعلومات السيبراني. نقوم بدراسة تصميم وإدارة الشبكات وحمايتها من التهديدات السيبرانية.
              </p>
            </div>

            <div className="bg-white drop-shadow flex-col rounded-lg w-[80%] md:w-[350px] h-[450px] flex hover:scale-[1.07] transition-all">
              <img src="/assets/programming.jfif" alt="" className="w-full h-[50%] object-cover rounded-lg" />
              <h1 className="text-center p-3 text-3xl font-bold text-yellow-500">البرمجة</h1>
              <p className="text-center p-3">
                في هذا القسم، ندرس مجال البرمجة وتطوير البرمجيات. نقوم بدراسة تطوير تطبيقات الويب والتقنيات المستخدمة في برمجة البرامج.
              </p>
            </div>

            <div className="bg-white drop-shadow flex-col rounded-lg w-[80%] md:w-[350px] h-[450px] flex hover:scale-[1.07] transition-all">
              <img src="/assets/telycommunications.jfif" alt="" className="w-full h-[50%] object-cover rounded-lg" />
              <h1 className="text-center p-3 text-3xl font-bold">الاتصالات</h1>
              <p className="text-center p-3">
                في هذا القسم، ندرس علوم الاتصالات. نقوم بدراسة أساسيات الاتصالات وتقنيات الاتصال المختلفة وتطبيقاتها في عالم الاتصالات الحديث.
              </p>
            </div>
          </div>
        </section>

        <section id="about_school" className="md:w-[60%] w-[80%] m-auto  drop-shadow-md">
          <h1 className="md:text-3xl  text-xl  text-sec font-semibold animated-title text-center relative w-max m-auto">
            <IoMdPhotos className="inline-block mr-2 text-2xl md:text-4xl "/>
            صور من المدرسة
          
          </h1>

        <div className="w-full m-auto mt-10"><Slider slides={slides} /></div>

        </section>


        <section id="school_terms" className="w-full mt-10  relative" >

      <h1  className="md:text-3xl  text-xl text-sec font-semibold animated-title text-center relative w-max m-auto">
        <FaSchool className="inline-block mr-2 text-2xl md:text-4xl " />
        معلومات حول المدرسة
      </h1>

          
          <img src="/assets/bloab1.svg" className="absolute top-40  -left-80 " alt="" />

          
          <div  className="p-2 mt-16" dir="rtl">
            <ListItem
              title="ما هي مدارس التكنولوجيا التطبيقية؟"
              content={[
                "- مدارس التكنولوجيا التطبيقية هي نوع من مدارس التعليم الفني، حيث تعتمد على الشراكة مع شركة في القطاع الخاص لإعداد فنيين متعلمين ومدربين ومحترفين في مجالات تخصصهم.",
                "- تتنوع تخصصات مدارس التكنولوجيا التطبيقية لتواكب احتياجات سوق العمل المتغيرة، وتهدف إلى تزويد الطلاب بالمهارات والمعرفة اللازمة للعمل في صناعات التكنولوجيا والابتكار."
              ]}
            />
            




            <ListItem
              title="ايه هي مدرسة WE للتكنولوجيا التطبيقية؟"
              content={[
                "- هي أول مدرسة متخصصة في مجالي الاتصالات وتكنولوجيا المعلومات وهي عبارة عن شراكة بين وزارة الاتصالات وتكنولوجيا المعلوماتMCIT وشركة المصرية للاتصالات Telecom Egypt ونظام التعليم فيها قائم على نظام الجدارات"
              ]}
            />

            <ListItem
              title="يعني إيه نظام الجدارات؟"
              content={[
                "- هو نظام للتعليم تم تطبيقه عشان نتأكد إن طالب WE يبقى فني محترف عنده العوامل الأساسية عشان يكون فني جدير متميز عن غيره ومحترف في مجال تخصصه وهي:",
                "* المعارف النظرية",
                "* المهارات العملية",
                "* الأخلاقيات والمهارات الحياتية (زي مهارات التواصل الفعال والعمل في فريق وغيرهم)"
              ]}
            />
         <ListItem
              title=". ايه هي فروع WE ومواقعها؟"
              content={[
                "- حاليا فروع WE عبارة عن 7 فروع في سبع محافظات مختلفة وهم:",
                "القاهرة (مدينة نصر)،",
                "-الاسكندرية",
                "-المنيا",
                "-المنصورة",
                "-السويس",
                "-والوادي الجديد",
                "- الجيزة(الشيخ زايد )"
              ]}
            />

            <ListItem
            
              title="ايه هي شروط القبول بمدارس WE ؟"
              content={[
                "- بتختلف الشروط من عام لآخر ولكن بالنسبة لشروط السنة اللي فاتت 2021/2022 كانت:",
                "* أن يكون الطالب لائق طبيا",
                "* أن لا يزيد سن الطالب في أول أكتوبر عن 18 سنة",
                "* أن يتمتع الطالب بالجنسية المصرية",
                "* إجادة اللغة الانجليزية",
                "* ألا يقل مجموع الطالب في الشهادة الاعدادية عن 250 درجة (ممكن تختلف السنة دي وممكن لا)",
                "* اجتياز الطالب لاختبارات القبول والمقابلة الشخصية"
              ]}
            />



            <ListItem
              title=". ايه هي المواد اللي بتدرسوها؟"
              content={[
                "في سنة أولى بندرس :",
                "* Telecommunications (Telecom)",
                "* Information technology (IT)",
                "* Math",
                "* Physics",
                "* English",
                "* لغة عربية",
                "* تربية دينية",
                "* تربية وطنية",
                "* Technical drawing",
                "* Electrical systems",
                "* ICT",
                "* PE",
                "* Life skills",
                "بالاضافة الى التدريب الميداني بالمواقع الخاصة بشركة المصرية للاتصالات"
              ]}
            />



            {
              isShowMore &&<><ListItem
              title="في سنة تانيه بندرس :)"
              content={[
                "* مادة تخصص واحدة بتختارها Telecom أو IT (Networks and cybersecurity او programming /web)",
                "* Math",
                "* Physics",
                "* English",
                "* لغة عربية",
                "* تربية دينية",
                "* دراسات اجتماعية",
                "* Auto Cad",
                "* ICT",
                "* PE",
                "* Life skills",
                "إلى جانب الدراسة هتلاقيهم بيطوروا من مهاراتنا المختلفة في التواصل والثقة بالنفس والاعتماد ع الذات ومهارات presentation skills وغيرها من ال soft skills وال life skills وازاي تبقى قائد قوي الشخصية وشخص مؤثر في مجتمعك ومفيد ليه وازاي تشتغل في فريق وغير النشاطات المختلفة اللي بتساعدك تبقى جدير ، وع ذكر كلمة جدير ف نقول مرة تانية عشان لو نسيت معناها ده نظام التعليم عندنا ، نظام الجدارات واللي بيعتبر من أنجح الأنظمة التعليمية وبيعتمد على أن الطالب يكون عنده المعرفة النظرية والمهارات العملية إلى جانب الأخلاقيات والسلوكيات ومهارات التواصل"
              ]}
            />

            <ListItem
              title="ايه الكليات اللي نقدر ندخلها بعد التخرج وهل يمكن دخول هندسة؟"
              content={[
                "*  الكليات المسموحة لخريجي مدارس WE هي :",
                "* كليه الهندسة بعد عمل المعادلة",
                "* الجامعات التكنولوجية",
                "* المعاهد الفنية"
              ]}
            />

            <ListItem
              title="هل يمكن للخريج الالتحاق بسوق العمل مباشرة؟"
              content={[
                "*أكيد ممكن ، وهيبقى جدير بالعمل بمجال تخصصه بعد تخرجه مباشرة"
              ]}
            />






            <ListItem
              title="ايه هي الشهادات اللي بيحصل عليها الطالب؟"
              content={[
                "- الطالب بيحصل على :",
                "* شهادة الدبلوم الفني لمدارس التكنولوجيا التطبيقية",
                "* شهادة أكاديمية معتمدة دوليا",
                "* شهادة خبرة من شركة المصرية للإتصالات",
                "* شهادات مهنية خلال فترة التدريب العملي"
              ]}
            />

            

            <ListItem
              title="ايه هي طبيعة اختبارات القبول والمقابلة الشخصية؟"
              content={[
                "- مبدأيا كدة أحب أطمنكم ، اختبارات القبول مش صعبة والأسئلة مش تعجيزية ولا حاجة ومش هيتطلب منك تحل 200 سؤال في تلت ساعة والكلام ده لا خالص الأسئلة بتبقى عن الماث والانجلش واللغة العربية واسئلة كلها في مستوى طالب تالتة اعدادي وده طبيعي وعادي جدا وخاصة انك طالب في تالتة اعدادي ف هتتسأل في ايه مثلا؟! كله تراكمي ودرسته قبل كدة ف لا تقلق و مش محتاج تاخد كورس مخصوص للاختبارات ولا المقابلة الشخصية ، هتاخد كورس اه ولكن لنفسك تتعلم حاجة جديدة لنفسك أنت سواء لغة جديدة أو تجرب تتعلم برمجة أو تاخد فكرة عن التخصصات والتكنولوجيا بشكل عام ، في WE هتتعلم انه مش هدفك من التعليم هو الامتحان ولا التقديرات وبس، الامتحان ده تقييم ليك ولتحصيلك الدراسي أما إنت فلازم تحط في دماغك إنك بتتعلم لنفسك أنت وبتطور نفسك للأحسن دايما 💙"
              ]}
            />


            <ListItem
              title="مين اللي بيشرح المناهج ؟"
              content={[
                "- بما ان المناهج عندنا مستواها عالي ومميز ف أكيد لازم اللي يشرحها يكونوا مهندسين ومعلمين ودكاترة محترفين وذوي خبرة في مجالات تخصصهم وعندهم دراية باللي بيحصل في سوق العمل وتجارب حياتية، هتلاقيهم بيشرحوا باحترافية ، هدفهم الأول والأخير إنك تفهم ، مش بيزهقوا من الأسئلة بل على العكس بيحبوا الأسئلة وبيجاوبوا على أسئلتك في مجال تخصصهم وعلى حسب خبرتهم العملية حتى لو الأسئلة دي خرجت برة المنهج المهم عندهم إنك تتعلم ومش هيبخلوا عليك بمعلومة، لو تعبت هتلاقيهم أول حد جنبك وفي ظهرك بيشجعوك إنك تكمل وبيدعموك طول الوقت وبيبذلوا مجهود عظيم وجبار والبسمة ما بتروحش من على وشوشهم دايما مهتمين بيك بيحبوك وخايفين على مصلحتك، مهما اتكلمنا مش هنوفيهم حقهم فعلا وصعب احساسنا تجاههم يتوصف بالكلام، ممكن تفتكره مجرد كلام لكن هتحس بيه كله لو مريت بيه وهتعرف إنه مش كلام وخلاص دي خلاصة تجربة حقيقية ... تجربة لا تعوض💜"
              ]}
            />

            <ListItem
              title="أنا من مدرسة عربي ،هل ده هيأثر عليا وخصوصا اني عرفت ان المواد باللغة الانجليزية؟"
              content={[
                "- عشان نبقى صادقين أنت ممكن تستغرب الموضوع او تستثقله شوية في مواد زي الرياضيات مثلا أو في مواد التخصص في الاول وبس ودي كلنا بنبقى أول مرة نشوف مصطلحاتها أصلا ولكن مع الوقت وبسرعة هتلاقيك اتعودت ومعندكش أي مشكلة زيك زي طالب المدارس اللغات وده طبعا بيبقى باجتهادك وشغلك على نفسك مع الدعم من المهندسين والمدرسين وهتلاقيهم بيبدأوا معاك واحدة واحدة لحد ما تتعود"
              ]}
            />

            <ListItem
              title="رابط التقديم على المدرسة"
              content={[
                "الآن وقتك للانضمام إلى مدارس وي للتكنولوجيا التطبيقية، يمكنك التقديم من خلال اللينك التالي:",
                <br />,
                <a href="https://dualedu.moe.gov.eg/home" className="text-blue-500">
                  اضغط هنا
                </a>
              ]}
            /></>
            }



<button onClick={()=>{setIsShowMore(!isShowMore)}}   className="bg-sec text-white drop-shadow p-2 rounded m-auto w-40 text-center flex items-center justify-center gap-2 cursor-pointer hover:scale-110 transition-all ">{isShowMore ? 'عرض اقل' : 'عرض المزيد '} <BiShowAlt /></button>







          </div>
          
          </section>


        


          <h1  className="text-3xl  text-sec font-semibold animated-title text-center relative w-max m-auto">
        <HiOutlineMail className="inline-block  mr-2 text-2xl md:text-4xl " />
        تواصل معنا
      </h1>
        <section id="school_contact" className=" lg:w-[50%] w-[80%] mt-16 flex flex-col md:flex-row bg-gray drop-shadow-2xl bg-white rounded-md m-auto justify-between p-2 md:p-10 gap-2" style={{ direction: 'rtl' }}>

          <div className="w-full flex flex-col md:w-[45%]">
            <h1 className="p-2 text-main text-4xl">اتصل بنا</h1>
            <p className="text-md md:text-2xl p-2">نحن هنا من أجلك، كيف يمكننا مساعدتك؟</p>
            <form onSubmit={handleSubmit} className="mt-5">
              <input type="text" required name="name" placeholder="أدخل اسمك" className="w-full bg-gray-200 placeholder-black outline-none  p-5 rounded-md mt-5" />
              <input type="email" required name="email" placeholder="أدخل بريدك الإلكتروني" className="w-full bg-gray-200 placeholder-black outline-none  p-5 rounded-md mt-4" />
              <input type="text" required name="message" placeholder="أدخل رسالتك" className="w-full bg-gray-200 placeholder-black outline-none  p-8 rounded-md mt-10" />
              <input type="submit" value="إرسال" className="w-full rounded-xl h-16 p-2 text-center bg-main text-white mt-10" />
            </form>
          </div>

          <div className="w-full flex flex-col md:w-[45%] ">
            <div className="w-full  md:w-[100%]   "><img src="assets/undraw_profile_data_re_v81r.svg" className="object-cover" alt="" /></div>
            <div className="w-full h-[40%] flex flex-col justify-between space-y-5 mt-10">
              <ContactInfo icon={<MdEditLocation />} text="دقهلية المنصورة" />
              <ContactInfo icon={<MdPhoneBluetoothSpeaker />} text="01001236789" />
              <ContactInfo icon={<MdEmail />} text="weschoolmansoura@gmail.com" />
            </div>
          </div>

        </section>


        <button className="btn btn-info" style="position: fixed;bottom: 30px; right: 30px; border-radius: 50px;" id="btnn">up</button>



      </main>

      <footer className="relative  md:mt-[300px] mt-[100px]">
        <Footer />


        <img src="/assets/waves2.svg" className="md:w-full  z-[-2]  hidden md:flex  absolute bottom-0 " alt="" />
      </footer>

    </>
  );
}

export default Home;


const ContactInfo = ({ icon, text }) => {
  return (
    <div className="w-full h-[40%] flex flex-row justify-start items-center mt-10">
      <div className="text-main rounded-[50px] w-[50px] h-[50px] flex justify-center items-center text-sm md:text-2xl">
        {icon}
      </div>
      <p className="ml-0 text-md md:text-xl md:ml-10">{text}</p>
    </div>
  );
};