const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
  const nomeArray = nomeCompleto.split(' ');
  return nomeArray.length >= 2;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const numeroConta = document.getElementById('numero-conta');
  const valorDeposito = document.getElementById('valor-deposito');
  const mensagemSucesso = `Montante de <b>${valorDeposito.value}</b> reais, depositado com sucesso para o cliente: <b>${nomeBeneficiario.value}</b> - conta: ${numeroConta.value}!`;
  
  formEValido = validaNome(nomeBeneficiario.value);
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    nomeBeneficiario.value = '';
    numeroConta.value = '';
    valorDeposito.value = '';
  } else {
    nomeBeneficiario.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
  }
})

nomeBeneficiario.addEventListener('keyup', function(e) {
  console.log(e.target.value);
  formEValido = validaNome(e.target.value);

  if (!formEValido) {
    nomeBeneficiario.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    nomeBeneficiario.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
  }
});
