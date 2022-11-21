import fetch from 'node-fetch'

function getObjectFromUrl (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.text())
      .then(text => resolve(JSON.parse(text)))
      .catch(error => reject(error))
  })
}

function getTodos (id) {
  return new Promise((resolve, reject) => {
    getObjectFromUrl(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(object => resolve(object))
  })
}

function main () {
  getTodos(3)
    .then(item => console.log(item))
}

main()