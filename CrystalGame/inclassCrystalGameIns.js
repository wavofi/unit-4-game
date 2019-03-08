49
1







Message List
Loading history...

Justin Biele [8:19 PM]
https://www.codewars.com/
Codewars
Codewars: Train your coding skills
Codewars is where developers achieve code mastery through challenge. Train on kata in the dojo and reach your highest potential.
https://www.hackerrank.com/
hackerrank.com
HackerRank
Join over 5 million developers. Practice coding, prepare for interviews, and get hired.
https://www.hackerrank.com/wp-content/uploads/2018/11/hackerrank_share-image_0_default.png

Slackbot [6:30 PM]
Reminder: @channel :white_check_mark: *Mark Attendance* in bootcampspot.com

Quinton Fults [6:33 PM]
https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=76563425-189e-40ff-9028-aa08002a068f

Quinton Fults [7:32 PM]
Untitled 
// globals
let goalNum
let currNum
let wins = 0
let losses = 0
let isDone = false
​
// game initializer
const init = _ => {
 // set isDone false for game progress
 isDone = false
 // reset current guess value
 currNum = 0
 // new random number to approach
 goalNum = Math.floor(Math.random() * 100) + 1
 // reset goalNum and currNum display to initial state
 document.querySelector('#goalNum').textContent = `Goal Number : ${goalNum}`
 document.querySelector('#currNum').textContent = `Current Value : ${currNum}`
 document.querySelector('#result').textContent = ''
 // clear btn div
 document.querySelector('#buttons').innerHTML = ''
​
 // adds three new buttons with new values
 for (let i = 0; i < 3; i++) {
  // create button
  let btnElem = document.cr
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  .
  `eateElement('button')
  // ambiguous display value
  btnElem.textContent = '???'
  // common class declaration for buttons
  btnElem.className = 'numBtn'
  // new random data value
  btnElem.setAttribute('data-value', Math.floor(Math.random() * 20) + 1)
  // add btn to page
  document.querySelector('#buttons').append(btnElem)
 }
}
​
// listener for random number buttons
document.addEventListener('click', e => {
 // make sure thing clicked is random number button and that the game has not ended yet
 if (e.target.className === 'numBtn' && !isDone) {
  // grab the number from the data-value attribute and parse it
  currNum += parseInt(e.target.dataset.value)
  // update the current value display
  document.querySelector('#currNum').textContent = `Current Value : ${currNum}`
  // win case :
  if (currNum === goalNum) {
   // display success message
   document.querySelector('#result').textContent = 'Congrats! You Won!'
   // increment wins up
   wins++
   // display the new wins count
   document.querySelector('#wins').textContent = `Wins : ${wins}`
   // sets the game to be over
   isDone = true
   // lose case :
  } else if (currNum > goalNum) {
   // display fail message
   document.querySelector('#result').textContent = 'Congrats! You Lost! Good Job!'
   // increment losses up
   losses++
   // display losses count
   document.querySelector('#losses').textContent = `Losses: ${losses}`
   // sets game to be over
   isDone = true
   // playing case :
  } else {
   // displays message to keep playing
   document.querySelector('#result').textContent = 'Keep adding numbers...'
  }
 }
})
​
// initialize values for app start
init()
Collapse

Message Input


Message #_tth_class-chat