import { checkCardNumber, checkTrueCard } from '../codeFunctions';

test('should be false if card number wrong', () => {
  const cardNumber = '4556737586899854';
  const result = checkTrueCard(cardNumber);

  expect(result).toBe(false);
});

test('should be true if card number true', () => {
  const cardNumber = '4556737586899855';
  const result = checkTrueCard(cardNumber);

  expect(result).toBe(true);
});


test.each([
  ['Карта системы Visa', '4111111111111111'],
  ['Карта системы American Express', '371449635398431'],
  ['Карта системы Mastercard', '5555555555554444'],
  ['Карта системы Mastercard', '2221002028432941'],
  ['Карта системы Diners Club', '36874896502388'],
  ['Карта системы JCB', '3530111333300000'],
  ['Карта системы Discover Card', '6011111111111117'],
  ['Карта системы МИР', '2203589658742146'],
  ['Не удалось определить эмитента карты', '6762452434764955'],
  ['Неверный номер карты', '371449635398432']
])(
  ('System name "%s" must be detected with card number %i'),
  (reply, cardNo) => {
    const result = checkCardNumber(cardNo);
    expect(result.mess).toBe(reply);
  }
)

/*
    } else {
      result = false;
      mess = 'Не удалось определить эмитента карты';
    }
  } else {
    result = false;
    mess = 'Неверный номер карты'
*/


/*
test.each([
  [55, 'healthy'],
  [25, 'wounded'],
  [5, 'critical']
])(
  ('Health %i has result %s'),
  (health, rate) => {
    const result = healthRate({name: 'Маг', health});
    expect(result).toBe(rate);
  }
)
*/