import './Kosar.css'

function Kosar(props) {
    function kosarTorol() {
        props.kosarTorol(props.konyvAdat)
    }

    return (
        <tr className='kosarItem' onClick={kosarTorol}>
            <td>{props.konyvAdat.id}</td>
            <td>{props.konyvAdat.cim}</td>
            <td>{props.konyvAdat.szerzo}</td>
            <td> {props.konyvAdat.db}</td>
            <td>{props.konyvAdat.ar} Ft</td>
        </tr>
    )
}

export default Kosar;
