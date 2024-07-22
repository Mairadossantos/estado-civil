let nome = prompt("Por favor, insira seu nome:");
let idade = prompt("Por favor, insira sua idade:");


let estadoCivilInput = prompt("Você é casado? (true/false):");
let estadoCivil = (estadoCivilInput.toLowerCase() === 'true');


console.log("Informações fornecidas:");
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Estado Civil: " + (estadoCivil ? "Casado" : "Solteiro"));
