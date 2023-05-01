const cards = document.querySelectorAll('.card');
let cardOne, cardTwo;
let dis_Deck = false;
let matchCard = 0;


function flipcard(e) {
    let clickedCrad = e.target;

    if (clickedCrad != cardOne && !dis_Deck) {
        clickedCrad.classList.add('flip');

        if (!cardOne) {
            return cardOne = clickedCrad;
        }
        cardTwo = clickedCrad;
        dis_Deck = true;

        let cardOneImg = cardOne.querySelector('img').src;
        let cardTwoImg = cardTwo.querySelector('img').src;
        matchCards(cardOneImg, cardTwoImg);
    }
}



function matchCards(img1, img2) {
    if (img1 == img2) {

        matchCard++;
        if (matchCard % 12 == 0) {
            document.getElementById('message').style.display = "block";
            setTimeout(() => {
                document.getElementById('message').remove();
            }, 1200);
            setTimeout(() => {
                return shffcard();
            }, 1200);

        }


        cardOne.removeEventListener('click', flipcard);
        cardTwo.removeEventListener('click', flipcard);
        cardOne = cardTwo = '';
        return dis_Deck = false;

    } else {
        setTimeout(() => {
            cardOne.classList.add('vibration');
            cardTwo.classList.add('vibration');
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove('vibration', 'flip');
            cardTwo.classList.remove('vibration', 'flip');
            cardOne = cardTwo = '';
            dis_Deck = false;
        }, 1200);
    }
}


function matchCards(img1, img2) {
    if (img1 == img2) {

        matchCard++;
        if (matchCard % 12 == 0) {
            document.getElementById('message').innerText = ' FELICITATION !';
            setTimeout(() => {
                document.getElementById('message').remove();
            }, 1200);
            setTimeout(() => {
                return shffcard();
            }, 1200);

        }

        cardOne.removeEventListener('click', flipcard);
        cardTwo.removeEventListener('click', flipcard);
        cardOne = cardTwo = '';
        return dis_Deck = false;

    } else {
        setTimeout(() => {
            cardOne.classList.add('vibration');
            cardTwo.classList.add('vibration');
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove('vibration', 'flip');
            cardTwo.classList.remove('vibration', 'flip');
            cardOne = cardTwo = '';
            dis_Deck = false;
        }, 1200);
    }
}

function shffcard() {
    matchCard = 0;
    cardOne = cardTwo = '';

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    array.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove('flip');
        card.addEventListener('click', flipcard);

        let imgTag = card.querySelector('img');
        imgTag.src = `img/image-${array[index]}.jpg`
    });
    cards.forEach(card => {
        card.addEventListener('click', flipcard);
        card.classList.add('flip');
        setTimeout(() => {
            card.classList.remove('flip');
        }, 5000);
    });

}
shffcard();


const departMinute =2.1;
let temps = departMinute * 60;

const timerElement = document.getElementById('timer');

setInterval(() => {
    let minutes = parseInt(temps / 60, 10);
    let second = parseInt(temps % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes
    second = second < 10 ? "0" + second : second


    timerElement.innerText = `${minutes}:${second}`;
    temps = temps <= 0 ? 0 : temps - 1


    if (temps <= 0) {
        timerElement.innerText = "00:00";
        cards.forEach(card => {
            card.addEventListener('click', flipcard);
            card.classList.add('flip');
            setTimeout(() => {
                card.classList.remove('flip');
               
            }, 5000);
        
                document.getElementById('message').innerText = ' GAME OVER !';
               document.getElementById('commencer').style.display='block';
           
          
        });
    } else {
        temps -= 1;
    }

}, 1000);








