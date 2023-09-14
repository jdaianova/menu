import { NavLink } from "react-router-dom";
import './Menu.css';

export default function Menu() {

    function composeClassName(state) {
        return "Menu__item-link" + (state.isActive ? " Menu__item-link-active" : "");
    }

    return (
        <nav>
            <ul className="Menu">
                <li className="Menu__item">
                    <NavLink
                        className={composeClassName}
                        to="/"
                    >
                        главная
                    </NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink
                        className={composeClassName}
                        to="/drift"
                    >
                        дрифт-такси
                    </NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink
                        className={composeClassName}
                        to="/timeattack"
                    >
                        time attack
                    </NavLink>
                </li>
                <li className="Menu__item">
                    <NavLink
                        className={composeClassName}
                        to="/forza"
                    >
                        forza karting
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}