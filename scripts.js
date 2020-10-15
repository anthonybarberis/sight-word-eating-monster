function init() {
    labelFood();
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

window.onload = init;