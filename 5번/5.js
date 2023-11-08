const number = document.querySelectorAll(".number")



let i = 0;

for(i=0; i<number.length; i++){
   number[i].innerText = Number(number[i].innerText)+10
}
    