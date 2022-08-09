import CarImage from 'assets/img/car-card.png';
import './styles.css';

const Catalogo = () => {
    return (
        <>
            <div className='card-principal'>
                <div className='main'>
                    <div className='home-image'>
                        <img src={CarImage} alt="Imagem de um carro." />
                    </div>
                    <div className='texto'>
                        <h3>Audi Supla TT</h3>
                        <p> O melhor automovel que você pode dirigir.</p>
                    </div>
                    <div>
                        <button className='btn-compra'>COMPRAR</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalogo;