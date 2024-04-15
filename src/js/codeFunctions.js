export function checkCardNumber(num) {
  let result = false;
  let mess = '';
  let style = null;

  if (checkTrueCard(num)) {
    const substr2 = Number(num.substr(0,2));
    const substr4 = Number(num.substr(0,4));
    if (substr2 === 34 || substr2 === 37) {
      result = true;
      mess = 'Карта системы American Express';
      style = 'AmericanExpress';
    } else if (substr2 > 51 && substr2 < 56) {
      result = true;
      mess = 'Карта системы Mastercard';
      style = 'MasterCard';
    } else if (substr2 === 36) {
      result = true;
      mess = 'Карта системы Diners Club';
      style = 'DinersClub';
    } else if (substr4 >= 2200 && substr4 <= 2204) {
      result = true;
      mess = 'Карта системы МИР';
      style = 'MIR';
    } else if (substr4 > 2220 && substr4 < 2721) {
      result = true;
      mess = 'Карта системы Mastercard';
      style = 'MasterCard';
    } else if (Number(num.substr(0,1)) === 4) {
      result = true;
      mess = 'Карта системы Visa';
      style = 'Visa';
    } else if (substr4 >= 3528 && substr4 <= 3589) {
      result = true;
      mess = 'Карта системы JCB';
      style = 'JCB';
    } else if (substr4 === 6011 || substr2 === 65 || (Number(num.substr(0,3)) >= 644 && Number(num.substr(0,3)) <= 649)) {
      result = true;
      mess = 'Карта системы Discover Card';
      style = 'Discover';
    } else {
      result = false;
      mess = 'Не удалось определить эмитента карты';
    }
  } else {
    result = false;
    mess = 'Неверный номер карты'
  }
  return {result: result, mess: mess, style: style};
}

export function checkTrueCard(num) {
  const numS = num.toString();
  let sum = 0;
  const parity = (numS.length) % 2;
  for (let i = 0; i < numS.length; i += 1) {
    let digit = Number(numS[i]);
    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return Number(sum % 10) === 0;
}