import React, { createContext, useRef } from "react";
<<<<<<< HEAD
=======

>>>>>>> 5e0aa182bc9fa61417d3f5fd53c353da6ec5989c
import i18n from "i18next";
import { initReactI18next, Trans } from "react-i18next";
import translationAR  from './arabicdata.js'
import translationEn from './englishdata.js'
<<<<<<< HEAD
import {auth} from '../firebase'
=======



>>>>>>> 5e0aa182bc9fa61417d3f5fd53c353da6ec5989c

const AuthContext = createContext();

export default AuthContext;

<<<<<<< HEAD
export const AuthProvider = ({ children }) => {
  const [todo, setTodo] = React.useState([]);
  const [id, setId] = React.useState(0);
  const Fals = false
=======


export const AuthProvider = ({ children }) => {
  const [todo, setTodo] = React.useState([]);
  const [id, setId] = React.useState(0);
const Fals = false
>>>>>>> 5e0aa182bc9fa61417d3f5fd53c353da6ec5989c

  // useRef is like a “box” that can hold a mutable value in its .current property, i used useref in order to convert dir style arabic to eng

  const styleDir = useRef(null);
  const styleDir2 = useRef(null);




  // handelinput
  const handelinpt = e => setId(e.target.value)
  //  method api call tracking
  const handelApi = (event) => {
  

<<<<<<< HEAD
    
      if (event.key === 'Enter') {
        fetch(`https://tracking.bosta.co/shipments/track/${id}`)
        .then(results => results.json())
       .then(data => {
         setTodo(data); });}}
=======
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
>>>>>>> 5e0aa182bc9fa61417d3f5fd53c353da6ec5989c

  // i18n convert english to arabic

  const translationsEn = {
<<<<<<< HEAD
    bosta: "trust!",
    home: 'home',
    Pricing: 'Our Service ',
    ContactSales: 'Contact US',
    trakin: 'SERCH',
    sign: 'sign in',
    number: '',
    Shipments: 'Service',
    Pricing: 'Our Service',
=======
    bosta: "bosta!",
    home: 'home',
    Pricing: 'Pricing',
    ContactSales: 'Contact Sales',
    trakin: 'TRACKING SHIPMEN',
    sign: 'sign in',
    number: 'Enter your tracking No.',
    Shipments: 'Shipments',
    Pricing: 'Pricing',
>>>>>>> 5e0aa182bc9fa61417d3f5fd53c353da6ec5989c
    trackyourshipment: 'track your shipment ',
    hub: 'hub',
    datee: 'date',
    time: 'time',
    details: 'details',
    TrackingDetails: 'Tracking Details ',
    arabic:translationEn


  };

  const translationsAR = {
<<<<<<< HEAD
    bosta: "ثقة!",
    home: 'الرئسية',
    Pricing: 'الاسعار',
    ContactSales: 'تواصل معنا  ',
    trakin: 'بحث ',
    sign: 'تسجيل الدخول',
    number: '',
    Shipments: 'ثقة',
    Pricing: '',
    trackyourshipment: 'خدمتنا ',
=======
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
>>>>>>> 5e0aa182bc9fa61417d3f5fd53c353da6ec5989c
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

<<<<<<< HEAD
    }
=======

     







    }



>>>>>>> 5e0aa182bc9fa61417d3f5fd53c353da6ec5989c
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

<<<<<<< HEAD
    }



  }
  const [currentUser, setCurrentUser] = React.useState()
  const [loading, setLoading] = React.useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  // object stote all value
  let contextData = {
    handelApi,
    handelinpt,
    todo,
    handelarabic,
    handeleng,
    styleDir,
    styleDir,
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
=======

     




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
>>>>>>> 5e0aa182bc9fa61417d3f5fd53c353da6ec5989c

  };



  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};