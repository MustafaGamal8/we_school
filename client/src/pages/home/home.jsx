import { useState } from "react";
import { CiUser } from "react-icons/ci"
import { MdPhone, MdHome, MdListAlt, MdSchool, MdMenu, MdPeopleAlt, MdEditLocation, MdClass, MdPhoneBluetoothSpeaker, MdMessage, MdEmail } from "react-icons/md"
import { Link } from "react-router-dom";
import "./home.css"
import ListItem from "../../components/listItem";


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
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

  return (

    <>
      <nav className="relative flex items-center justify-between px-2 drop-shadow bg-white h-20 text-main z-[10]  ">

        {/* sm screen */}
        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex md:hidden text-3xl hover:bg-main hover:text-white rounded-full cursor-pointer p-1 transition-all "><MdMenu /></div>


        <div className={` ${isMenuOpen ? "menuAnimitionOpen flex md:hidden" : "hidden"} absolute top-[100%] left-0 bg-white text-main  w-full h-0  flex-col-reverse items-center justify-center   whitespace-nowrap`}>
          <Link onClick={handleMenuClick} to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2]  hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>تواصل</h1> <MdPhone className="text-xl" /></Link>
          <Link onClick={handleMenuClick} to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>شروط التقديم</h1> <MdListAlt /></Link>
          <Link onClick={handleMenuClick} to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>عن المدرسة</h1> <MdSchool className="text-xl" /></Link>
          <Link onClick={handleMenuClick} to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] z-[2] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>الصفحة الرئيسية</h1> <MdHome className="text-xl" /></Link>

        </div>

        {/* end of sm screen */}

        <img src="/logo.jpg" alt="" className="h-full " />

        <div className="hidden  md:flex items-center justify-center gap-3  whitespace-nowrap">
          <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>تواصل</h1> <MdPhone className="text-xl" /></Link>
          <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>شروط التقديم</h1> <MdListAlt /></Link>
          <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>عن المدرسة</h1> <MdSchool className="text-xl" /></Link>
          <Link to="" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg"><h1>الصفحة الرئيسية</h1> <MdHome className="text-xl" /></Link>

        </div>

        <Link to="/login" className="flex items-center justify-center gap-1 cursor-pointer relative m-2  p-2 hover:text-white after:-z-[1] hover:after:w-full after:h-full after:absolute after:top-0 after:bg-main after:transition-all after:duration-200 after:w-0  after:rounded-lg font-semibold">تسجيل الدخول<CiUser className="md:text-2xl text-lg " /> </Link>





      </nav>

      <main className="relative  w-full flex flex-col gap-8">
        <img className=" absolute top-0 right-0 -z-10 w-full drop-shadow-xl" src="/assets/wave.svg" alt="" />


        <section>
          <div className="text-center  mt-20 bg-white rounded-lg w-80  m-auto py-2 drop-shadow">
            <h1 className="text-xl md:text-3xl drop-shadow">مدرسة وي <br /> للتكنولوجيا التطبيقية</h1>
            <h2 className="mt-2 md:text-2xl  text-[#6e237e] relative w-max m-auto text-animition ">في المنصورة</h2>
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
              <h2 className="text-2xl font-semibold mb-4">مدرسة وي للتكنولوجيا التطبيقية</h2>
              <p className="text-lg text-center">
                تعلم  البرمجة واستكشف عالمًا مشوقًا في تقنية الاتصالات والشبكات في مدرسة وي.
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 mt-4 rounded">
                استكشف البرامج
              </button>
            </div>
          </div>

          <div className="md:w-[520px]  flex flex-col items-end justify-end  gap-3 mt-5">
            <p className="font-semibold text-lg">ما هي ؟</p>
            <h1 className="text-main text-3xl semi semi">مدرسة وي للتكنولوجيا التطبيقية</h1>
            <p className="md:text-lg">مرحبًا بك في "مدرسة وي للتكنولوجيا التطبيقية"! مدرستنا هي مؤسسة رائدة متخصصة في تقديم تعليم متميز في مجالات البرمجة والاتصالات والشبكات. في "وي للتكنولوجيا التطبيقية"، نسعى لتمكين طلابنا بالمعرفة والمهارات اللازمة للتفوق في عالم التكنولوجيا سريع التطور.</p>
          </div>

        </section>

        <img className="m-auto h-12 mt-10" src="/assets/mouseAnimition.gif" />

        <section className="w-full">
          <div className="flex items-center  justify-center  gap-2 text-3xl text-sec my-4"  ><h1 >شركائنا</h1> <MdPeopleAlt /></div>

          <div className="w-full  bg-white  border-y flex flex-col md:flex-row items-center justify-evenly gap-5 p-5">
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture1.png" alt="" /></div>
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture2.png" alt="" /></div>
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture3.png" alt="" /></div>
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture4.png" alt="" /></div>
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture5.png" alt="" /></div>
            <div className="bg-white  drop-shadow p-2 rounded-lg w-40 h-32 flex items-center justify-center hover:scale-125 transition-all"><img className="w-full " src="/assets/Picture6.png" alt="" /></div>
          </div>
        </section>




        <section className="w-full mt-5 ">
          <div className="flex items-center justify-center gap-2 text-3xl text-sec my-4">
            <h1>الأقسام</h1>
            <MdClass />
          </div>

          <div className="w-full bg-white mt-3 flex flex-col md:flex-row items-center justify-around gap-5 p-5">
            <div className="bg-white drop-shadow flex-col rounded-lg w-[350px] h-[450px] flex hover:scale-[1.07] transition-all">
              <img src="/assets/network.jfif" alt="" className="w-full h-[50%] object-cover rounded-lg" />
              <h1 className="text-center p-3 text-3xl font-bold text-main">الشبكات</h1>
              <p className="text-center p-3">
                في هذا القسم، ندرس مجال الشبكات وأمن المعلومات السيبراني. نقوم بدراسة تصميم وإدارة الشبكات وحمايتها من التهديدات السيبرانية.
              </p>
            </div>

            <div className="bg-white drop-shadow flex-col rounded-lg w-[350px] h-[450px] flex hover:scale-[1.07] transition-all">
              <img src="/assets/programming.jfif" alt="" className="w-full h-[50%] object-cover rounded-lg" />
              <h1 className="text-center p-3 text-3xl font-bold text-main">البرمجة</h1>
              <p className="text-center p-3">
                في هذا القسم، ندرس مجال البرمجة وتطوير البرمجيات. نقوم بدراسة تطوير تطبيقات الويب والتقنيات المستخدمة في برمجة البرامج.
              </p>
            </div>

            <div className="bg-white drop-shadow flex-col rounded-lg w-[350px] h-[450px] flex hover:scale-[1.07] transition-all">
              <img src="/assets/telycommunications.jfif" alt="" className="w-full h-[50%] object-cover rounded-lg" />
              <h1 className="text-center p-3 text-3xl font-bold">الاتصالات</h1>
              <p className="text-center p-3">
                في هذا القسم، ندرس علوم الاتصالات. نقوم بدراسة أساسيات الاتصالات وتقنيات الاتصال المختلفة وتطبيقاتها في عالم الاتصالات الحديث.
              </p>
            </div>
          </div>
        </section>


        <section className="w-full mt-10 " >
          <div className="text-2xl justify-center gap-2 flex  md:flex items-center md:justify-center md:gap-2 md:text-4xl  text-sec mb-5 my-4">
            <h1>معلومات حول المدرسه</h1>
          </div>

          <div className="p-2 mt-16" dir="rtl">
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




            <ListItem
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
            />





          </div>
        </section>

        <h1 className="text-5xl text-main text-center ">تواصل معنا</h1>
        <section className="w-full  lg:w-[50%] mt-16 flex flex-col md:flex-row bg-gray drop-shadow-2xl bg-white rounded-md m-auto justify-between p-10 gap-2" style={{ direction: 'rtl' }}>

          <div className="w-full flex flex-col md:w-[45%]">
            <h1 className="p-2 text-main text-4xl">اتصل بنا</h1>
            <p className="text-md md:text-2xl p-2">نحن هنا من أجلك، كيف يمكننا مساعدتك؟</p>
            <form onSubmit={handleSubmit} className="mt-5">
              <input type="text" required name="name" placeholder="أدخل اسمك" className="w-full bg-gray-200 placeholder-black outline-none h-16 p-5 rounded-md mt-10" />
              <input type="email" required name="email" placeholder="أدخل بريدك الإلكتروني" className="w-full bg-gray-200 placeholder-black outline-none h-16 p-5 rounded-md mt-10" />
              <input type="text" required name="message" placeholder="أدخل رسالتك" className="w-full bg-gray-200 placeholder-black outline-none h-40 p-5 rounded-md mt-10" />
              <input type="submit" value="إرسال" className="w-full rounded-xl h-16 p-2 text-center bg-main text-white mt-10" />
            </form>
          </div>

          <div className="w-full flex flex-col md:w-[45%] ">
            <div className="w-full  md:w-[100%]   "><img src="assets/undraw_profile_data_re_v81r.svg" className="object-cover" alt="" /></div>
            <div className="w-full h-[40%] flex flex-col justify-between">
              <div className="w-full h-[40%] flex flex-row justify-start items- mt-10">
                <div className="text-main rounded-[50px] w-[50px] h-[50px] flex justify-center items-center text-sm md:text-2xl"><MdEditLocation /></div>
                <p className="ml-0 text-md md:text-xl md:ml-10">دقهلية المنصورة</p>
              </div>
              <div className="w-full h-[40%] flex flex-row justify-start items-center mt-10">
                <div className="text-main rounded-[50px] w-[50px] h-[50px] flex justify-center items-center text-sm md:text-2xl"><MdPhoneBluetoothSpeaker /></div>
                <p className="ml-0 text-md md:text-xl md:ml-10">01001236789</p>
              </div>
              <div className="w-full h-[40%] flex flex-row justify-start items-center mt-10">
                <div className="text-main rounded-[50px] w-[50px] h-[50px] flex justify-center items-center text-sm md:text-2xl"><MdEmail /></div>
                <p className="ml-0 text-md md:text-xl md:ml-10">weschoolmansoura@gmail.com</p>
              </div>
            </div>
          </div>

        </section>






      </main>

      <footer></footer>

    </>
  );
}

export default Home;