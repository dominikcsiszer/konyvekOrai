import './Konyv.css';

function Konyv(props) {
    function kosarFeldolgoz() {
        props.kosarFeldolgoz(props.konyvAdat)
    }

    return (
        <div className="konyv">
            <h1>{props.konyvAdat.cim}</h1>
            <h3>Szerző: {props.konyvAdat.szerzo}</h3>
            <p>{props.konyvAdat.ar} Ft</p>
            <button onClick={kosarFeldolgoz}>Vásárlás</button>
        </div>
    );
}

export default Konyv;
