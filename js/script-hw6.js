const filterBy = (arr, dataType) => {
    return arr.filter((el) => typeof el !== dataType)
};

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));
console.log(filterBy([3, 'world', 23, '23', null], 'number'));