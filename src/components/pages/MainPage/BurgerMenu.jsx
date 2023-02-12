import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import './burgerMenu.scss';

const BurgerMenu = () => {
    // const showSettings = (event) => {
    //     event.preventDefault();
    // }

    return (
        <Menu right>
            <li className="header__menubar-item menubar-item menubar-item_side"><NavLink to="/">Men</NavLink></li>
            <li className="header__menubar-item menubar-item menubar-item_side"><NavLink to="/product">Woman</NavLink></li>
            <li className="header__menubar-item menubar-item menubar-item_side"><NavLink to="/">Kids</NavLink></li>
            <li className="header__menubar-item menubar-item menubar-item_side"><NavLink to="/product">Collection</NavLink></li>
            <li className="header__menubar-item menubar-item menubar-item_side"><NavLink to="/product">Trends</NavLink></li>
        </Menu>
    )
}

export default BurgerMenu;