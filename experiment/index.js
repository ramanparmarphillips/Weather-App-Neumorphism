// let one = document.getElementById('1')
// let two = document.getElementById('2')
// let three = document.getElementById('3')
// let four = document.getElementById('4')
// let five = document.getElementById('5')

// let input = document.getElementById('input')

// let options = {
//     method: 'GET',
//     headers: { 'X-Api-Key': 'AIHeZQUtYwS4DUw3DQLJug==aU56gxfYhsQryj3h' },
// }


// async function fetchData(city) {
//     let url = `https://api.api-ninjas.com/v1/city?name=${city}&limit=5`
//     let response = await fetch(url, options)
//     let info = await response.json()
//     console.log(info)
//     let city1 = info[0].name + ", " + info[0].country
//     one.innerText = city1
//     let city2 = info[1].name + ", " + info[1].country
//     two.innerText = city2
//     let city3 = info[2].name + ", " + info[2].country
//     three.innerText = city3
//     let city4 = info[3].name + ", " + info[3].country
//     four.innerText = city4
//     let city5 = info[4].name + ", " + info[4].country
//     five.innerText = city5
//     one.dataset.option = info[0].name
//     two.dataset.option = info[1].name
//     three.dataset.option = info[2].name
//     four.dataset.option = info[3].name
//     five.dataset.option = info[4].name
// }

// input.addEventListener('keyup', async (e) => {
//     if (e.key === 'Enter') {
//         let name = input.value
//         input.value = ''
//         fetchData(name)
//     }
// })

// one.addEventListener('click', () => {
//     let city = one.dataset.option
//     fetchData(city)
// })

// two.addEventListener('click', () => {
//     let city = two.dataset.option
//     fetchData(city)
// })

// three.addEventListener('click', () => {
//     let city = three.dataset.option
//     fetchData(city)
// })

// four.addEventListener('click', () => {
//     let city = four.dataset.option
//     fetchData(city)
// })

// five.addEventListener('click', () => {
//     let city = five.dataset.option
//     fetchData(city)
// })

// document.addEventListener('click', (e) => {
//     console.dir(e.target)
// })

//====================== V2 ==============================


// let one = document.getElementById('1')
// let two = document.getElementById('2')
// let three = document.getElementById('3')
// let four = document.getElementById('4')
// let five = document.getElementById('5')

// let input = document.getElementById('input')

// let options = {
//     method: 'GET',
//     headers: { 'X-Api-Key': 'AIHeZQUtYwS4DUw3DQLJug==aU56gxfYhsQryj3h' },
// }


// async function fetchData(city) {
//     let url = `https://api.api-ninjas.com/v1/city?name=${city}&limit=5`
//     let response = await fetch(url, options)
//     let info = await response.json()
//     console.log(info)
//     let city1 = info[0].name + ", " + info[0].country
//     one.innerText = city1
//     let city2 = info[1].name + ", " + info[1].country
//     two.innerText = city2
//     let city3 = info[2].name + ", " + info[2].country
//     three.innerText = city3
//     let city4 = info[3].name + ", " + info[3].country
//     four.innerText = city4
//     let city5 = info[4].name + ", " + info[4].country
//     five.innerText = city5
//     one.dataset.option = info[0].name
//     two.dataset.option = info[1].name
//     three.dataset.option = info[2].name
//     four.dataset.option = info[3].name
//     five.dataset.option = info[4].name
// }

// fetchData('London') // Default value on page load

// one.addEventListener('click', () => {
//     let city = one.dataset.option
//     fetchData(city)
// })

// two.addEventListener('click', () => {
//     let city = two.dataset.option
//     fetchData(city)
// })

// three.addEventListener('click', () => {
//     let city = three.dataset.option
//     fetchData(city)
// })

// four.addEventListener('click', () => {
//     let city = four.dataset.option
//     fetchData(city)
// })

// five.addEventListener('click', () => {
//     let city = five.dataset.option
//     fetchData(city)
// })

// document.addEventListener('click', (e) => {
//     console.dir(e.target)
// })



//====================== V1 ==============================


let one   = document.getElementById('1')
let two   = document.getElementById('2')
let three = document.getElementById('3')
let four  = document.getElementById('4')
let five  = document.getElementById('5')

let input = document.getElementById('input')

let options = {
    method: 'GET',
    headers: { 'X-Api-Key': 'AIHeZQUtYwS4DUw3DQLJug==aU56gxfYhsQryj3h' },
}

let name 

five.addEventListener('click', (e) => {
    let newName = e.target.dataset.option
    name = newName
    console.log(name)
    console.log(newName)

    input.value = newName
    fetchData()
})

async function fetchData() {
    let name = input.value
    input.value = ''
    let url = `https://api.api-ninjas.com/v1/city?name=${name}&limit=5`
    let response = await fetch(url, options)
    let info = await response.json()
    console.log(info)
    let city1 = info[0].name + ", " + info[0].country
    one.innerText = city1
    let city2 = info[1].name + ", " + info[1].country
    one.innerText = city2
    let city3 = info[2].name + ", " + info[2].country
    one.innerText = city3
    let city4 = info[3].name + ", " + info[3].country
    one.innerText = city4
    let city5 = info[4].name + ", " + info[4].country
    one.innerText = city1
    two.innerText = city2
    three.innerText = city3
    four.innerText = city4
    five.innerText = city5
    one.dataset.option = info[0].name
    two.dataset.option = info[1].name
    three.dataset.option = info[2].name
    four.dataset.option = info[3].name
    five.dataset.option = info[4].name
}

fetchData()
