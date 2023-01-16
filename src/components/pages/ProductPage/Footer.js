import {NavLink} from 'react-router-dom';

import footer from './resources/footer.png'

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__img">
                <img src={footer} alt="people"/>
            </div>
            <div className="footer__inst">Follow Our INSTAGRAM : @FRESH</div>
            <div className='footer__content'>
                <div className="footer__menu">
                    <ul className="footer__menubar-list menubar-list">
                        <li className="menubar-item footer__menubar-item"><NavLink to="/">Men</NavLink></li>
                        <li className="footer__menubar-item menubar-item"><NavLink to=".">Woman</NavLink></li>
                        <li className="footer__menubar-item menubar-item"><NavLink to="/">Kids</NavLink></li>
                        <li className="footer__menubar-item menubar-item"><NavLink to=".">Collection</NavLink></li>
                        <li className="footer__menubar-item menubar-item"><NavLink to=".">Trends</NavLink></li>
                    </ul>
                </div>
                <div className="footer__text">Copyright FRESH. All Right Reserved</div>
            </div>
        </footer>
    )
}

export default Footer