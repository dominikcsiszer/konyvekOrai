import './Public.css'

import Konyv from './Konyv'
import Kosar from './Kosar'
import kosarModel from '../../model/kosarModel'

import {useEffect, useState} from 'react'

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

function Public() {
    // const [konyvek, setKonyvek] = useState([])

    // let vegpont = "http://localhost:3001/konyvek"
  
    // useEffect(() => {
    //   fetch(vegpont)
    //         .then((response) => response.json())
    //         .then((data) => setKonyvek(data))
    // }, [])
    
    const [db, setDb] = useState(0)
    const [osszesen, setOsszesen] = useState(0)
    const [kosar, setKosar] = useState([])
  
    const kModel = new kosarModel(kosar)
  
    function kosarFeldolgoz(adat) {
      /* Hány könyv van a kosárban? */
      /**A darabszám jelenti a komponens pillanatnyi állapotát
       * amiko ez változik, akkor az oldal egy részének újra kell renderelődni.
       * Et a state
       */
      kModel.kosarba(adat)
      setDb(kModel.getOsszDb())
      setOsszesen(kModel.getOsszAR())
      setKosar(kModel.getKosar())
    }
  
    function kosarTorol(adat) {
      kModel.kosarTorles(adat.id)
      setDb(kModel.getOsszDb())
      setOsszesen(kModel.getOsszAR())
      setKosar(kModel.getKosar())
    }
  
    return (
      <div className="Public">
          <main className='main-section'>
          <section className='kosar'>
            <p>Könyvek száma: {db}</p>
            <table className="kosarTable">
              <thead>
                  <th>#</th>
                  <th>Cím</th>
                  <th>Szerző</th>
                  <th>Darab</th>
                  <th>Ár</th>
                  <th>Művelet</th>
              </thead>
              <tbody>
                {kosar.map((kosar, index) => {
                  return (<Kosar konyvAdat={kosar} key={index} kosarTorol={kosarTorol} kosarFeldolgoz={kosarFeldolgoz} />)
                })}
              </tbody>
            </table>
            <p>Könyvek összértéke: {osszesen} Ft</p>
          </section>
          <article className='konyvek'>
            {konyv.map((konyvAdat, index) => {
              return ( <Konyv konyvAdat={konyvAdat} key={index} kosarFeldolgoz={kosarFeldolgoz} />)
            })}
          </article>
          </main>
      </div>
    );
}

export default Public