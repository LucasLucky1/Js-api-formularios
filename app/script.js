// var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
// .then(resposta => resposta.json())
// .then(r => {
    
//         if (r.erro){
//             throw Error('Esse CEP não existe!')
//         }else
//             console.log(r)
// })
// .catch(erro=> console.log(erro))
// .finally(mensagemIndependente=>console.log('Vou aparecer de qlqr forma'))


async function buscaEndereco(){
    try{
        var consultaCep= await fetch('https://viacep.com.br/ws/01001000/json/');
        var consultaCepConvertida= await consultaCep.json();

        console.log(consultaCepConvertida)
    }catch(erro){
        console.log(erro)
    }
}
buscaEndereco()

