function validarDataHora() {
  var inputNome = encodeURIComponent(document.getElementById('text_nome').value);
  var inputAparelho = encodeURIComponent(document.getElementById('text_aparelho').value);
  var inputMarca = encodeURIComponent(document.getElementById('text_marca').value);
  var inputProblema = encodeURIComponent(document.getElementById('text_problema').value);

  if (inputNome === "" || inputAparelho === "" || inputMarca === "" || inputProblema === "") {
    alert("Preencha todos os campos");
    return false;
  }

  var apiLink = "https://api.whatsapp.com/send?phone=5512996850827&text=Olá, gostaria de fazer um orçamento%0A*Nome:*%20" + inputNome + "%0A*Aparelho:*%20" + inputAparelho + "%0A*Marca:*%20" + inputMarca + "%0A*Problema:*%20" + inputProblema;
  document.getElementById('apiLink').href = apiLink;

  document.getElementById('text_nome').value = '';
  document.getElementById('text_aparelho').value = '';
  document.getElementById('text_marca').value = '';
  document.getElementById('text_problema').value = '';
  
  return true;
}

document.getElementById('apiLink').addEventListener('click', function (event) {
  if (!validarDataHora()) {
    event.preventDefault();
  }
});