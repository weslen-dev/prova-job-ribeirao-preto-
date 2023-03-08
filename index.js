// 1 questão ?
// O valor de INDICE é 13, portanto, o laço irá executar 13 vezes, somando os valores de 1 a 13 na variável SOMA.

// Sendo assim, o valor da variável SOMA ao final do processamento será:

// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 = 91

// Portanto, o valor de SOMA será(91).

// 2 questão ? 
function fibonacci(n) {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n-1) + fibonacci(n-2);
    }
  }
  
  let numero = prompt("Digite um número inteiro:");
  
  let pertence = false;
  
  for (let i = 0; i <= numero; i++) {
    if (fibonacci(i) === parseInt(numero)) {
      pertence = true;
      break;
    }
  }
  
  if (pertence) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
  
// 3 questão ?
//a) 9 (a lógica é somar 2 ao número anterior)

//b) 128 (a lógica é multiplicar por 2 o número anterior)

//c) 49 (a lógica é elevar ao quadrado o índice do número e subtrair por 1)

//d) 100 (a lógica é elevar ao quadrado o número ímpar seguinte e subtrair por 4)

//e) 13 (a lógica é somar os dois números anteriores)

//f) 20 (a lógica é somar a diferença entre o número anterior e o anterior a ele mesmo, começando com 2)7

// 4 questão ?
//Para resolver este problema, precisamos encontrar o tempo que levará para os dois veículos se encontrarem na rodovia e, em seguida, calcular a distância percorrida por cada um até o ponto de encontro. Como a distância entre Ribeirão Preto e Franca é de 100 km, podemos considerar que o ponto de encontro está a 50 km de cada cidade.

//Podemos usar a fórmula d = v * t para calcular a distância percorrida por cada veículo até o ponto de encontro, onde d é a distância percorrida, v é a velocidade e t é o tempo.

//Para o carro:
//d = 110 * t

//Para o caminhão:
//d = 80 * (t + 0.083) + 80 * (t + 0.167)

//O caminhão leva 5 minutos a mais para passar em cada pedágio, então adicionamos 5 minutos convertidos em horas (0.083) e dobramos essa distância, uma vez que ele passa em dois pedágios.

//Agora, podemos igualar as duas equações para encontrar o tempo de encontro:

//110t = 80(t + 0.083) + 80(t + 0.167)

//110t = 160t + 22.68

//50t = 22.68

//t = 0.4536 horas

//Agora podemos usar essa informação para calcular as distâncias percorridas por cada veículo até o ponto de encontro:

//Para o carro:
//d = 110 * 0.4536 = 49.896 km

//Para o caminhão:
//d = 80 * (0.4536 + 0.083) + 80 * (0.4536 + 0.167) = 50.104 km

//Portanto, o caminhão estará mais próximo de Ribeirão Preto, já que percorreu 50.104 km até o ponto de encontro, enquanto o carro percorreu 49.896 km

// letra a ?
let entrada = prompt("Digite uma palavra:");

let invertida = "";

for (let i = entrada.length - 1; i >= 0; i--) {
 invertida += entrada[i];
  }

console.log(`A palavra invertida é: ${invertida}`);

// letra b ?
let entrada = prompt("Digite uma palavra:");

let invertida = "";

for (let i = entrada.length - 1; i >= 0; i--) {
  invertida += entrada[i];
}

console.log(`A palavra invertida é: ${invertida}`);
