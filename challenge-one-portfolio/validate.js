document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');
    const botaoEnviar = document.querySelector('.formcontato__botao');

    botaoEnviar.addEventListener('click', function(event) {
        event.preventDefault();

        let valid = true;

        // Resetando mensagens de erro
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());

        // Validação do nome
        if (nome.value.trim() === '') {
            valid = false;
            mostrarErro(nome, 'O campo nome é obrigatório.');
        }

        // Validação do email
        if (email.value.trim() === '') {
            valid = false;
            mostrarErro(email, 'O campo email é obrigatório.');
        } else if (!validarEmail(email.value.trim())) {
            valid = false;
            mostrarErro(email, 'Por favor, insira um endereço de email válido.');
        }

        // Validação do assunto
        if (assunto.value.trim() === '') {
            valid = false;
            mostrarErro(assunto, 'O campo assunto é obrigatório.');
        }

        // Validação da mensagem
        if (mensagem.value.trim() === '') {
            valid = false;
            mostrarErro(mensagem, 'O campo mensagem é obrigatório.');
        }

        if (valid) {
            alert('Formulário enviado com sucesso!');
            form.submit();
        }
    });

    function mostrarErro(elemento, mensagem) {
        const error = document.createElement('span');
        error.classList.add('error-message');
        error.style.color = 'red';
        error.innerText = mensagem;
        elemento.parentNode.insertBefore(error, elemento.nextSibling);
    }

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
