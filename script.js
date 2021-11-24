

let dogVotes = localStorage.getItem('dogVotes');
if (dogVotes === null) {
    dogVotes = 0;
} else {
    dogVotes = parseInt(dogVotes)
    document.querySelector('#doggo-votes').textContent = dogVotes;


}


let catVotes = 0;


let fishVotes = 0;


let totalVotes = localStorage.getItem('total-votes');
if (totalVotes === null) {
    totalVotes = 0;
} else {
    totalVotes = parseInt(totalVotes)
    document.querySelector('#total-votes').textContent = totalVotes;
}



let dogDiv = document.querySelector("#doggo");
let catDiv = document.querySelector("#catto");
let fishDiv = document.querySelector("#fish");

let dogVoteBtn = document.createElement('Button');
dogVoteBtn.textContent = "Vote for Doggo";
dogDiv.append(dogVoteBtn);

dogVoteBtn.addEventListener('click', function(){
dogVotes = dogVotes + 1;
totalVotes = totalVotes + 1;
console.log(dogVotes);
document.querySelector('#doggo-votes').textContent = dogVotes;
localStorage.setItem('dogVotes', dogVotes)
document.querySelector('#total-votes').textContent = totalVotes;
localStorage.setItem('total-votes', totalVotes)
// could also use document.querySelector('#total-votes').textContent = dogVotes + catVotes + fishVotes;
//this is so I would not have to add totalVotes = totalVotes + 1; to each animal

})

let catVoteBtn = document.createElement('Button');
catVoteBtn.textContent = "Vote for Catto";
catDiv.append(catVoteBtn);

catVoteBtn.addEventListener('click', function(){
    catVotes = catVotes + 1;
    totalVotes = totalVotes + 1;
    document.querySelector('#catto-votes').textContent = catVotes
    document.querySelector('#total-votes').textContent = totalVotes



})

let fishVoteBtn = document.createElement('Button');
fishVoteBtn.textContent = "Vote for Fish";
fishDiv.append(fishVoteBtn);

fishVoteBtn.addEventListener('click', function(){
    fishVotes = fishVotes + 1;
    document.querySelector('#fish-votes').textContent = fishVotes
    document.querySelector('#total-votes').textContent = dogVotes + catVotes + fishVotes;

    })

    