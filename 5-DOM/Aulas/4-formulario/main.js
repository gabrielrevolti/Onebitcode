function pedido(ev){
    ev.preventDefault()
   const nome = document.querySelector('input[name="name"]').value
   const endereco = document.querySelector('input[name="address"]').value
   const tipoPao = document.querySelector('select[name="breadType"]').value
   const principal = document.querySelector('input[name="main"]').value
   const textBox = document.querySelector('textarea').value

   let salada = ''
   document.querySelectorAll('input[name="salad"]:checked').forEach(function(i){
   salada += `-${i.value}`
   })


   const confirmation = confirm(`Deseja adicionar os valores: 
   \nNome: ${nome}
   \nEndereço: ${endereco}
   \nTipo do pão: ${tipoPao}
   \nPrincipal: ${principal}
   \nSalada: ${salada}
   \nOBS: ${textBox}`)

   if(confirmation){
        const pedido = {
            nome: nome,
            endereço: endereco,
            tipoDoPao: tipoPao,
            principal: principal,
            salada: salada
            }
        console.log(pedido)    
   }
}

const form = document.getElementById('orderForm')
form.addEventListener('submit', pedido)