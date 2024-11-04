import React from 'react';
import logo from './assets/rice.jpg'
import User from './User';


const Nav = ({registration , login , logout ,reg_form ,user}) => {
    return (
        <>

            <nav>
                <div className="nav__container">
                    <div className="nav__logo">

                        <figure className='logo__img--wrapper'>
                            <img src={logo} className='logo__img'/>
                        </figure>
                        <h2 className='logo__title'>Grain of <span className='rice-text'> Rice</span></h2>

                    </div>
                    
                    <User registration={registration} login={login} logout={logout} reg_form={reg_form} user= {user}/>
                    
                </div>
            </nav>
        
        </>

    );
}

export default Nav;
