import  React,{ createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [todo, setTodo] = React.useState([]);
    const [id, setId] = React.useState(0);


    const handelinpt =  e => setId(e.target.value)
    //  method api call if call by input ente else call by button 
    const handelApi = (event) => {
        if (event.key === 'Enter') {
            fetch(`https://tracking.bosta.co/shipments/track/${id}`)
                .then(results => results.json())
                .then(data => {
                    setTodo(data);
                    console.log(data)

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




  let contextData = {
    handelApi:handelApi,
    handelinpt:handelinpt,
    todo:todo
    
  };



  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
};