
let upcoming=document.getElementById(`up`).addEventListener(`click`, function(){
    let match = document.getElementById(`ma`);
    match.style.display=`none`

    let fao= document.getElementById(`fao`);
    fao.style.display=`block`;
})


let allGroup= document.getElementById(`all`).addEventListener(`click`, function(){
    let match = document.getElementById(`ma`);
    match.style.display=`block`

    let fao= document.getElementById(`fao`);
    fao.style.display=`none`;
})