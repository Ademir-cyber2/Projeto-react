import './styles.css';

function Pesquisa() {
    return (
        <div className="container">
            <textarea className="areadetexto">Digite sua busca.</textarea>
            <button className='btn-buscar'>BUSCAR</button>
        </div>
    );
}

export default Pesquisa;