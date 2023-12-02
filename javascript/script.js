
function contar(){
  // Manipulando os Elementos 
  let ini = document.getElementById("input_inicio")

  let fim = document.getElementById("input_fim")

  let passos = document.getElementById("input_passo")

  let result = document.getElementById("resultado")

  // Validações 
  if( ini.value.length == 0 || fim.value.length == 0){
    window.alert("[Erro] verifique os seus dados e tente novamente!")
  }else{
    result.innerHTML = "Contando ... <br>"
    // Variáveis que guarda os valores digitados do Usuário.
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passos.value)
    
    if( p <=0){
      window.alert("Passos inválidos. Considerando o valor de Passo para 1 ")
    p=1
    }
    //Laços de Repetições
    if(i<f){
      for (let c = i; c<=f; c=c+p){
        result.innerHTML += `${c} \u{1f449}`
      }
    }else{
      for(let c = i; c>=f; c=c-p){
        result.innerHTML += `${c} \u{1f449}`
      }
    }
    result.innerHTML += `🎉`
    
  }
}



