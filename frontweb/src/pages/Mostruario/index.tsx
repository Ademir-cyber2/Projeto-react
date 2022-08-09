import Catalogo from "components/Catalogo";
import Pesquisa from "components/Pesquisa";

function Mostruario() {
    return (
        <>
            <Pesquisa />
            <div className="container my-4">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 ">
                        <Catalogo />
                    </div>
                    <div className="col-sm-6 col-lg-4 ">
                        <Catalogo />
                    </div>
                    <div className="col-sm-6 col-lg-4 ">
                        <Catalogo />
                    </div>
                    <div className="col-sm-6 col-lg-4 ">
                        <Catalogo />
                    </div>
                    <div className="col-sm-6 col-lg-4 ">
                        <Catalogo />
                    </div>
                    <div className="col-sm-6 col-lg-4">
                        <Catalogo />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mostruario;