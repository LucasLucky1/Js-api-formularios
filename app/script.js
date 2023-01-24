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


async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('mensagemErro');
    mensagemErro.innerHTML='';
    try{
        var consultaCep= await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida= await consultaCep.json();
       
        if(consultaCepConvertida.erro){
            throw('CEP Inválido!')

        }
        var cidade = document.getElementById('cidade');
        var endereco = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCepConvertida.localidade;
        endereco.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;


        console.log(consultaCepConvertida)
        return consultaCepConvertida
    }catch(erro){
        console.log(erro);
        mensagemErro.innerHTML='<p> Cep Inválido! </p>';
    }
}


var cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=> {buscaEndereco(cep.value)})
