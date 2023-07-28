const btn = document.getElementById('btn')

btn.addEventListener('click',(e)=>{
  e.preventDefault()
  const nome = document.getElementById('nome').value
  const email = document.getElementById('email').value
  const telefone = document.getElementById('telefone').value
  const mensagem = document.getElementById('mensagem').value
  data = {
    nome,
    email,
    telefone,
    mensagem
  }
  enviarDados(data)
})
const enviarDados = async () =>{
  try {
    const dados = await axios.post('http://127.0.0.1:5000/send-email', data)
  console.log(dados)
    } catch (error) {
    console.error('Erro',error);
}
}

$(document).ready(function () {
  $('input[name=telefone]').mask('(00) 0 0000-0000')
})
