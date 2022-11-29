class kosarModel {
    #kosar = []
    #osszDb
    #osszAr

    constructor(kosar) {
        this.#kosar = kosar
        this.#osszAr = 0
        this.#osszDb = 0
    }
    getOsszDb() {
        this.#kosar.forEach(element => {
            this.#osszDb = this.#osszDb + element.db
        })
        return this.#osszDb
    }
    getOsszAR() {
        this.#kosar.forEach(element => {
            this.#osszAr = this.#osszAr + (element.ar * element.db)
        })
        return this.#osszAr
    }
    kosarba(adat) {
        let azonoselem = this.#kosar.findIndex((elem) => {
            return elem.id === adat.id
        })

        if (azonoselem >= 0) {
            this.#kosar[azonoselem].db++
        } else {
            this.#kosar.push(adat)
            this.#kosar[this.#kosar.length-1].db = 1
        }
    }
    kosarTorles(id) {
        let elem = this.#kosar.findIndex((eleme) => {
            return eleme.id === id
        })

        if(this.#kosar[elem].db > 1) {
            this.#kosar[elem].db = this.#kosar[elem].db-1
        } else {
            this.#kosar.splice(elem, 1)
        }
    }
    getKosar() {
        return this.#kosar
    }
}

export default kosarModel