function gettingNumber(min,max){
    let res = prompt(`Guess a number between ${min} and ${max}.`);
    while(isNaN(res)|| res === ""){
        res = prompt(`Enter a valid number!`);
    }
    return res;
}
function jouer(min,max,nb_attempts){
    alert(`You've got ${nb_attempts} attempts. Use them wisely!`);
    let x = Math.random();
    let rint = Math.floor(x*(max-min+1))+min;
    var i=0;
    let n = gettingNumber(min,max);
    while(i<nb_attempts-1 && n!=rint){
        i++;
        if(rint<n){
        alert(`Try again. Number of  attempts left = ${nb_attempts-i}\nNB: Your number is bigger!`);
        }
        else  {alert(`Try again . Number of  attempts left = ${nb_attempts-i}\nNB: Your number is smaller!`);}
        n = gettingNumber(min,max);
    }        
    if(n == rint)
        alert("Great Job!");
    else 
        alert(`Better Luck next time :( \nThe actual number was ${rint}`);
    var c= confirm("Want to play again ?");
    if(c){
        jouer(min,max,nb_attempts);
    }
}

fa= document.querySelector("button.facil");
fa.addEventListener("click", ()=>jouer(1,10,4)
);
int= document.querySelector("button.intermediaire");
int.addEventListener("click", ()=>jouer(1,50,5)
);
dif= document.querySelector("button.difficil");
dif.addEventListener("click", ()=>jouer(1,100,5)
);



