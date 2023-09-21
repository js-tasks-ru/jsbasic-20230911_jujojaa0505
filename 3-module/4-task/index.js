// Сначала написала так, но подумала что слишком длинная строка и читать будет неудобно:
//   function showSalary(users, age) {
//   return users.reduce((str, user, index) => user.age > age ? str : index === 0 ? `${user.name}, ${user.balance}` : str + '\n' + user.name + ', ' + user.balance, '');
//   }
function showSalary(users, age) {
  return users.reduce((str, user, index) => {
    if (user.age > age) {
      return str;
    } else if (index === 0) {
      return `${user.name}, ${user.balance}`;
    } 
      return str + '\n' + user.name + ', ' + user.balance;
  }, '')
}