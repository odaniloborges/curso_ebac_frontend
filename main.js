const form = document.getElementById('form-numeros');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');

formEValido = false;


form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const mensagemSucesso = `O envio foi feito com sucesso! o Números digitados foram: primeiro campo (${numeroA.value}) e segundo campo (${numeroB.value})`;
  const containerMensagemSucesso = document.querySelector('.success-message');
  containerMensagemSucesso.innerHTML = mensagemSucesso;

  formEValido = numeroA.value < numeroB.value ? true : false;
  
  if (formEValido) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    numeroA.value = '';
    numeroB.value = '';  
    
  } else {
    numeroB.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  }

})
