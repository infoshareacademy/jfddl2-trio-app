var data = require('./public/data/MOCK_DATA.json')

console.log(JSON.stringify(data.reduce((result, next) => ({...result, [next.id]: next }), {})))