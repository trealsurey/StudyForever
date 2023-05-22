const obj = {
  name: "wbk",
  age: 18,
};

const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"

// map.forEach(val => {
//     console.log(val);
// })

// const keys = Object.keys(obj)
// keys.forEach(val => {
//     console.log(val);
// })

for (let val of map) {
  console.log(val);
}