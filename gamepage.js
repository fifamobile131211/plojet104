// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
var guess = (1)
// contagem de tentativas
// até acerto    
  if(x==y)
{
    alert("PARABENS!!!"+playername+",você acertou em" +guess+ "tentativa(s)! " ),
guess =1;

}

else if(x > y)
{
    guess++;
    alert("Opa,resposta errada!!!  tente um numero menor      ")
}
else 
{
    guess++;
    alert("Opa,resposta errada!!!  tente um numero maior      ")
}
function playagain()
{
    y = Math.floor(Math.random() * 10 + 1);
}
















// função para o número enviado pelo usuário
var x = document.getElementById("guessField").Value;