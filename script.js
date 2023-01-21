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
        "options":[
            {"direction":"west","destination":2},
            {"direction":"zuid","destination":1}
        ]
    },
    {
        "name":"trap",
        "description":"u staat op de trap tussen de begane grond en de eerste verdieping",
        "image":"img/1.jpg",
        "options":[
            {"direction":"omhoog","destination":4},
            {"direction":"omlaag","destination":2},
            {"direction":"west","destination":0}
        ]
    },
    {
        "name":"deur",
        "description":"u staat bij de deur van het Mediacollega",
        "image":"img/2.jpg",
        "options":[
            {"direction":"omhoog","destination":1},
            {"direction":"west","destination":0}           
        ]
    },
    {
        "name":"docentenkamer",
        "description":"u bent in de docentenkamer",
        "image":"img/3.jpg",
        "options":[
            {"direction":"west","destination":4}           
        ]
    },
    {
        "name":"gang",
        "description":"u staat in de gang van de eerste etage",
        "image":"img/4.jpg",
        "options":[
            {"direction":"noord","destination":7},
            {"direction":"oost","destination":3},
            {"direction":"zuid","destination":8},
            {"direction":"west","destination":6},
            {"direction":"omlaag","destination":1}           
        ]
    },
    {
        "name":"techlab",
        "description":"u bent in het techlab van het mediacollege",
        "image":"img/5.jpg",
        "options":[
            {"direction":"west","destination":8}           
        ]
    },
    {
        "name":"toilet",
        "description":"u staat in het toilet",
        "image":"img/6.jpg",
        "options":[
            {"direction":"oost","destination":4}           
        ]
    },
    {
        "name":"leslokaal",
        "description":"u staat in een leslokaal van het mediacollege",
        "image":"img/7.jpg",
        "options":[
            {"direction":"zuid","destination":4}           
        ]
    },
    {
        "name":"examenlokaal",
        "description":"u staat in het examenlokaal",
        "image":"img/8.jpg",
        "options":[
            {"direction":"noord","destination":4},
            {"direction":"west","destination":5}           
        ]
    }
];

function showLocation(){
    navBox.innerHTML = "";
    optionsBox.innerHTML = "";
    myImg.src = places[currentPosition].image;
    descriptionBox.innerHTML = places[currentPosition].description;
    let possibleDirections = places[currentPosition].options.map((option,i) => { 
        console.log(option);
        let directionsP = document.createElement("p");
        directionsP.innerHTML = "<b>" + option.direction + "</b>: naar de " + places[option.destination].name;
        optionsBox.appendChild(directionsP);

        let btn = document.createElement("input");
        btn.setAttribute("type","button");
        btn.setAttribute("class","inputButton");
        btn.setAttribute("value",option.direction);

        navBox.appendChild(btn);
        btn.addEventListener("click", ()=>{
            currentPosition = option.destination;
            console.log(currentPosition);
            showLocation();
        });
    });
}

showLocation();