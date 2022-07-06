const account1 = document.querySelector(".container-account1"); // CONTAINER DO LOGIN
const account2 = document.querySelector(".container-account2"); // CONTAINER DO CRIAR UMA CONTA
const passwordIcon = document.querySelectorAll(".btnEye"); // ÍCONE DA SENHA DE LOGIN E SENHA DE CADASTRO
const passwordIconConfirm = document.querySelector(".btnEyeC"); // ÍCONE DA SENHA DE CONFIRMAÇÃO
const linkToCreate = document.querySelector(".link-account"); // LINK DO "NÃO TENHO UMA CONTA"
const backToLogin = document.querySelector(".back_to_login"); // ÍCONE PARA VOLTAR A PÁGINA DE LOGIN
const passwordText = document.querySelector(".criarSenha"); // INPUT DA SENHA DE CADASTRO
const passwordTextConfirm = document.querySelector(".senhaC"); // INPUT DA CONFIRMAÇÃO DE SENHA DE CADASTRO

// REVELAR SENHA NO "LOGIN" E EM "CRIAR CONTA" + TROCAR POR OLHO ABERTO

passwordIcon.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let OpenEye = eyeIcon.parentElement.querySelectorAll(".senha");
    OpenEye.forEach((senha) => {
      if (senha.type === "password") {
        senha.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      } else {
        senha.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      }
    });
  });
});

// REVELAR SENHA EM "CONFIRMAR SENHA" + TROCAR POR OLHO ABERTO

passwordIconConfirm.addEventListener("click", () => {
  let confirmPassword = document.querySelector(".senhaC");
  let iconConfirm = document.querySelector(".btnEyeC");
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    iconConfirm.classList.replace("bx-hide", "bx-show");
    return;
  } else {
    confirmPassword.type = "password";
    iconConfirm.classList.replace("bx-show", "bx-hide");
  }
});

// TROCAR DE "LOGIN" PARA "CRIAR UMA CONTA" AO CLICAR NO LINK DE "CRIAR CONTA"

linkToCreate.addEventListener("click", () => {
  if (account1.style.display === "block") {
    account1.style.display = "none";
    account2.style.position = "relative";
    account2.style.display = "block";
  } else {
    account1.style.display = "block";
    account2.style.display = "none";
  }
});

// SAIR DA TELA DE "CRIAR CONTA" E VOLTAR A TELA DE "LOGIN"

backToLogin.addEventListener("click", () => {
  if (account2.style.display === "block") {
    account2.style.display = "none";
    account1.style.display = "block";
  } else {
    account2.style.display = "block";
    account1.style.display = "none";
  }
});

// "SENHA" IDÊNTICA AO "CONFIRMAR SENHA"

function validatePassword() {
  if (passwordText.value != passwordTextConfirm.value) {
    passwordTextConfirm.setCustomValidity("Senhas Diferentes!");
  } else {
    passwordTextConfirm.setCustomValidity("");
  }
}

passwordText.onchange = validatePassword;
passwordTextConfirm.onkeyup = validatePassword;
