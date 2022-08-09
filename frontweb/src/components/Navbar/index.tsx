import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav className=" principal navbar navbar-expand-md navbar-dark bg-warning">
            <div className='container-fluid'>
                <Link to="/" className='nav-logo'>
                    <h4 className='nav-titulo'>Carros Top</h4>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dscatalog-navbar"
                    aria-controls="dscatalog-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='menu collapse navbar-collapse' id='dscatalog-navbar'>
                    <ul className='navbar-nav offset-md-2 main-menu'>
                        <li>
                            <NavLink to="/" activeClassName='active'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to="/mostruario" activeClassName='active' id='btn-catalogo'>CATÁLOGO</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;