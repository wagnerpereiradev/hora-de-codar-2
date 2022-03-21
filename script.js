  /* 1. Escreva um programa em que o usuário informe dois números utilizando o "prompt".
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Então escreva em tela o maior deles. */

  function exercicio1() {
      var numbera = parseInt(prompt("1/2 - Digite um número abaixo:"));
      var numberb = parseInt(prompt("2/2 - Digite um número diferente abaixo:"));

      /* if (numbera < numberb) {
          alert("O número maior é " + numberb);
      };

      if (numberb < numbera) {
          alert("O número maior é " + numbera);
      };

      if (numberb == numbera) {
          alert("Os valores são iguais.");
      }; */

      if (numbera < numberb) {
          let div1 = document.querySelector("#ex1");
          div1.innerText = ("O número maior é " + numberb)
      }

      if (numberb < numbera) {
          let div1 = document.querySelector("#ex1");
          div1.innerText = ("O número maior é " + numbera)
      }

      if (numberb == numbera) {
          let div1 = document.querySelector("#ex1");
          div1.innerText = ("Os valores são iguais.")
      }

  }


  /* 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor
  informado é positivo, negativo ou zero. */

  function exercicio2() {
      var numbera1 = parseInt(prompt("1/1 - Digite um número, positivo, negativo ou zero:"))

      /* if (numbera1 < 0) {
          alert("O número " + numbera1 + " é negativo.");
      };

      if (numbera1 > 0) {
          alert("O número " + numbera1 + " é positivo.");
      };

      if (numbera1 == 0) {
          alert("O número informado é zero.");
      }; */

      if (numbera1 < 0) {
          let div2 = document.querySelector("#ex2");
          div2.innerText = ("O número " + numbera1 + " é negativo.")
      }

      if (numbera1 > 0) {
          let div2 = document.querySelector("#ex2");
          div2.innerText = ("O número " + numbera1 + " é positivo.")
      }

      if (numbera1 == 0) {
          let div2 = document.querySelector("#ex2");
          div2.innerText = ("O número informado é zero.")
      }
  }

  /* 3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais)
  e escrever o maior deles. */

  function exercicio3() {
      var numbera2 = parseInt(prompt("1/3 - Digite um número abaixo:"));
      var numberb2 = parseInt(prompt("2/3 - Digite um número diferente abaixo:"));
      var numberc2 = parseInt(prompt("3/3 - Digite outro número diferente abaixo:"));

      /* if (numbera2 > numberb2 && numbera2 > numberc2) {
          alert("O número " + numbera2 + " é o maior!")
      };

      if (numberb2 > numbera2 && numberb2 > numberc2) {
          alert("O número " + numberb2 + " é o maior!")
      };

      if (numberc2 > numbera2 && numberc2 > numberb2) {
          alert("O número " + numberc2 + " é o maior!")
      }; */

      if (numbera2 > numberb2 && numbera2 > numberc2) {
          let div3 = document.querySelector("#ex3");
          div3.innerText = ("O número " + numbera2 + " é o maior!")
      }

      if (numberb2 > numbera2 && numberb2 > numberc2) {
          let div3 = document.querySelector("#ex3");
          div3.innerText = ("O número " + numberb2 + " é o maior!")
      }

      if (numberc2 > numbera2 && numberc2 > numberb2) {
          let div3 = document.querySelector("#ex3");
          div3.innerText = ("O número " + numberc2 + " é o maior!")
      }
  }

  /* 4. Faça um programa que leia 3 valores (considere que não serão informados valores iguais)
  e escrever a soma dos 2 maiores. */

  function exercicio4() {
      var numbera3 = parseInt(prompt("1/3 - Digite um número abaixo:"));
      var numberb3 = parseInt(prompt("2/3 - Digite um número diferente abaixo:"));
      var numberc3 = parseInt(prompt("3/3 - Digite outro número diferente abaixo:"));

      /* if (numbera3 > numberc3 && numberb3 > numberc3) {
          alert("A soma dos dois maiores é " + (numbera3 + numberb3))
      }

      if (numberb3 > numbera3 && numberc3 > numbera3) {
          alert("A soma dos dois maiores é " + (numberb3 + numberc3))
      }

      if (numbera3 > numberb3 && numberc3 > numberb3) {
          alert("A soma dos dois maiores é " + (numbera3 + numberc3))
      } */

      if (numbera3 > numberc3 && numberb3 > numberc3) {
          let div4 = document.querySelector("#ex4");
          div4.innerText = ("A soma dos dois maiores é " + (numbera3 + numberb3))
      }

      if (numberb3 > numbera3 && numberc3 > numbera3) {
          let div4 = document.querySelector("#ex4");
          div4.innerText = ("A soma dos dois maiores é " + (numberb3 + numberc3))
      }

      if (numbera3 > numberb3 && numberc3 > numberb3) {
          let div4 = document.querySelector("#ex4");
          div4.innerText = ("A soma dos dois maiores é " + (numbera3 + numberc3))
      }


  }

  /* 5. Faça um programa que leia dois valores informados pelo usuário
  e exiba uma das três mensagens a seguir: ‘Números iguais’,
  caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro
  seja maior que o segundo; ‘Segundo maior’, caso o segundo seja
  maior que o primeiro. */

  function exercicio5() {
      var numbera4 = parseInt(prompt("1/2 - Digite um número qualquer abaixo:"));
      var numberb4 = parseInt(prompt("2/2 - Digite outro número qualquer abaixo:"));

      /* if (numbera4 == numberb4) {
          alert("Os números são iguais.")
      }

      if (numbera4 > numberb4) {
          alert("O primeiro é maior.")
      }

      if (numberb4 > numbera4) {
          alert("O segundo é maior.")
      } */

      if (numbera4 == numberb4) {
          let div5 = document.querySelector("#ex5");
          div5.innerText = ("Os números são iguais.")
      }

      if (numbera4 > numberb4) {
          let div5 = document.querySelector("#ex5");
          div5.innerText = ("O primeiro é maior.")
      }

      if (numberb4 > numbera4) {
          let div5 = document.querySelector("#ex5");
          div5.innerText = ("O segundo é maior.")
      }

  }

  /* 6. Faça um programa que leia 10 valores informados pelo usuário,
  calcule, exiba os números informados e escreva a média aritmética
  desses valores lidos. */

  function exercicio6() {
      var n1 = parseInt(prompt("1/10 - Digite um número qualquer abaixo:"));
      var n2 = parseInt(prompt("2/10 - Digite outro número qualquer abaixo:"));
      var n3 = parseInt(prompt("3/10 - Digite outro número qualquer abaixo:"));
      var n4 = parseInt(prompt("4/10 - Digite outro número qualquer abaixo:"));
      var n5 = parseInt(prompt("5/10 - Digite outro número qualquer abaixo:"));
      var n6 = parseInt(prompt("6/10 - Digite outro número qualquer abaixo:"));
      var n7 = parseInt(prompt("7/10 - Digite outro número qualquer abaixo:"));
      var n8 = parseInt(prompt("8/10 - Digite outro número qualquer abaixo:"));
      var n9 = parseInt(prompt("9/10 - Digite outro número qualquer abaixo:"));
      var n10 = parseInt(prompt("10/10 - Digite outro número qualquer abaixo:"));

      var media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10;

      let div6 = document.querySelector("#ex6");
      div6.innerText = ("Os números escolhidos foram: " + n1 + ", " + n2 + ", " + n3 + ", " + n4 +
          ", " + n5 + ", " + n6 + ", " + n7 + ", " + n8 + ", " + n9 + ", " + n10 +
          ". E a média aritimética é: " + media)
  }

  /* 7. Faça um programa que receba quatro valores informados pelo usuário, 
  mas informe somente o primeiro, o último e o maior de todos eles (considere
  que todos os números informados serão diferentes) */

  function exercicio7() {
      var numbera5 = parseInt(prompt("1/4 - Digite um número qualquer abaixo:"));
      var numberb5 = parseInt(prompt("2/4 - Digite outro número diferente abaixo:"));
      var numberc5 = parseInt(prompt("3/4 - Digite outro número diferente abaixo:"));
      var numberd5 = parseInt(prompt("4/4 - Digite outro número diferente abaixo:"));

      if (numbera5 > numberb5 && numbera5 > numberc5 && numbera5 > numberd5) {
          let div7 = document.querySelector("#ex7");
          div7.innerText = ("O primeiro número é " + numbera5 + ". O último é " + numberd5 + ". E o maior é " + numbera5)
      }

      if (numberb5 > numbera5 && numberb5 > numberc5 && numberb5 > numberd5) {
          let div7 = document.querySelector("#ex7");
          div7.innerText = ("O primeiro número é " + numbera5 + ". Oúltimo é " + numberd5 + ". E o maior é " + numberb5)
      }

      if (numberc5 > numbera5 && numberc5 > numberb5 && numberc5 > numberd5) {
          let div7 = document.querySelector("#ex7");
          div7.innerText = ("O primeiro número é " + numbera5 + ". O último é " + numberd5 + ". E o maior é " + numberc5)
      }

      if (numberd5 > numbera5 && numberd5 > numberb5 && numberd5 > numberc5) {
          let div7 = document.querySelector("#ex7");
          div7.innerText = ("O primeiro número é " + numbera5 + ". O último é " + numberd5 + ". E o maior é " + numberd5)
      }
  }

  /* 8. Faça um programa que leia 10 números informados pelo usuário e ao final
  da leitura escrever a soma total dos 10 números lidos. */

  function exercicio8() {
      var soma = 0;

      for (var i = 1; i < 11; i++) {
          var numero = parseInt(prompt(i + "/10 - " + "Digite um número qualquer:"))
          soma = numero + soma;

      }

      /* alert("A soma de todos os números é igual a " + soma) */

      let div8 = document.querySelector("#ex8");
      div8.innerText = ("A soma de todos os números é igual a " + soma)
  }

  /* 9. Faça um programa que leia 6 números que o usuário vai informar.
  Todos os números lidos com valor inferior a 72 devem ser somados.
  Escreva o valor final da soma efetuada e também todos valores que o usuário informou. */

  function exercicio9() {
      var numbera6 = parseInt(prompt("1/6 - Digite um número qualquer abaixo:"));
      var numberb6 = parseInt(prompt("2/6 - Digite outro número qualquer abaixo:"));
      var numberc6 = parseInt(prompt("3/6 - Digite outro número qualquer abaixo:"));
      var numberd6 = parseInt(prompt("4/6 - Digite outro número qualquer abaixo:"));
      var numbere6 = parseInt(prompt("5/6 - Digite outro número qualquer abaixo:"));
      var numberf6 = parseInt(prompt("6/6 - Digite outro número qualquer abaixo:"));

      if (numbera6 < 72) {
          var num1 = numbera6;
      } else {
          var num1 = 0
      }

      if (numberb6 < 72) {
          var num2 = numberb6;
      } else {
          var num2 = 0
      }

      if (numberc6 < 72) {
          var num3 = numberc6;
      } else {
          var num3 = 0
      }

      if (numberd6 < 72) {
          var num4 = numberd6;
      } else {
          var num4 = 0
      }

      if (numbere6 < 72) {
          var num5 = numbere6;
      } else {
          var num5 = 0
      }

      if (numberf6 < 72) {
          var num6 = numberf6;
      } else {
          var num6 = 0
      }

      var soma72 = num1 + num2 + num3 + num4 + num5 + num6;

      /* alert("Os números escolhidos foram: " + numbera6 + ", " + numberb6 + ", " + numberc6 + ", " + numberd6 +
          ", " + numbere6 + ", " + numberf6 + ". E a soma de todos que são inferior à '72' é " + soma72) */

      let div9 = document.querySelector("#ex9");
      div9.innerText = ("Os números escolhidos foram: " + numbera6 + ", " + numberb6 + ", " + numberc6 + ", " + numberd6 +
          ", " + numbere6 + ", " + numberf6 + ". E a soma de todos que são inferior à '72' é " + soma72)
  }

  /* 10. Escreva um programa que calcule a média de quatro números informados pelo usuário,
  mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média
  for maior que cinco o usuário receberá uma mensagem "Você passou no teste".
  Em qualquer outra situação, ele receberá uma mensagem de "tente novamente" */

  function exercicio10() {
      var numbera7 = parseInt(prompt("1/4 - Digite um número qualquer abaixo:"));
      var numberb7 = parseInt(prompt("2/4 - Digite outro número qualquer abaixo:"));
      var numberc7 = parseInt(prompt("3/4 - Digite outro número qualquer abaixo:"));
      var numberd7 = parseInt(prompt("4/4 - Digite outro número qualquer abaixo:"));

      if (numbera7 > 0 && numbera7 < 10) {
          var numb1 = numbera7;
      } else {
          var numb1 = 0
      }

      if (numberb7 > 0 && numberb7 < 10) {
          var numb2 = numberb7;
      } else {
          var numb2 = 0
      }

      if (numberc7 > 0 && numberc7 < 10) {
          var numb3 = numberc7;
      } else {
          var numb3 = 0
      }

      if (numberd7 > 0 && numberd7 < 10) {
          var numb4 = numberd7;
      } else {
          var numb4 = 0
      }

      var medianota = ((numb1 + numb2 + numb3 + numb4) / 4);

      /* if (medianota > 5) {
          alert("Eba! Você passou no teste 🥳")
      } else {
          alert("Não foi dessa vez. Tente novamente ☹️")
      } */

      if (medianota > 5) {
          let div10 = document.querySelector("#ex10");
          div10.innerText = ("Eba! Você passou no teste 🥳")
      } else {
          let div10 = document.querySelector("#ex10");
          div10.innerText = ("Não foi dessa vez. Tente novamente ☹️")
      }
  }

  /* 11 - Um motorista de táxi deseja calcular o rendimento de seu carro na praça.
  Sabendo-se que o preço do combustível é de R$ 2,90, escreva um programa para ler:
   a marcação do odômetro (Km) no início do dia, a marcação (Km) no final do dia,
   o número de litros de combustível gasto e o valor total (R$) recebido dos passageiros.
   Calcular e escrever: a média do consumo em Km/L e o lucro (líquido) do dia. */

  function exercicio11() {
      var fuelPrice = parseFloat(2.90);
      var start = parseFloat(prompt("Digite aqui a marcação inicial do odômetro (KM):"));
      var end = parseFloat(prompt("Digite aqui a marcação final do odômetro (KM):"));
      var fuelUsed = parseFloat(prompt("Digite aqui a quantidade de combustível gasta (L):"));
      var gain = parseFloat(prompt("Digite o valor total recebido dos passageiros (R$):"));

      /*alert("A média do consumo de combustível foi de " + ((end - start) / fuelUsed) +
          "km/l" + ". O lucro líquido do dia foi de R$" + (gain - (fuelUsed * fuelPrice)) + "."); */

      let div11 = document.querySelector("#ex11");
      div11.innerText = ("A média do consumo de combustível foi de " + ((end - start) / fuelUsed) +
          "km/l" + ". O lucro líquido do dia foi de R$" + (gain - (fuelUsed * fuelPrice)) + ".");
  }

  /* 12 - A equipe Mercedes deseja calcular o número mínimo de litros que deverá
  colocar no tanque de seu carro para que ele possa percorrer um determinado número
  de voltas até o primeiro reabastecimento. Escreva um programa que leia o comprimento
  da pista (em metros), o número total de voltas a serem percorridas no grande prêmio,
  o número de reabastecimentos desejados e o consumo de combustível do carro (em Km/L). 

  O programa deve calcular e exibir o número mínimo de litros necessários para percorrer
  até o primeiro reabastecimento. 
  Observação: considere que a quantidade de voltas entre os reabastecimentos é o mesmo,
  mas não poderá ser maior ou igual a 2. 

  O usuário deve informar a quantidade de quilômetros total do circuito e a quantidade
  de litros que o carro pode possuir. */

  function exercicio12() {
      var pista = parseInt(prompt("Comprimento da pista (M):"));
      var voltas = parseInt(prompt("Digite o número total de voltas a serem percorridas no grande prêmio:"));
      var reabastecimento = parseInt(prompt("Digite o número de reabastecimentos desejados"));
      var mediaConsumo = parseInt(prompt("Digite o consumo do carro (KM/L):"));

      var distanciaReabastecimento = ((pista * voltas) / reabastecimento);
      var minLitros = distanciaReabastecimento / mediaConsumo;

      /* alert("A quantidade mínima em litros necessários para percorrer até o primeiro reabastecimento é de " + minLitros + " litro(s) 🏎⛽️") */

      let div12 = document.querySelector("#ex12");
      div12.innerText = ("A quantidade mínima em litros necessários para percorrer até o primeiro reabastecimento é de " + minLitros + " litro(s) 🏎⛽️")
  }

  /* 13 - Escreva um programa para ler as notas das 4 avaliações de um aluno no semestre,
  calcular e escrever a média semestral e a seguinte mensagem: PARABÉNS! Você foi aprovado!
  Somente se o aluno foi aprovado (considere 6.0 a média mínima para aprovação e 4 notas informadas).

  14 - Acrescente ao exercício anterior a mensagem "Infelizmente, você foi reprovado!" caso a média
  calculada seja menor que 6.0.*/

  function exercicio1314() {
      var repeticao = 1;
      var somatoria = 0;

      while (repeticao <= 4) {
          somatoria = somatoria + parseFloat(prompt(repeticao + "/4 - Digite uma nota:"));
          repeticao++;
      }

      var mediaFinal = somatoria / 4;
      /* if (mediaFinal >= 6) {
          alert("PARABÉNS! Sua média é " + mediaFinal + ". Você foi aprovado(a)! 🥳");
      } else {
          alert("Tente novamente. Você foi reprovado ☹️")
      } */
      if (mediaFinal >= 6) {
          let div1314 = document.querySelector("#ex13-14");
          div1314.innerText = ("PARABÉNS! Sua média é " + mediaFinal + ". Você foi aprovado(a)! 🥳")
      } else {
          let div1314 = document.querySelector("#ex13-14");
          div1314.innerText = ("Tente novamente. Você foi reprovado ☹️")
      }
  }

  /* 15 - Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma
  mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o
  mês em que ela nasceu). */

  function exercicio15() {
      var nascimento = parseInt(prompt("1/1 - Digite aqui o ano que você nasceu (AAAA):"))
      var idadeParaVotar = 16;
      var anoAtual = 2022;
      var idadeUser = 2022 - nascimento;

      /* if (idadeUser >= idadeParaVotar) {
          alert("Este ano você já poderá votar ✔️")
      } else {
          alert("Você não poderá votar este ano ❌")
      } */

      if (idadeUser >= idadeParaVotar) {
          let div15 = document.querySelector("#ex15");
          div15.innerText = ("Este ano você já poderá votar ✔️")
      } else {
          let div15 = document.querySelector("#ex15");
          div15.innerText = ("Você não poderá votar este ano ❌")
      }
  }

  /* 16 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
  e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia
  o número de maçãs compradas (considere que o usuário informará a quantidade), 
  e calcule e escreva o valor total da compra. */

  function exercicio16() {
      var macaBuy = parseInt(prompt("Digite o número de maças que deseja comprar:"));

      var desc = macaBuy * 0.25;
      var semDesc = macaBuy * 0.30;

      /* if (macaBuy < 12) {
           alert("O tatal de maçãs compradas foi " + macaBuy + " maçãs. E o total ficou R$" + parseFloat(semDesc).toFixed(2) + " 🍎");
       }

       if (macaBuy >= 12) {
           alert("O tatal de maçãs compradas foi " + macaBuy + " maçãs. E o total ficou R$" + parseFloat(desc).toFixed(2) + " 🍎");
       } */

      if (macaBuy < 12) {
          let div = document.querySelector("#ex16");
          div.innerText = ("O tatal de maçãs compradas foi " + macaBuy + " maçãs. E o total ficou R$" + parseFloat(semDesc).toFixed(2) + " 🍎");
      }

      if (macaBuy >= 12) {
          let div16 = document.querySelector("#ex16");
          div16.innerText = ("O tatal de maçãs compradas foi " + macaBuy + " maçãs. E o total ficou R$" + parseFloat(desc).toFixed(2) + " 🍎");
      }
  }

  /* 17 - Escreva um programa que verifique a validade de uma senha fornecida pelo usuário.
  A senha válida é o número "1234" sem aspas. Devem ser impressas as seguintes mensagens:
  "ACESSO PERMITIDO" caso a senha seja válida. "ACESSO NEGADO" caso a senha seja inválida. */

  function exercicio17() {
      var password = 1234;

      var inputPassword = prompt("🔒| Digite a senha:");

      /* if (inputPassword == password) {
          alert("ACESSO PERMITIDO ✔️🔓")
      } else {
          alert("ACESSO NEGADO ❌🔒")
      } */

      if (inputPassword == password) {
          let div17 = document.querySelector("#ex17");
          div17.innerText = ("ACESSO PERMITIDO ✔️🔓")
      } else {
          let div17 = document.querySelector("#ex17");
          div17.innerText = ("ACESSO NEGADO ❌🔒")
      }
  }

  /* 18 - Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino
      2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal,
      utilizando as seguintes fórmulas: 

      Fórmula para cálculo:

      -para homens : (72.7 * h) - 58
      -para mulheres: (62.1 * h) - 44.7
      Observações: Altura = h (na fórmula acima) */


  function exercicio18() {

      var alturaf = parseFloat(prompt("👩| Se for mulher digite sua altura (ex:1.70). Caso contrário apenas digite 0:")).toFixed(2);
      var alturam = parseFloat(prompt("👨| Se for homem digite sua altura (ex:1.70). Caso contrário apenas digite 0:")).toFixed(2);

      var pesof = parseFloat(((62.1 * alturaf) - 44.7).toFixed(2));
      var pesom = parseFloat(((72.7 * alturam) - 58).toFixed(2));

      if (alturaf == "NaN" && alturam == "NaN") {
          let div18 = document.querySelector("#ex18");
          div18.innerText = ("Nenhum valor foi informado ☹️")
      } else {
          if (alturaf > 0) {
              let div18 = document.querySelector("#ex18");
              div18.innerText = ("Sua altura é " + alturaf + " e seu peso ideal médio é " + pesof + "kg.")
          } else {
              let div18 = document.querySelector("#ex18");
              div18.innerText = ("Sua altura é " + alturam + " e seu peso ideal médio é " + pesom + "kg.")
          }
      }
  }

  /* 19 - Escreva um programa para ler o número de gols marcados pelo Grêmio e o número
  de gols marcados pelo Inter em um GRENAL. Escrever o nome do vencedor. Caso não haja
  vencedor deverá ser impressa a palavra EMPATE. */

  function exercicio19() {
      var gremio = parseInt(prompt("⚽| Digite o número de gols marcados pelo Grêmio:"));
      var inter = parseInt(prompt("⚽| Digite o número de gols marcados pelo Inter:"));

      if (gremio > inter) {
          let div19 = document.querySelector("#ex19");
          div19.innerText = ("Grêmio é o vencedor!!! 🎉🎉🎉")
      } else {
          if (inter > gremio) {
              let div19 = document.querySelector("#ex19");
              div19.innerText = ("Inter é o vencedor!!! 🎉🎉🎉")
          } else {
              let div19 = document.querySelector("#ex19");
              div19.innerText = ("O jogo terminou em EMPATE!")
          }
      }

  }

  /* 20 - Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm).
  Calcular e imprimir o seguinte: 
  Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor do seu perímetro. 
  Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área. 
  Se o número de lados for igual a 5 escrever PENTÁGONO. 

  Observação: Considere que o usuário só informará os valores 3, 4 ou 5. 

  Caso o número de lados seja inferior a 3 escrever NÃO É UM POLÍGONO. 
  Caso o número de lados seja superior a 5 escrever POLÍGONO NÃO IDENTIFICADO. */

  function exercicio20() {
      var lados = parseInt(prompt("Digite o número de lados:"));

      if (lados == 3) {
          var medidaLados = parseInt(prompt("Digite a medida do lado (CM):"));
          let div20 = document.querySelector("#ex20");
          div20.innerText = ("TRIÂNGULO. E o valor de seu perímetro é de " + (medidaLados * lados));
      }

      if (lados == 4) {
          var medidaLados = parseInt(prompt("Digite a medida do lado (CM):"));
          let div20 = document.querySelector("#ex20");
          div20.innerText = ("QUADRADO. E o valor de sua área é de " + (medidaLados * medidaLados));
      }

      if (lados == 5) {
          var medidaLados = parseInt(prompt("Digite a medida do lado (CM):"));
          let div20 = document.querySelector("#ex20");
          div20.innerText = ("PENTÁGONO. E o valor de seu perímetro é de " + (medidaLados * lados));
      }

      if (lados > 5) {
          let div20 = document.querySelector("#ex20");
          div20.innerText = ("POLÍGONO NÃO IDENTIFICADO!");
      }

      if (lados < 3) {
          let div20 = document.querySelector("#ex20");
          div20.innerText = ("NÃO É UM POLÍGONO!");
      }


  }

  /* 21 - Escreva um programa que leia as notas das duas avaliações normais
  e a nota da avaliação optativa. Calcular a média do semestre considerando
  que a prova optativa substitui a nota mais baixa entre as duas primeiras avaliações.
  Escrever a média e mensagens que indiquem se o aluno foi aprovado, reprovado ou está
  em exame, de acordo com as informações abaixo: */

  function exercicio21() {


      var av1 = parseInt(prompt("Digite sua nota da primeira avaliação:"));
      var av2 = parseInt(prompt("Digite sua nota da segunda avaliação:"));
      var qst = prompt("Você realizou a avaliação optativa? (N/S) ou apenas deixe em branco:");

      var mediaNormal = (av1 + av2) / 2;

      if (qst == "n") {

          if (mediaNormal >= 6) {
              let div21 = document.querySelector("#ex21");
              div21.innerText = ("Sua média é " + mediaNormal + " e você foi APROVADO! 🥳🥳🥳")
          }



          if (mediaNormal < 3) {
              let div21 = document.querySelector("#ex21");
              div21.innerText = ("Sua média é " + mediaNormal + " e você foi REPROVADO. ☹️")
          }



          if (mediaNormal >= 3 && mediaNormal < 6) {
              let div21 = document.querySelector("#ex21");
              div21.innerText = ("Sua média é " + mediaNormal + " e você está em EXAME. 😀")
          }

      } else {

          var av4 = parseInt(prompt("Digite sua nota da avaliação optativa:"));

          if (av1 > av2) {
              var mediaOptativa = (av1 + av4) / 2;

              if (mediaOptativa >= 6) {
                  let div21 = document.querySelector("#ex21");
                  div21.innerText = ("Sua média é " + mediaOptativa + " e você foi APROVADO! 🥳🥳🥳")
              }

              if (mediaOptativa < 3) {
                  let div21 = document.querySelector("#ex21");
                  div21.innerText = ("Sua média é " + mediaOptativa + " e você foi REPROVADO. ☹️")
              }

              if (mediaOptativa >= 3 && mediaOptativa < 6) {
                  let div21 = document.querySelector("#ex21");
                  div21.innerText = ("Sua média é " + mediaOptativa + " e você está em EXAME. 😀")
              }
          }



          if (av2 > av1) {
              var mediaOptativa2 = (av2 + av4) / 2;

              if (mediaOptativa2 >= 6) {
                  let div21 = document.querySelector("#ex21");
                  div21.innerText = ("Sua média é " + mediaOptativa2 + " e você foi APROVADO! 🥳🥳🥳")
              }

              if (mediaOptativa2 < 3) {
                  let div21 = document.querySelector("#ex21");
                  div21.innerText = ("Sua média é " + mediaOptativa2 + " e você foi REPROVADO. ☹️")
              }

              if (mediaOptativa2 >= 3 && mediaOptativa < 6) {
                  let div21 = document.querySelector("#ex21");
                  div21.innerText = ("Sua média é " + mediaOptativa2 + " e você está em EXAME. 😀")
              }
          }
      }
  }

  /* 22. A Loja Remi du Fromage está com uma promoção onde cada capacete artesanal para tartaruga
  custa R$18.230 e pode ser pago em até 15 vezes sem juros. Crie um programa onde o usuário possa
  informar o valor parcelas que deseja pagar e exiba o valor de cada parcela. */

  function exercicio22() {
      var capacete = 18230;
      var numParcelas = parseInt(prompt("Digite o número de parcelas que deseja pagar:"));
      var valorParcelas = parseFloat(capacete / numParcelas).toFixed(2)

      let div22 = document.querySelector("#ex22");
      div22.innerText = ("Você escolheu pagar em " + numParcelas + " vezes. E o valor de cada parcela ficou R$" + valorParcelas)

  }

  /* 23 - Faça um programa em que o usuário informe 20 valores e no final, escreva o maior e o menor valor lido. */

  function exercicio23() {

      var maior = 1000;
      var menor = -1000;
      var checkMaior = 0;
      var checkMenor = 0;


      for (let contadorLoop = 1; contadorLoop < 21; contadorLoop++) {
          var num = parseInt(prompt(contadorLoop + "/20 - Digite um numero:"));

          var counta = num;

          if (counta > checkMaior) {
              checkMaior = num;
              maior = checkMaior;
          } else {
              if (checkMaior == 0) {
                  checkMaior = num;
              }
          }

          var countb = num;

          if (countb < checkMenor) {
              checkMenor = num;
              menor = checkMenor;
          } else {
              if (checkMenor == 0) {
                  checkMenor = num;
                  menor = checkMenor;
              }
          }
      }

      let div23 = document.querySelector("#ex23");
      div23.innerText = ("O maior é " + maior + ". E o menor é " + menor) + ".";


  }

  /* 24 - Um zoológico muito louco
  Escreva um programa que leia a idade de 2 javalis e 2 girafas (considere que a idade
      dos javalis será sempre diferente, assim como das girafas ). Calcule e escreva a
      soma das idades do javali mais velho com a girafa mais nova, e o produto das idades
      do javali mais novo com a girafa mais velha. */

  function exercicio24() {
      var javaliUm = parseInt(prompt("1/4 - Digite a idade do primeiro Javali:"));
      var javaliDois = parseInt(prompt("2/4 - Digite uma idade diferente para o segundo Javali:"));
      var girafaUm = parseInt(prompt("3/4 - Digite a idade da primeira Girafa:"));
      var girafaDois = parseInt(prompt("4/4 - Digite uma idade diferente para a segunda Girafa:"));

      if (javaliUm > javaliDois) {
          var javaliOld = javaliUm;
          var javaliNew = javaliDois;
      } else {
          var javaliOld = javaliDois;
          var javaliNew = javaliUm;
      }

      if (girafaUm > girafaDois) {
          var girafaOld = girafaUm;
          var girafaNew = girafaDois;
      } else {
          var girafaOld = girafaDois;
          var girafaNew = girafaUm;
      }

      let div24 = document.querySelector("#ex24");
      div24.innerText = ("A soma das idades do Javali mais velho com a Girafa mais nova é " + (javaliOld + girafaNew) + ". E o produto das idades do Javali mais novo com a Girafa mais velha é " + (javaliNew * girafaOld) + ".");
  }

  /* 25 - Uma micro calculadora
  Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das
  seguintes operações a serem
  executadas (codificada da seguinte forma: 1.Adição, 2.Subtração, 3.Divisão,
      4.Multiplicação).
  O programa deve calcular e escrever o resultado dessa operação sobre os dois
  valores lidos. Observação: Considere
  que só serão lidos os valores 1, 2, 3 ou 4 para as operações */

  function exercicio25() {

      var valora = parseInt(prompt("1/2 - Digite um valor qualquer:"));
      var valorb = parseInt(prompt("2/2 - Digite mais um valor qualquer:"));


      var operacao = parseInt(prompt("Escolha uma operação: 1 para soma; 2 para subtração; 3 para divisão; e 4 para multiplicação."));

      if (operacao == 1) {
          let div25 = document.querySelector("#ex25");
          div25.innerText = ("Resultado da soma: " + (valora + valorb));
      }

      if (operacao == 2) {
          let div25 = document.querySelector("#ex25");
          div25.innerText = ("Resultado da subtração: " + (valora - valorb));
      }

      if (operacao == 3) {
          let div25 = document.querySelector("#ex25");
          div25.innerText = ("Resultado da divisão: " + (valora / valorb));
      }

      if (operacao == 4) {
          let div25 = document.querySelector("#ex25");
          div25.innerText = ("Resultado da multiplicação: " + (valora * valorb));
      }
  }