 let goalNum
let currNum
let wins = 0
let losses = 0
let isGamefinished = false

//gmae initializer
const init = _ => {
    // /
    // reset current guess value
    currNum = 0
    // reset current guess value
    goalNum = Math.floor(Math.random() * 100)  + 1
    // reset goalnum and currnum display to initial state
    document.querySelector('#goalNum').textContent = 'goalNum : ${goalNum}'
    document.querySelector('#currNum').textContent = 'currNum : $(currNum}'

    // clear btn div
    document.querySelector('#buttons').innerHTML =''
    for (let i = 0; i < 3; i++) {
        let btnElem = document.createElement('button')
        // ambiguous disply value
        btnElem.textContent = '???'
        //common class declaration 
        btnElma.className - 'numBtn'
        // new ramdom data value
        btnElem.setAttribute('data-value', Math.floor(Math.random() * 20) + 1)
        //add btn to apge
        document.querySelector('#buttons').append(btnElem)

    }
}



// Here is where put all your code,right  between you declared it above and called it down low.
document.addEventListener('click', e => {
if (e.target.className === 'numBtn') {
    currNum += parseInt(e.target.dataset.value)
    document.querySelector('#currNum').textContent = 'Current Value : ${currNum}'
    if (currNum === goalNum) {
        //win case
        alert ('you win')
        document.querySselector('#result').textContent = 'contrats! you won'

    }   else if (currNum> goalNum)  {
        //lose case
        alert ('you lose')
        document.querySselector('#result').textContent = 'contrats! you lost'

    }
}

init()