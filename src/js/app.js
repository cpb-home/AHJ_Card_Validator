window.addEventListener("DOMContentLoaded", function() {
  createCardsBlock();
}, false);

function createCardsBlock() {
  const root = document.querySelector('#root');
  const cardsBlock = getCardsBlock();
  const cardsBlockHeader = getCardBlockHeader();
  

  cardsBlock.append(cardsBlockHeader);
  root.append(cardsBlock);
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

  cardList = [
    {system: 'Visa', img: 'https://www.validcreditcardnumber.com/static/img/card-visa.gif'},
    {system: 'MasterCard', img: 'https://www.validcreditcardnumber.com/static/img/card-mastercard.gif'},
    {system: 'American Express', img: 'https://www.validcreditcardnumber.com/static/img/card-amex.gif'},
    {system: 'Diners Club', img: 'https://www.validcreditcardnumber.com/static/img/card-diners.gif'},
    {system: 'Discover', img: 'https://www.validcreditcardnumber.com/static/img/card-discover.gif'},
    {system: 'JCB', img: 'https://www.validcreditcardnumber.com/static/img/card-jcb.gif'},
    {system: 'МИР', img: './img/card-mir.gif'},
  ];

}