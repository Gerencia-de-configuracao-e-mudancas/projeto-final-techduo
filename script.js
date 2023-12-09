const divCard = document.getElementById("card");

let cardNome = ["Margot Robbie", "Ryan Gosling", "America Ferrera", "Ariana Greenbalt", "Will Farrell", "Emma MacKey", "Issa Rae", "Michael Cera", "Simu Liu", "Kate McKinnon"];
let cardFoto = ["https://br.web.img3.acsta.net/c_310_420/pictures/23/07/17/19/00/0289166.jpg", "https://br.web.img3.acsta.net/c_310_420/pictures/16/05/17/17/28/208580.jpg", "https://br.web.img3.acsta.net/c_310_420/pictures/16/01/26/11/12/335396.jpg", "https://br.web.img3.acsta.net/c_310_420/pictures/23/09/18/15/23/2403096.jpg", 
"https://br.web.img3.acsta.net/c_310_420/pictures/14/09/06/17/37/169130.jpg",					"https://br.web.img3.acsta.net/c_310_420/pictures/19/01/21/23/25/1928969.jpg", "https://br.web.img3.acsta.net/c_310_420/pictures/18/09/12/19/36/1848742.jpg", "https://br.web.img3.acsta.net/c_310_420/pictures/18/09/19/22/37/5221873.jpg", "https://br.web.img2.acsta.net/c_310_420/pictures/19/07/21/14/42/1468199.jpg", "https://fr.web.img5.acsta.net/c_310_420/pictures/18/07/26/10/09/5213024.jpg"];

for(let i=0; i<cardNome.length; i++){
    let nome = cardNome[i];
    let foto = cardFoto[i];
    let card = `<div class="cardConteiner">
    <img src="${foto}">
    <h3>${nome}</h3>
    </div>`;
    divCard.innerHTML += card;
}