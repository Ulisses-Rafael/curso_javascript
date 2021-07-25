let num = [5,8,2,9,3]

console.log(`O nosso vetor é ${num}`)
console.log(num)

/*Como acrescentar número dentro do vetor?
let num1 = [5,8,4]
num1[3] = 6
console.log(num1)

acrescentar no final do vetor mais um elemento
num1.push(7)
console.log(num1)

Como saber o comprimento do vetor?
res=num1.length
console.log(res)

Método sort() coloca em ordem crescente
num1.sort()
console.log(num1)

num.sort()
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição: ${pos}`)*/

let pos = num.indexOf(3)
if (pos== -1) {
    console.log('O valor não foi encontrado dentro do vetor')
}else {
    console.log(`O valor 8 está na posição: ${pos}`)
}