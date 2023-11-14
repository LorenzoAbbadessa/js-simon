// creo 5 numeri e li faccio vedere in pagina
let contenitore = document.getElementById("contenitore")
for (let i = 1; i <= 5; i++) {
    const numeri = document.createElement("p");
    numeri.innerText = Math.floor(Math.random(i) * 100);
    document.body.appendChild(numeri);

    //console.log(Math.floor(Math.random(i) * 100))
}


//creo funzione con timer di 30 sec

setTimeout(aggiungiClasse, 3*1000);



function aggiungiClasse(numeri){
    const aggiunta = numeri.clasList.add("hide");
    return aggiunta;
}






// creo 5 prompt  dove l'utente scriverà i numeri che ricorda 




//output il sito ti dice quanti e quali numeri hai azzeccato




