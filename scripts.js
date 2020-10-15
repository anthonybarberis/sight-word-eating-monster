function init() {
    labelFood();
    randomMonster();
}

const words = {
    orange: [
        "he",
        "was",
        "for",
        "are",
        "on",
        "as",
        "with",
        "his",
        "they",
        "I",
    ],
    yellow: [
        "at",
        "be",
        "by",
        "had",
        "have",
        "this",
        "from",
        "word",
        "or",
        "one",
    ],
}

const monsters = [
    "green",
    "red",
    "black",
    "purple",
    "blonde",
]

function labelFood() {
    let foods = document.querySelectorAll(".food");
    console.log(foods);
    foods.forEach(function(element, index) {
        element.textContent = words.orange[index];
    })
}
function randomMonster() {
    document.querySelector("#monster").style = `background-image: url("images/monster${monsters[(Math.floor(Math.random() * 1000)) % 5]}.png")`
}

window.onload = init;