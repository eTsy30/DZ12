class Heroes {
    constructor({ life, img, name, hungry, clean, dep }) {
        this.name = name;
        this.img = img;
        this.life = life;
        this.hungry = hungry;
        this.clean = clean;
        this.dep = dep;
        this.id = Math.random(1000)
        this.updateCharasteristic()
    }
    CHANGE_LIFE = 5
    CHANGE_HUNGRY = 3
    CHANGE_CLEAN = 10
    CHANGE_DEP = 1
    UPDATE_TIME = 1000
    VALUE_RANDOM = 5
    getCharacteristic() {
        return {
            name: this.name,
            img: this.img,
            life: this.life,
            dep: this.dep,
            clean: this.clean,
            hungry: this.hungry,
            id: this.id


        };
    }
    updateCharasteristic() {

        setInterval(() => {
            if (this.hungry > 0 && this.dep > 0 && this.clean > 0) {
                this.hungry -= Math.floor(Math.random() * this.VALUE_RANDOM)
                this.dep -= Math.floor(Math.random() * this.VALUE_RANDOM)
                this.clean -= Math.floor(Math.random() * this.VALUE_RANDOM)
            } else {
                this.life -= Math.floor(Math.random() * this.VALUE_RANDOM)
            }


        }, this.UPDATE_TIME)
    }
    onLife() {
        this.life += this.CHANGE_LIFE;
    }
    onHungry() {
        this.hungry += this.CHANGE_HUNGRY;

    }
    onClean() {
        this.clean += this.CHANGE_CLEAN;
    }

    onDep() {
        this.dep += this.CHANGE_CLEAN;
    }
}

const heroesData = [
    {
        name: "charmander",
        life: 100,
        img: "img/0.svg",
        hungry: 50,
        clean: 33,
        dep: 10,
        id: 1
    },
    {
        name: "abra",
        life: 100,
        img: "img/1.svg",
        hungry: 50,
        clean: 33,
        dep: 10,
        id: 2
    },
   
    {
        name: "articuno",
        life: 100,
        img: "img/3.svg",
        hungry: 50,
        clean: 33,
        dep: 10,
        id: 4
    },
    {
        name: "blastoise",
        life: 100,
        img: "img/4.svg",
        hungry: 50,
        clean: 33,
        dep: 10,
        id: 5
    },
];
function getRandomHero(arr) {
    const hero = arr[Math.floor(Math.random() * arr.length)];
    const create = new Heroes(hero)
    return create
}
function showCard() {
    const hero = getRandomHero(heroesData)

    render(hero)
}

function render(hero) {
    const { name, img, life, hungry, clean, dep, id } = hero.getCharacteristic()
    const { onHungry, onDep, onClean } = hero
    const div = document.createElement("div");
    const bindOnHyngry = onHungry.bind(hero)
    const bindonDep = onDep.bind(hero)
    const bindonClean = onClean.bind(hero)
   // console.log(bindonDep);
   // console.log(bindOnHyngry);

    div.innerHTML = `
    <div class="card">
    <strong id='name_${id}' >name ${name}</strong>
     <br><img class="img" id='img_${id}'src=" ${img}" alt="#">
     <br> <strong id='life_${id}'>life ${life}</strong>
     <br> <strong id='hyngry_${id}' >hungry ${hungry}</strong>
     <br> <strong id='claen_${id}'>clean ${clean}</strong>
     <br> <strong id='dep_${id}'>dep ${dep}</strong>
     <button class="btn" id='eat_${id}'>EAT</button> 
     <button class="btn" id='dep_${id}'>Depression</button>
    <button class="btn" id='clean_${id}'>Clean</button>
    </div>
                     `;
    //console.log('render');
    document.body.append(div);
    document.getElementById(`eat_${id}`).addEventListener('click', bindOnHyngry)
    document.getElementById(`clean_${id}`).addEventListener('click', bindonClean)
    document.getElementById(`dep_${id}`).addEventListener('click', bindonDep)
    setInterval(function () {
        const { name, life, hungry, clean, dep } = hero.getCharacteristic()
        document.getElementById(`name_${id}`).innerText = `Name ${name}`;
        document.getElementById(`life_${id}`).innerText = `Life ${life}`;
        document.getElementById(`hyngry_${id}`).innerText = `Hungry ${hungry}`;
        document.getElementById(`claen_${id}`).innerText = `Clean ${clean}`;
        document.getElementById(`dep_${id}`).innerText = `Depresion ${dep}`;

    }, 500)
}


