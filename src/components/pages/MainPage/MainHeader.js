import {Link, NavLink} from 'react-router-dom';
import { GoogleLogin } from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import BurgerMenu from './BurgerMenu';
import * as Yup from 'yup';

import './header.scss';

import header from './resources/header.jpg'
import curves from './resources/curves.svg'
import points from './resources/points.svg'
import modalImg from './resources/modal.png'

const MainHeader = () => {
    const [ profile, setProfile ] = useState({
        name: '',
        email: '',
        password: ''
    });

    // google sign in 

    const clientId = '1055428739884-s4m4f5k0p0s57tjpg0cteds2amhtdk5p.apps.googleusercontent.com';
 
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    }, []);

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    //validation

    const validate = (values) => {
        let errors = {};
        if (!values.name.match(/^[a-zа-я\s-]+$/ig) || values.name.match(/^\s/)) {
          errors.name = 'Name must be in Latin or Cyrillic';
        } else {
            errors.name = null;
        }
        return errors;
      }

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
          rules: false,
        },
        validationSchema: Yup.object({
          name: Yup.string()
            .min(2, 'Must be 2 characters or more')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),          
          password: Yup.string().min(6, 'Must be 6 characters or more')
            .required('Required'),
          rules: Yup.boolean().oneOf([true],'Please, read the Terms'),
        }),
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        validate,
      });

    const onError = (fieldId) => {
        const field = document.querySelector(fieldId);
        field.style.borderColor = 'red';
    }

    const offError = (fieldId) => {
        const field = document.querySelector(fieldId);
        // field.style.borderColor = "#868686";
    }

    // to change password view

    const passwordField = document.querySelector('#password input');
    const passwordControl = document.querySelector(".password-control")
    
    
    function changePasswordVisibility() {
        if (passwordField.value !== ""){
            passwordControl.classList.toggle('view')
        }

        if (passwordControl.classList.contains('view')){
            passwordField.setAttribute('type', 'text')
        } else {
            passwordField.setAttribute('type', 'password')
        }
    }

    // to close modal

    const modal = document.querySelector('.header__fixed-overlay')

    function closeModal(e) {
        if (e.target === modal){
            modal.classList.remove('active');
        }
    }

    return (
    <header className="header">
        <div className="header__fixed-overlay" onClick={closeModal}>
            <div className="modal">
                <div className="modal_container">
                    <div className="modal__text">
                        <div className="modal__title title">Get Started</div>
                        <div className="modal__choice">
                            <div className="modal__subtitle">Already have an account? <a href="/">Log in</a></div>
                            <div className="modal__or">or</div>
                            <div className="modal__btn">
                                <GoogleLogin
                                            clientId={clientId}
                                            buttonText="Sign in with Google"
                                            onSuccess={onSuccess}
                                            onFailure={onFailure}
                                            cookiePolicy={'single_host_origin'}
                                            isSignedIn={true}
                                        />
                            </div>    
                        </div>
                        <form method="post" action="form.php" className="modal__form" onSubmit={formik.handleSubmit}>
                            <fieldset>
                                <legend>Full name</legend>
                                <input 
                                    id='name' 
                                    name="name" 
                                    type="text" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    className="modal__input"
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <>
                                            {onError('#name')}
                                            <div className="modal__errorMessage">{formik.errors.name}</div>
                                        </>) : null}
                            </fieldset>
                            <fieldset>
                                <legend>Email Adress</legend>
                                <input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}/>
                                    {formik.touched.email && formik.errors.email ? (
                                        <>
                                            {onError('#email')}
                                            <div className="modal__errorMessage">{formik.errors.email}</div>
                                        </>
                                        ) : null}
                            </fieldset>
                            <fieldset id="passwordField">
                                <legend>Password</legend>
                                <input 
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}/>
                                <button type="button" class="password-control" onClick={changePasswordVisibility}/>

                                {formik.touched.password && formik.errors.password ? (
                                        <>
                                            {onError('#password')}
                                            <div className="modal__errorMessage">{formik.errors.password}</div>
                                        </>
                                    ) : null}    
                            </fieldset>
                            <fieldset className="modal__checkbox">
                                <input 
                                    id="rules"
                                    name="rules"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.rules} />
                                <div className="modal__rules">I agree to all the <a href="/">Terms</a>, and <a href="/">Privacy Policy</a> and <a href="/">Fees</a></div>
                                {formik.touched.rules && formik.errors.rules ? (
                                        <>
                                            {onError('#rules')}
                                            <div className="modal__errorMessage">{formik.errors.rules}</div>
                                        </>
                                    ) : null}  
                            </fieldset>
                            <button id="submit" type="submit">Create Account</button>
                        </form>

                        </div>
                        <div className="modal__img">
                            <div className="modal__logo">Fresh</div>
                            <img src={modalImg} alt="woman"/>
                        </div>
                </div>
            </div>
        </div>
        <BurgerMenu/>
        <div className="header__menubar">
            <div className="header__menubar-logo">Fresh</div>
            <div className="header__menubar-links">
                <ul className="header__menubar-list menubar-list">
                    <li className="header__menubar-item menubar-item"><NavLink to="/">Men</NavLink></li>
                    <li className="header__menubar-item menubar-item"><NavLink to="/product">Woman</NavLink></li>
                    <li className="header__menubar-item menubar-item"><NavLink to="/">Kids</NavLink></li>
                    <li className="header__menubar-item menubar-item"><NavLink to="/product">Collection</NavLink></li>
                    <li className="header__menubar-item menubar-item"><NavLink to="/product">Trends</NavLink></li>
                </ul>
            </div>
            <div className="header__menubar-welcome">
                <button className="header__menubar-btn" onClick={() => modal.classList.add('active')}>Login</button>
                <button className="header__menubar-btn" onClick={() => modal.classList.add('active')}>Sign Up</button>
            </div>
        </div>
            
        <div className="header__promo">
            <div className="header__promo-wrapper">
                <div className="header__promo-content">
                    <h1 className="header__promo-title">Find The Best Fashion Style For You</h1>
                    <div className="header__promo-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. 
                        At arcu ornare rhoncus, elementum non viverra. </div>
                    <Link to="/product"><button className="btn">shop now</button></Link>
                </div>
                <div className="header__promo-photo"><img src={header} alt="coat"/></div>
            </div>
        </div>

    <div className="header__curves"><img src={curves} alt="curves"/></div>
    <div className="header__rectangle"></div>
    <div className="header__points"><img src={points} alt=""/></div>
    </header>
    )
}

export default MainHeader;