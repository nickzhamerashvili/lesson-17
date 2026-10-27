const count = 10


const obj = {
    id: 1,
    title: "lorem ipsum 1",
    description: "i am so pretty",
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
}

function generateDummyInfo(count, obj) {
    const arr = [obj]
    for(let i = 1; i < count; i++){
        arr.push({...arr[i - 1], id: arr[i - 1].id + 1})
    }

    return arr;
}







const arr = generateDummyInfo(count, obj)

const main = document.querySelector(".main");

// for (let i = 0; i < arr.length; i++){
//     createCard(arr[i], main);
// }

// for(let card of arr) {
//     createCard(card, main)
// }

arr.forEach( (c) => {
    createCard(c, main)
} )


// const obj = {
//     id: 1,
//     title: "lorem ipsum 1",
//     description: "i am so pretty",
//     img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
// }

function createCard(card, parent) {
    const div = document.createElement('div');
    div.className = "card"
    const image = document.createElement("img");
    image.src = card.img;

    const h2 = document.createElement("h2");
    h2.textContent = card.title;

    const p = document.createElement("p");
    p.textContent = card.description

    div.append(h2, image, p);
    parent.append(div);
}


// const func = () => {
//     console.log(123)
// } 


// func()










const plus = main.querySelector(".plus")
const minus = main.querySelector(".minus")
const number = main.querySelector(".number")

plus.addEventListener("click", function() {
    onChangeNumber("plus")
})
minus.addEventListener("click", function() {
    onChangeNumber("minus")
})

// operation = "minus" || "plus"
function onChangeNumber(operation) {

    let n = +number.textContent

    if((n >= 10  && operation === "plus") || (n <= 0 && operation=== "minus")) {
        return 
    }

    if(operation === "minus") {
        number.textContent = n - 1;
        return 
    }
    number.textContent = n + 1;
}



// 1 + 2 * 3
// +- 1 ; */ - 3; +number.textContent - 10

const input = document.querySelector('.input')
input.addEventListener('change', function (event) {
    
    let value = event.target.value
    if(value.length < 8 || !isAnyCapitalLetter(value) || !isAnyDigit(value)) {
        input.classList.add("error")
    } else {
        input.classList.remove("error")
    }
})

function isAnyCapitalLetter(value) {
    for(let i = 0; i < value.length; i++) {
        if(value[i] === value[i].toUpperCase()){
            return true;
        }
    }
    return false
}

function isAnyDigit(value) {

    for(let i = 0; i < value.length; i++) {
        if(value[i] == +value[i]){
            return true
        } 
    }

    return false;

}




















