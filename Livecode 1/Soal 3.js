function addTitle (person1, person2, person3, person4) {
  const toArr = [person1, person2, person3, person4];
  let data = '';
  for (let i = 0; i < toArr.length; i++) {
    data += 'Mr. ' + toArr[i] + ', ';
  }
  return data;
}
​
console.log(addTitle('Steve Fox', 'Jin Kazama', 'Eddie Gordo', 'Geese Howard'));

