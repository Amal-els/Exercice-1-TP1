f =  function(min,max,nb_attempts){
    let x = Math.random();
    let rint = Math.floor(x*(max-min+1))+min;
    console.log(rint);
    var i=0;
    res = prompt(`Guess a number between ${min} and ${max}. You've got ${nb_attempts} attempts.`);
    while(isNaN(res)|| res === ""){
        res = prompt(`Enter a valid number!`);
    }
    while(i<nb_attempts-1 && res!=rint){
        i++;
        if(rint<res){
        alert(`Try again. Number of  attempts left = ${nb_attempts-i}\nNB: Your number is bigger!`);
        }
        else  {alert(`Try again . Number of  attempts left = ${nb_attempts-i}\nNB: Your number is smaller!`);}
        
        res = prompt(`Guess a number between ${min} and ${max}. You've got ${nb_attempts} attempts.`);
        while(isNaN(res)|| res === ""){
            res = prompt(`Enter a valid number`);
        }        
    }
    if(res == rint)
        alert("Great Job!");

    else alert(`Better Luck next time :( \nThe actual number was ${rint} `);
    var c= confirm("Want to play again ?");
    if(c){
        f(min,max,nb_attempts);
    }

}

fa= document.querySelector("button.facil");
fa.addEventListener("click", ()=>f(1,10,4)
);
int= document.querySelector("button.intermediaire");
int.addEventListener("click", ()=>f(1,50,5)
);
dif= document.querySelector("button.difficil");
dif.addEventListener("click", ()=>f(1,100,5)
);



