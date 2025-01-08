class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        let ataque;

        switch (this.type) {
            case "guerreiro":
                ataque = "espada"
                break;

            case "mago":
                ataque = "magia"
                break;

            case "monge":
                ataque = "artes marciais"
                break;

            case "ninja":
                ataque = "shuriken"
                break;
        }

        console.log(`O ${this.type} ${this.name} de ${this.age} anos atacou usando ${ataque}`);
    }
}

const hero1 = new hero("Xena", "50", "guerreiro");
hero1.attack()

const hero2 = new hero("Dumbledore", "115", "mago");
hero2.attack()

const hero3 = new hero("Rigpa", "28", "monge");
hero3.attack()

const hero4 = new hero("Allisson", "22", "ninja");
hero4.attack()