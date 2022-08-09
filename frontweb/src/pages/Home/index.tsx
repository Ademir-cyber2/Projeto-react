import { ReactComponent as MainImage } from 'assets/img/car-header.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <>
            <div className='home-container'>
                <div className='home-card-principal'>
                    <div>
                        <h1>O carro perfeito para você.</h1>
                        <p>Conheça nossos carros e de mais um passo na realização do seu sonho!</p>
                    </div>
                    <div className='home-image'>
                        <MainImage />
                    </div>
                </div>
                <div className='home-card-secundario'>
                    <Link to="/mostruario">
                        <button className='btn'>VER CATALOGO</button>
                    </Link>
                    <p>Comece agora a navegar.</p>
                </div>

            </div>
        </>

    );
}

export default Home;