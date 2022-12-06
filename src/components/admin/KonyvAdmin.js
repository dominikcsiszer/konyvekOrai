
function KonyvAdmin(props) {

    function torol() {
        props.torol(props.konyvAdat.id)
    }

    function szerkeszt() {
        props.szerkeszt(props.konyvAdat.id)
    }

    return (
        <tr>
            <td>{props.konyvAdat.id}</td>
            <td>{props.konyvAdat.cim}</td>
            <td>{props.konyvAdat.szerzo}</td>
            <td>{props.konyvAdat.ar}</td>
            <td>
                <button onClick={szerkeszt}>Szerkeszt</button>
                <button onClick={torol}>Törlés</button>
            </td>
        </tr>
    );
}

export default KonyvAdmin;
