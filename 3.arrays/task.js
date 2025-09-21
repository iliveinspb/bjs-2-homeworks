function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((element, index) => element === arr2[index])
  );
}

function getUsersNamesInAgeRange(users, gender) {
  let userAges = users
    .filter((user) => user.gender === gender)
    .map((user) => user.age);

  if (userAges.length === 0) {
    return 0;
  }

  const sum = userAges.reduce(function (acc, age) {
    return acc + age;
  }, 0);
  return sum / userAges.length;
}
