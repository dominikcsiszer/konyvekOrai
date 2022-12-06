import './Ujtermek.css'
import React, {useState} from 'react'

function Ujtermek(props) {
    const [cim, setCim] = useState("")
    const [szerzo, setSzerzo] = useState("")
    const [ar, setAr] = useState(0)
    const [adat, setAdat] = useState({id: 0, cim: "", szerzo: "", ar: 0})

    function mentes() {
        props.mentes(adat)
    }

    function adatValt(event) {
        let a = adat
        a[event.target.id] = event.target.value
        setAdat(a)
        setCim(a.cim)
        setSzerzo(a.szerzo)
        setAr(a.ar)
    }
    return(
        <>
            <form>
                <fieldset>
                <label for='cim'>Cím</label>
                <input type='text' id='cim' value={cim} onChange={adatValt} />

                <label for='szerzo'>Szerző</label>
                <input type='text' id='szerzo' value={szerzo} onChange={adatValt} />

                <label for='ar'>Ár</label>
                <input type='number' id='ar' value={ar} onChange={adatValt} />
                </fieldset>
                <input type='button' value='Mentés' onClick={mentes} />
            </form>
        </>
    )
}

export default Ujtermek