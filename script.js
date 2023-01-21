const imageBox = document.getElementById("imageBox");
const myImg = document.getElementById("myImg");
const myInput = document.getElementById("myInput");
const inputButton = document.getElementById("inputButton");
const descriptionBox = document.getElementById("descriptionBox");
const optionsBox = document.getElementById("optionsBox");
const navBox = document.getElementById("navBox");

let currentPosition = 2;

const places = [
    {
        "name":"kantine",
        "description":"u staat in de kantine van het Media college",
        "image":"img/0.jpg",
        "options":[2,1],
        "directions":["west","zuid"]
    },
    {
        "name":"trap",
        "description":"u staat op de trap tussen de begane grond en de eerste verdieping",
        "image":"img/1.jpg",
        "options":[4,2,0],
        "directions":["omhoog","omlaag","west"]
    },
    {
        "name":"deur",
        "description":"u staat bij de deur van het Mediacollega",
        "image":"img/2.jpg",
        "options":[1,0],
        "directions":["omhoog","west"]
    },
    {
        "name":"docentenkamer",
        "description":"u bent in de docentenkamer",
        "image":"img/3.jpg",
        "options":[4],
        "directions":["west"]
    },
    {
        "name":"gang",
        "description":"u staat in de gang van de eerste etage",
        "image":"img/4.jpg",
        "options":[7,3,8,6,1],
        "directions":["noord","oost","zuid","west","omlaag"]
    },
    {
        "name":"techlab",
        "description":"u bent in het techlab van het mediacollege",
        "image":"img/5.jpg",
        "options":[8],
        "directions":["west"]
    },
    {
        "name":"toilet",
        "description":"u staat in het toilet",
        "image":"img/6.jpg",
        "options":[4],
        "directions":["oost"]
    },
    {
        "name":"leslokaal",
        "description":"u staat in een leslokaal van het mediacollege",
        "image":"img/7.jpg",
        "options":[4],
        "directions":["zuid"]
    },
    {
        "name":"examenlokaal",
        "description":"u staat in het examenlokaal",
        "image":"img/8.jpg",
        "options":[4,5],
        "directions":["noord","west"]
    }
];

function showLocation(){
    navBox.innerHTML = "";
    optionsBox.innerHTML = "";
    myImg.src = places[currentPosition].image;
    descriptionBox.innerHTML = places[currentPosition].description;
    let possibleDirections = places[currentPosition].directions.map((direction,i) => {  
        let place = places[currentPosition].options[i];
        let optionsP = document.createElement("p");
        optionsP.innerHTML =  "<b>" + direction + "</b>: naar de " + places[place].name;
        optionsBox.appendChild(optionsP);

        let btn = document.createElement("input");
        btn.setAttribute("type","button");
        btn.setAttribute("class","inputButton");
        btn.setAttribute("value",direction);
        btn.addEventListener("click", ()=>{
            currentPosition = places[currentPosition].options[i];
            showLocation();
        });
        navBox.appendChild(btn);
    });
}

showLocation();