const unrepeated = (str) => [...new Set(str)].join('');

console.log(unrepeated("hello"))
