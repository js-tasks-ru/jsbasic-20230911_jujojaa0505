function factorial(n) {
  let result = 1;
  if (n > 1) {
      for (i = n; i > 0; i--) {
          result *= i;
      }
  } return result;
}
