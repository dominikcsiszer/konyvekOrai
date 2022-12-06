class konyvModel {

    #konyv = []

    constructor(konyv) {
        this.#konyv = konyv
    }
    
    adatTorol(id) {
        // Paraméterbe kell majd a vegpont
        // console.log("TÖRÖLTEM: " + id);
        // vegpont += "/" + id;
        // console.log(vegpont);
        // fetch(vegpont, {
        //     method: "DELETE",
        // })
        //     .then()
        //     .then(() => {
        //         console.log("sikeres törlés");
        //     })
        //     .catch((error) => {
        //         console.error("Error:", error);
        //     });

        let elem = this.#konyv.findIndex((eleme) => {
            return eleme.id === id
        })

        this.#konyv.splice(elem, 1)
    }

    adatMentes(adat) {
        this.#konyv.push(adat)
        this.#konyv[this.#konyv.length-1].id = this.#konyv.length
    }

    getkonyvek() {
        return this.#konyv
    }

}

export default konyvModel