function pipesInPool(input) {
  //     •	Първият ред съдържа числото V – Обем на басейна в литри – цяло число в интервала [1…10000].
  // •	Вторият ред съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1…5000].
  // •	Третият ред съдържа числото P2 – дебит на втората тръба за час– цяло число в интервала [1…5000].
  // •	Четвъртият ред съдържа числото H – часовете които работникът отсъства – реално число в интервала [1.0…24.00]

  const poolV = Number(input[0]);
  const tube1PerHour = Number(input[1]);
  const tube2PerHour = Number(input[2]);
  const hourOfAbscence = Number(input[3]);

  let poolAfterSomeTime = (tube1PerHour + tube2PerHour) * hourOfAbscence;

  //   Да се отпечата на конзолата едно от двете възможни състояния:
  // •	До колко се е запълнил басейна и коя тръба с колко процента е допринесла.
  // o	"The pool is {запълненост на басейна в проценти}% full. Pipe 1: {процент вода от първата тръба}%. Pipe 2: {процент вода от втората тръба}%."
  // Aко басейнът се е препълнил – с колко литра е прелял за даденото време.
  // o	"For {часовете, които тръбите са пълнили вода} hours the pool overflows with {литрите вода в повече} liters."

  if (poolAfterSomeTime > poolV) {
    console.log(
      `For ${hourOfAbscence} hours the pool overflows with ${(
        poolAfterSomeTime - poolV
      ).toFixed(2)} liters.`
    );
  } else {
    console.log(`The pool is ${((poolAfterSomeTime / poolV) * 100).toFixed(
      2
    )}% full.
       Pipe 1: ${(
         ((tube1PerHour * hourOfAbscence) / poolAfterSomeTime) *
         100
       ).toFixed(2)}%. 
       Pipe 2: ${(
         ((tube2PerHour * hourOfAbscence) / poolAfterSomeTime) *
         100
       ).toFixed(2)}%`);
  }
}

pipesInPool(['1000', '100', '120', '3']);
