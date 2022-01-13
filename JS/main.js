class Heroes {
    constructor(life, imj, name, hungry, clean, depression) {
        this.name = name;
        this.imj = imj;
        this.life = life;
        this.hungry = hungry;
        this.clean = clean;
        this.depression = depression;
    }
}
let h0 = new Heroes(99, "img/0.svg", "charmander", 10, 10, 10);
let h1 = new Heroes(82, "img/1.svg", "abra", 9, 10, 8);
let h2 = new Heroes(97, "img/2.svg", "arcanine", 10, 8, 10);
let h3 = new Heroes(77, "img/3.svg", "articuno", 10, 8, 8);
let h4 = new Heroes(67, "img/4.svg", "blastoise", 10, 9, 9);
let h5 = new Heroes(70, "img/5.svg", "bulbasaur", 10, 10, 10);
let h6 = new Heroes(81, "img/6.svg", "butterfree", 9, 10, 8);
let h7 = new Heroes(92, "img/7.svg", "caterpie", 10, 8, 10);
let h8 = new Heroes(72, "img/8.svg", "chansey", 10, 8, 8);
let h9 = new Heroes(62, "img/9.svg", "charizard", 10, 9, 9);
let h10 = new Heroes(100, "img/10.svg", "clefairy", 10, 10, 10);
let arr = [h0, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10];

function addCard() {
    let i = arr[Math.floor(Math.random() * arr.length)];
    let main = document.querySelector("body");
    let div = document.createElement("div");
    console.log(i.names);
    div.className = "some";
    div.innerHTML = `<strong>name ${i.name}</strong> 
                    <br><img src=" ${i.imj}" alt="#">
                    <br> <strong>life ${i.life}</strong> 
                    <br> <strong>hungry ${i.hungry}</strong> 
                    <br> <strong>clean ${i.clean}</strong> 
                    <br> <strong>depression ${i.depression}</strong>`;

    document.body.append(div);
}

/*todo
- Имя
- Изображение
- Жизненная Сила
- Голод
- Гигиена
- Депрессия
*/
////////////////
