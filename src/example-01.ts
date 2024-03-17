function sumOfTwoNumbers( firstNumber: number, secondNumber: number ): number{
    return firstNumber + secondNumber;
}

const numberA: number = 5;
const numberB: number = 15;

const result = sumOfTwoNumbers(numberA, numberB);

console.log(`The sum of values (${numberA}, ${numberB}) is: ${result}`);

function greetUser(username) {
    console.log(`Hello, ${username}! Welcome.`);
}

const username = "Gualberto";

greetUser(username);

function createPerson(name: string, ci: string, email: string): { name: string, ci: string, email: string } {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const person = createPerson("Gualberto Colque", "1234567890", "gualberto@gmail.com");
console.log(person);

const emailList = [
    "javascript@gmail.com", 
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
  ];

const validEmails = emailList.filter(email => {
  // Verificar si el email contiene '@' y termina con '.com'
  return email.includes('@') && email.endsWith('.com');
});

console.log(validEmails);