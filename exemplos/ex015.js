let num = [5, 8, 2, 9, 3]

/*
num.push(1)
console.log(num)
let tam = num.length
console.log(`Tamanho do vetor ->${tam}`)
console.log(`${num.sort()}`)
*/

/*
for(let i = 0; i < 5; i++){
    console.log(`Numero ${i} : ${num[i]}`)
}
*/

//ou

/*
for(let i = 0; i < num.length; i++){
    console.log(`Numero ${i} : ${num[i]}`)
}
*/

for(let i in num){
    console.log(`Numero ${i} : ${num[i]}`)
}
console.log(num.indexOf(9))
