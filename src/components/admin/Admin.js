import './Admin.css';

import KonyvAdmin from './KonyvAdmin'
import konyvModel from '../../model/konyvModel'

import {useEffect, useState} from 'react'
import Ujtermek from './Ujtermek';

const konyv = [
    {
      id: 1,
      cim: "Első könyv",
      szerzo: "Ismeretlen",
      ar: 12000
    },
    {
      id: 2,
      cim: "Második könyv",
      szerzo: "Ismeretlen",
      ar: 20000
    },
    {
      id: 3,
      cim: "Harmadk könyv",
      szerzo: "Ismeretlen",
      ar: 8000
    },
    {
      id: 4,
      cim: "Negyedik könyv",
      szerzo: "Ismeretlen",
      ar: 11000
    },
    {
      id: 5,
      cim: "Ötödik könyv",
      szerzo: "Ismeretlen",
      ar: 1000
    },
    {
      id: 6,
      cim: "Hatodik könyv",
      szerzo: "Ismeretlen",
      ar: 1200
    }
  ]

const konyv1 = [
    {
        id: 1,
        cim: "Első könyv",
        szerzo: "Ismeretlen",
        ar: 12000
      }
]

function Admin() {
    // let vegpont = "http://localhost:3001/konyvek"
    
    // useEffect(() => {
        //   fetch(vegpont)
        //         .then((response) => response.json())
        //         .then((data) => setKonyvek(data))
        // }, [])
        
    const [konyvek, setKonyvek] = useState(konyv)
    const kModel = new konyvModel(konyv)

    function torol(id) {
        kModel.adatTorol(id)
        let konyvTomb = kModel.getkonyvek()
        setKonyvek(konyvTomb)
    }

    function szerkeszt(id) {
        console.log(id)
    }

    function mentes(adat) {
        kModel.adatMentes(adat)
        let konyvTomb = kModel.getkonyvek()
        setKonyvek(konyvTomb)
    }

    return (
        <div className="admin">
            <h1>Admin felület</h1>
            <Ujtermek key='1' mentes={mentes} />
            <hr></hr>
            <table className='table'>
                <thead>
                    <th>#</th>
                    <th>Cím</th>
                    <th>Szerző</th>
                    <th>Ár</th>
                    <th>Műveletek</th>
                </thead>
                <tbody>
                {konyvek.map((konyvAdat, index) => {
                    return ( <KonyvAdmin konyvAdat={konyvAdat} key={index} torol={torol} szerkeszt={szerkeszt} />)
                })}
                {}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
