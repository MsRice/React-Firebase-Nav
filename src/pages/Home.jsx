import React, { useEffect, useState } from 'react';
import mii from '../components/assets/Google_wall.jpg'
import { auth } from '../firebase/init.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';


const Home = ({reg_form , setReg_form ,user , setUser}) => {

    const [email , setEmail] = useState()
    const [pass , setPass] = useState()
    const [credentials , setCredentials] = useState([])
    const [loading , setLoading] = React.useState(true)

    React.useEffect(() => {
        onAuthStateChanged(auth ,(user) => {
          setLoading(false)
          console.log(user)
          if(user){
            setUser(user)
          }
        })
      }, [])

    const submit_regeistration = (element) =>{
        element.preventDefault()
        if(reg_form[1] === 'registration'){
            register({email , pass})
        } else if(reg_form[1] === 'login'){
            login({email , pass})
        }
    }

    function register(element){
        console.log(element.email)
        createUserWithEmailAndPassword(auth , email, pass)
            .then((user) => {
                console.log(user.user)
                alert("Registration Successful")
                setReg_form(false)
                setUser(user.user)
                
            })
            .catch((error) => {
                console.log(error);
                
            })
        }
        
        function login(){
            signInWithEmailAndPassword(auth , email , pass)
            .then((user)=>{
                console.log(user)
                console.log(user.user.email)
                setReg_form(false)
            setUser(user.user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.log(errorCode, errorMessage)
        })

    
    } 

    useEffect(() => {
        
        
        
    }, [user])


    return (
        <div>
            
                
                {reg_form ? 
                <div>          
                    <figure>
                        <img src={mii} className='landing__img blur' />
                    </figure>
                    <form className='registration__form'>
                        <label htmlFor="">Email: 
                            <input 
                            type="email" 
                            name="email" 
                            onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <label htmlFor="">Password: 
                            <input 
                            type="password"
                            name="password" 
                            onChange={(e) => setPass(e.target.value)}
                            /> 
                        </label>
                        <button onClick={submit_regeistration} type='submit'>Submit</button>
                    </form>
                </div>
                :
                <figure>
                    <img src={mii} className='landing__img' />
                </figure>
                }
        </div>
    );

}
export default Home;
