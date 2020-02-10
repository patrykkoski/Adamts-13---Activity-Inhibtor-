export const solveAbsorbation = (x1, y1, x2, y2, y) => {
  let a, b;
  if (x1 !== 0) {
    b = (x1 * y2 - y1 * x2) / (x1 - x2);
    a = (y1 - b) / x1;
  } else {
    if (y1 === 0) {
      a = y2 / x2;
      b = 0;
    } else {
      b = y1;
      a = (y2 - b) / x2;
    }
  }

  return (y - b) / a;
};

export const twoNearestPoints = (data, y) => {
  const xData = data.map(d => {
    return parseFloat(d.x);
  });
  let absorbationXValues, absorbationYValues;
  if (xData.includes(0)) {
    absorbationXValues = xData.slice();
    absorbationYValues = data.map(d => {
      return parseFloat(d.y);
    });
  } else {
    const dataWithZero = [{ x: 0, y: 0 }].concat(data);
    absorbationYValues = dataWithZero.map(d => {
      return parseFloat(d.y);
    });
    absorbationXValues = dataWithZero.map(d => {
      return parseFloat(d.x);
    });
  }
  let yArrWithZero = absorbationYValues.slice();
  let xArrWithZero = absorbationXValues.slice();
  // Jeśli wartość pacjenta występuje na wykresie
  if (yArrWithZero.includes(parseFloat(y))) {
    if (parseFloat(y) !== 0) {
      yArrWithZero.shift();
    }
    if (parseFloat(y) === 0) {
      return 0;
    }
    return data[yArrWithZero.indexOf(parseFloat(y))].x;
  }
  // Obliczenie wartości absorbancji pacjenta
  yArrWithZero.push(parseFloat(y));
  yArrWithZero.sort((a, b) => {
    return a - b;
  });
  let y1, y2, x1, x2;
  let yIndex = yArrWithZero.indexOf(parseFloat(y));
  if (yIndex === yArrWithZero.length - 1) {
    y1 = yArrWithZero[yArrWithZero.length - 3];
    y2 = yArrWithZero[yArrWithZero.length - 2];
  } else {
    y1 = yArrWithZero[yIndex - 1];
    y2 = yArrWithZero[yIndex + 1];
  }
  x1 = xArrWithZero[absorbationYValues.indexOf(y1)];
  x2 = xArrWithZero[absorbationYValues.indexOf(y2)];
  return solveAbsorbation(x1, y1, x2, y2, y);
};
