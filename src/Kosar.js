import './Kosar.css'

function Kosar(props) {
    function kosarTorol() {
        props.kosarTorol(props.konyvAdat)
    }

    function kosarFeldolgoz() {
        props.kosarFeldolgoz(props.konyvAdat)
    }


    return (
        <tr className='kosarItem'>
            <td>{props.konyvAdat.id}</td>
            <td>{props.konyvAdat.cim}</td>
            <td>{props.konyvAdat.szerzo}</td>
            <td><i class="fa-solid fa-minus" onClick={kosarTorol}></i> {props.konyvAdat.db} <i class="fa-solid fa-plus" onClick={kosarFeldolgoz}></i></td>
            <td>{props.konyvAdat.ar} Ft</td>
            <td><button onClick={kosarTorol}>Töröl</button></td>
        </tr>
    )
}

export default Kosar;
