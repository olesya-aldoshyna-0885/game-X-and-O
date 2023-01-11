// const ul = document.querySelector('ul');
// // li.forEach(item => item.addEventListener('click', onClick))
// // console.log(ul);
// ul.addEventListener('click', onClick)

// function onClick(evt) {
//     if(evt.target.classList.contains('js-target')){
//         console.log('😎');
//     }else{
//         console.log("😥");
//     }
//     // console.log("currentTarget", evt.currentTarget);
//     // console.log("target", evt.target);
// }



const content = document.querySelector('.content');
const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];
const stepX = [];
const stepO = [];

let player = 'X';

function createMarkup() {
    let markup = '';

    for (let i = 1; i <= 9; i += 1) {
        markup += `<div class="item" data-id="${i}"></div>`;
    }

    content.innerHTML = markup;
}
createMarkup();


content.addEventListener('click', onClick);

function onClick(evt) {
    if (!evt.target.classList.contains('item')) {
        return;
    }
    // if (evt.target === evt.currentTarget) {
    //     return;
    // }
    console.log('this', evt.target.textContent);
    if (evt.target.textContent) {
        return;
    }

    const currentId = Number(evt.target.dataset.id);
    // console.log(currentId);
    let result = false;

    if (player === "X") {
        stepX.push(currentId)
        result = isWinner(stepX)

    } else {
        stepO.push(currentId)
        result = isWinner(stepO)
    }

    evt.target.textContent = player;

    if (result) {
        chempion(player);
        return;
    }

    player = player === "X" ? "O" : "X";
}

function isWinner(arr) {
    console.log("історія ходів", arr);
    return wins.some(item => {
        console.log("item", item);
        const result = item.every(id => {
            console.log("id", id);
            return arr.includes(id)
        })
        console.log('result',result);
        return result
    })
}
function isWinner(arr){
    return wins.some(item => item.every(id => arr.includes(id)))
}
function chempion(player) {
    setTimeout(() => {
        alert(player);
        createMarkup();
    }, 500)
}