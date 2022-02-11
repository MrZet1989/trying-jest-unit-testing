// Вы получаете массив чисел, возвращаете сумму всех положительных.

// Пример [1,-4,7,12]=>1 + 7 + 12 = 20

// Примечание: если суммировать нечего, сумма по умолчанию равна 0.

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0) {
      sum = 0;
    } else if(arr[i] > 0){
      sum +=  arr[i]
    }
  }
  return sum;
}

const nativeNull = () => null;
module.exports = { positiveSum, nativeNull }
//console.log(positiveSum([-1,-2,-3,-4,-5]));
