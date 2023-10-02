
function showSalary(users, age) {
  return users
  .filter(user => user.age <= age)
  .map(user => {
    return [user.name, user.balance].join(', ')
  })
  .join('\n');
}