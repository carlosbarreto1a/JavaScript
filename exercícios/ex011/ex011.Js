 var idade = 22                                
    console.log(`Voce tem ${idade} anos.`)
  if (idade < 16) {                           
    console.log('Não vota')                    
  } else if (idade < 18 || idade > 65) {       
    console.log('Voto opcional')                           
} else {                                       
    console.log('Voto obrigatório')            
  }                                 





/* Aqui, a variável idade é criada e atribuída o valor 22. Isso significa que o código vai    considerar que a pessoa tem 22 anos. */

/* O console.log() é usado para imprimir informações no console do navegador ou ambiente de desenvolvimento. A sintaxe ${idade} dentro da string é um recurso do JavaScript chamado template literals, que permite incluir o valor de variáveis diretamente na string. O resultado será: Copiar código */
 


/* Estrutura condicional if:   if (idade < 16) { console.log('Não vota');}
Este bloco if verifica se a idade da pessoa é menor que 16. Se a condição for verdadeira, o código executa o comando dentro das chaves. */


 
/* O else if verifica se a idade é menor que 18 ou maior que 65. Ou seja, se a pessoa tem entre 16 e 17 anos, ou acima de 65 anos, o voto é opcional.
No caso da idade ser 22, este bloco não será executado, pois a condição idade < 18 || idade > 65 não é verdadeira para 22 anos.*/

/* Bloco else final:  O else é executado caso nenhuma das condições anteriores seja verdadeira. Ou seja, se a idade for 18 ou mais e menor ou igual a 65, o voto é obrigatório.
Para a pessoa de 22 anos, que se enquadra nesse caso, o resultado será: 
"Voto obrigatório"                                                                      

                                                                               

/*Resumo do que acontece com idade = 22:
O console imprime "Você tem 22 anos."
A condição idade < 16 é falsa, então o código não entra no primeiro if.
A condição idade < 18 || idade > 65 também é falsa, então o código não entra no else if.
Como nenhuma das condições anteriores foi atendida, o código entra no else, e imprime "Voto obrigatório".
O fluxo de execução para uma idade de 22 anos seria:

                                                                            