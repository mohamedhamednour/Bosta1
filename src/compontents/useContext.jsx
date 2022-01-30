import React, { createContext, useRef } from "react";

import i18n from "i18next";
import { initReactI18next, Trans } from "react-i18next";
import translationAR  from './arabicdata.js'
import translationEn from './englishdata.js'




const AuthContext = createContext();

export default AuthContext;



export const AuthProvider = ({ children }) => {
  const [todo, setTodo] = React.useState([]);
  const [id, setId] = React.useState(0);
const Fals = false

  // useRef is like a “box” that can hold a mutable value in its .current property, i used useref in order to convert dir style arabic to eng

  const styleDir = useRef(null);
  const styleDir2 = useRef(null);




  // handelinput
  const handelinpt = e => setId(e.target.value)
  //  method api call tracking
  const handelApi = (event) => {
  

    try {
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
    catch  {
      window.location.reload();

    }


  }

  // i18n convert english to arabic

  const translationsEn = {
    bosta: "bosta!",
    home: 'home',
    Pricing: 'Pricing',
    ContactSales: 'Contact Sales',
    trakin: 'TRACKING SHIPMEN',
    sign: 'sign in',
    number: 'Enter your tracking No.',
    Shipments: 'Shipments',
    Pricing: 'Pricing',
    trackyourshipment: 'track your shipment ',
    hub: 'hub',
    datee: 'date',
    time: 'time',
    details: 'details',
    TrackingDetails: 'Tracking Details ',
    arabic:translationEn


  };

  const translationsAR = {
    bosta: "بوسطة!",
    home: 'الرئسية',
    Pricing: 'الاسعار',
    ContactSales: 'كلم المبيعات',
    trakin: 'تتبع شحنتك',
    sign: 'تسجيل الدخول',
    number: 'اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة',
    Shipments: 'الشحنات',
    Pricing: 'الاسعار',
    trackyourshipment: 'تتبع شحنتك',
    hub: 'الفرع',
    datee: 'التاريخ',
    time: 'الوقت',
    details: 'تفاصيل',
    TrackingDetails: 'تتبع التفاصيل',
    arabic:translationAR




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


  // functions handel convert language

  // functions english
  const handeleng = () => {
    if (i18n.changeLanguage('en')) {
      document.getElementById('navarabic').style.display = "block";
      document.getElementById('navEng').style.display = "none";
      document.getElementById('navbarr').style.direction = 'ltr'

      // useRef
      styleDir.current.style.direction = 'ltr';


     







    }



  }
  // functions arabic

  const handelarabic = () => {
    if (i18n.changeLanguage('ar')) {
      // hidde and toggle buttons arabic and english
      document.getElementById('navarabic').style.display = "none";

      document.getElementById('navEng').style.display = "block";
      document.getElementById('navbarr').style.direction = 'rtl'

      // useRef
      styleDir.current.style.direction = 'rtl';


     




    }



  }

  // object stote all value
  let contextData = {
    handelApi: handelApi,
    handelinpt: handelinpt,
    todo: todo,
    handelarabic: handelarabic,
    handeleng: handeleng,
    styleDir: styleDir,
    styleDir2: styleDir2

  };



  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};