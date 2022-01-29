import React, { createContext } from "react";
// import { useNavigate } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";



const AuthContext = createContext();

export default AuthContext;



export const AuthProvider = ({ children }) => {
  const [todo, setTodo] = React.useState([]);
  const [id, setId] = React.useState(0);


  // handelinput
  const handelinpt = e => setId(e.target.value)
  //  method api call tracking
  const handelApi = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://tracking.bosta.co/shipments/track/${id}`)
        .then(results => results.json())
        .then(data => {
          setTodo(data);

          // raw.wrtieFile('arabicdata.json', data)

                 

        });
    } else {
      fetch(`https://tracking.bosta.co/shipments/track/${id}`)
        .then(results => results.json())
        .then(data => {
          setTodo(data);
          console.log(data)

        });

    }

  }

  // i18n convert english to arabic

  const translationsEn = {
    bosta: "bosta!",
    home: 'home',
    Pricing: 'Pricing',
    ContactSales: 'Contact Sales',
    trakin:'TRACKING SHIPMEN',
    sign:'sign in',
    number:'Enter your tracking No.',
    Shipments:'Shipments',
    Pricing:'Pricing',
    trackyourshipment:'track your shipment '

  };

  const translationsAR = {
    bosta: "بوسطة!",
    home: 'الرئسية',
    Pricing: 'الاسعار',
    ContactSales: 'كلم المبيعات',
    trakin:'تتبع شحنتك',
    sign:'تسجيل الدخول',
    number:'اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة',
    Shipments:'الشحنات',
    Pricing:'التسعير',
    trackyourshipment:'تتبع شحنتك'



  };

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en: { translation: translationsEn },
        ar: { translation: translationsAR },
      },
      lng: "en",
      fallbackLng: "en",
      interpolation: { escapeValue: false },
    });


// functions hadel convert language

// functions english
    const handeleng = () => {
      if (i18n.changeLanguage('en')) {
        document.getElementById('navarabic').style.display = "block";
        document.getElementById('navEng').style.display = "none";
        document.getElementById('nanconver').style.direction = 'ltr'
        document.getElementById('nonconv2').style.direction = 'ltr'



  
  
  
      }
  
  
  
    }
    // functions arabic

    const handelarabic = () => {
      if (i18n.changeLanguage('ar')) {
        
        document.getElementById('navarabic').style.display = "none";
  
        document.getElementById('navEng').style.display = "block";
        document.getElementById('nanconver').style.direction = 'rtl'
        document.getElementById('nonconv2').style.direction = 'rtl'

  
  
      }
  
  
  
    }

// object stote all value
  let contextData = {
    handelApi: handelApi,
    handelinpt: handelinpt,
    todo: todo,
    handelarabic:handelarabic,
    handeleng:handeleng

  };



  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};