module.exports = function solveEquation(equation) {
  let arr = equation.split(' '),
      a   = parseFloat(arr[0]),
      b   = parseFloat(arr[arr.lastIndexOf('*') - 2] + arr[arr.lastIndexOf('*') - 1]),
      c   = parseFloat(arr[arr.length - 2] + arr[arr.length - 1]),

      D   = Math.pow(b, 2) - 4 * a * c,
      x1  = Math.round((-b - Math.sqrt(D)) / (2 * a)),
      x2  = Math.round((-b + Math.sqrt(D)) / (2 * a));

  if(x1 > x2) {
    return [x2, x1];
  }
    return [x1,x2];
}