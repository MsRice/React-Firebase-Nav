import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router , Routes, Route ,Link} from 'react-router-dom';
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , onAuthStateChanged} from 'firebase/auth'
import Home from '../pages/Home';



const User = ({registration ,login ,logout , reg_form , user }) => {
    
    return (
        <>
            { !reg_form && !user.email ? 
        
                <ul className='nav__list'>
                    <li className='nav__link'><button onClick={login}>Login</button></li>
                    <li className='nav__link'><button onClick={registration}>Register</button></li>
                </ul>
                    :
                   null
            } {
                        user.email ?
                        <div className='nav__user'>
                            <button onClick={logout}>
                                {user.email.slice(0,1).toUpperCase()}
                            </button>
                        </div>
                        :
                        null
                    }
        </>
    );
}

export default User;
