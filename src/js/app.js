import { checkCardNumber } from './codeFunctions';

window.addEventListener("DOMContentLoaded", function() {
  createCardsBlock();
}, false);

let timeoutId = 0;

function createCardsBlock() {
  const root = document.querySelector('#root');
  const cardsBlock = getCardsBlock();
  const cardsBlockHeader = getCardBlockHeader();
  const cardsSamples = getCardsSamples();
  const cardsSamplesEntry = getCardsSamplesEntry();
  const messageBox = getMessageBox();

  cardsBlock.append(cardsBlockHeader);
  cardsBlock.append(cardsSamples);
  cardsBlock.append(cardsSamplesEntry);
  cardsBlock.append(messageBox);

  root.append(cardsBlock);

  addEntringListener();
  checkCardListener();
}

function getCardsBlock() {
  const cardsBlock = document.createElement('div');
  cardsBlock.classList.add('cardsBlock');
  return cardsBlock || '';
}

function getCardBlockHeader() {
  const cardsBlockHeader = document.createElement('h4');
  cardsBlockHeader.classList.add('cardsBlockHeader');
  cardsBlockHeader.textContent = 'Введите номер вашей карты в поле ниже';
  return cardsBlockHeader || '';
}

function getCardsSamples() {
  const cardsSamplesBlock = document.createElement('div');
  cardsSamplesBlock.classList.add('cardsSamples');

  const cardList = [
    {system: 'Visa', img: 'https://www.validcreditcardnumber.com/static/img/card-visa.gif'},
    {system: 'MasterCard', img: 'https://www.validcreditcardnumber.com/static/img/card-mastercard.gif'},
    {system: 'AmericanExpress', img: 'https://www.validcreditcardnumber.com/static/img/card-amex.gif'},
    {system: 'DinersClub', img: 'https://www.validcreditcardnumber.com/static/img/card-diners.gif'},
    {system: 'Discover', img: 'https://www.validcreditcardnumber.com/static/img/card-discover.gif'},
    {system: 'JCB', img: 'https://www.validcreditcardnumber.com/static/img/card-jcb.gif'},
    {system: 'MIR', img: './img/card-mir.gif'},
  ];

  cardList.forEach(el => {
    const card = document.createElement('div');
    card.classList.add('cardsSamplesItem');
    card.classList.add(el.system);
    const cardImg = document.createElement('img');
    cardImg.src = el.img;
    cardImg.title = el.title;
    card.append(cardImg);
    cardsSamplesBlock.append(card);
  });

  return cardsSamplesBlock || '';
}

function getCardsSamplesEntry() {
  const cardsSamplesEntry = document.createElement('cardsSamplesEntry');
  cardsSamplesEntry.classList.add('cardsSamplesEntry');

  const cardsSamplesInput = document.createElement('input');
  cardsSamplesInput.type = 'number';
  cardsSamplesInput.classList.add('cardsSamplesInput');
  cardsSamplesInput.name = 'cardsSamplesInput';
  cardsSamplesInput.placeholder = 'Номер карты';

  const cardsSamplesBtn = document.createElement('button');
  cardsSamplesBtn.type = 'button';
  cardsSamplesBtn.classList.add('cardsSamplesBtn');
  cardsSamplesBtn.textContent = 'Проверить';

  cardsSamplesEntry.append(cardsSamplesInput);
  cardsSamplesEntry.append(cardsSamplesBtn);

  return cardsSamplesEntry || '';
}

function getMessageBox() {
  const messageBox = document.createElement('div');
  messageBox.classList.add('messageBox');
  return messageBox || '';
}

function addEntringListener() {
  const input = document.querySelector('.cardsSamplesInput');

  if (input) {
    input.addEventListener('input', () => {
      if (input.value.length > 19) {
        input.value = input.value.substring(0,19);
      }
    });
  }
}

function checkCardListener() {
  const btn = document.querySelector('.cardsSamplesBtn');
  const input = document.querySelector('.cardsSamplesInput');
  const cards = document.querySelectorAll('.cardsSamplesItem');

  if (btn && input) {
    btn.addEventListener('click', () => {
      
      if (cards) {
        cards.forEach(el => el.classList.remove('cardsSamplesItemActive'));
      }

      if (input.value.length > 12 && input.value.length < 20) {
        const result = checkCardNumber(input.value.toString());
        showMessage(result.mess, result.result);
        if (result.result) {
          const img = document.querySelector('.' + result.style);
          if (img) {
            img.classList.add('cardsSamplesItemActive');
          }
        }
      } else {
        showMessage('В номере карты неверное число цифр', false);
        
      }
    });
  }
}

function showMessage(message, type) {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  const messageBox = document.querySelector('.messageBox');
  messageBox.classList.remove('resultFalsy');
  messageBox.classList.remove('resultTruthy');
  if (type) { 
    messageBox.classList.add('resultTruthy');
  } else {
    messageBox.classList.add('resultFalsy');
  }

  messageBox.textContent = message;
  timeoutId = setTimeout(() => {
    messageBox.textContent = '';
  }, 3000)
}