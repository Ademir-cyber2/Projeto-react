import './styles.css';
import 'bootstrap/js/src/collapse.js';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-warning">
            <div className='container-fluid'>
                <a href="link" className='nav-logo'>
                    <h4 className='nav-titulo'>Carros Top</h4>
                </a>

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

                <div className='collapse navbar-collapse' id='dscatalog-navbar'>
                    <ul className='navbar-nav offset-md-2 main-menu'>
                        <li>
                            <a href="link" className='nav-link'>HOME</a>
                        </li>
                        <li>
                            <a href="link" className='nav-link'>CATÁLOGO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;