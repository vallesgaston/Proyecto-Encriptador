// *Encriptation star

var opcion = "";

function setOption(valor) {
  opcion = valor;
  var cifrar = document.getElementById("cifrar");
  var descifrar = document.getElementById("descifrar");
  if (valor === "cifrar") {
    cifrar.style.backgroundColor = "lightblue";
    descifrar.style.backgroundColor = "";
  } else if (valor === "descifrar") {
    cifrar.style.backgroundColor = "";
    descifrar.style.backgroundColor = "lightblue";
  }
  convertir();
}

function convertir() {
  var texto = document.getElementById("texto").value.toLowerCase();
  var resultado = "";

  texto = texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "");

  if (opcion === "cifrar") {
    for (var i = 0; i < texto.length; i++) {
      if (texto[i] === "e") {
        resultado += "enter";
      } else if (texto[i] === "i") {
        resultado += "imes";
      } else if (texto[i] === "a") {
        resultado += "ai";
      } else if (texto[i] === "o") {
        resultado += "ober";
      } else if (texto[i] === "u") {
        resultado += "ufat";
      } else {
        resultado += texto[i];
      }
    }
  } else if (opcion === "descifrar") {
    var i = 0;
    while (i < texto.length) {
      if (texto[i] === "e") {
        resultado += "e";
        i += 5;
      } else if (texto[i] === "i") {
        resultado += "i";
        i += 4;
      } else if (texto[i] === "a") {
        resultado += "a";
        i += 2;
      } else if (texto[i] === "o") {
        resultado += "o";
        i += 4;
      } else if (texto[i] === "u") {
        resultado += "u";
        i += 4;
      } else {
        resultado += texto[i];
        i++;
      }
    }
  }

  var copyButton = document.querySelector(".copy__button");
  copyButton.addEventListener("click", function () {
    var resultadoInput = document.getElementById("resultado");
    resultadoInput.select();
    document.execCommand("copy");
  });

  document.getElementById("resultado").value = resultado;

  // Agregar o quitar la clase "hide" según si hay texto en el elemento con el id "texto"
  var dollContainer = document.querySelector(".doll__container");
  var description1 = document.querySelector(".description__1");
  var description2 = document.querySelector(".description__2");
  var copyButtonContainer = document.querySelector(".copy__button__container");
  var textareaContainer = document.querySelector(".textarea__container");
  var textoInput = document.getElementById("texto");

  if (texto.trim() === "") {
    dollContainer.classList.remove("hide");
    description1.classList.remove("hide");
    description2.classList.remove("hide");
    copyButtonContainer.classList.add("hide");
    textareaContainer.classList.add("hide");
  } else {
    dollContainer.classList.add("hide");
    description1.classList.add("hide");
    description2.classList.add("hide");
    copyButtonContainer.classList.remove("hide");
    textareaContainer.classList.remove("hide");
    textoInput.classList.remove("hide");
  }
}

// Funcion para cambiar la propiedad display del elemento con la clase
// "doll__container" segun el tamaño del body y si hay texto para cifrar

function cambiarDisplayDollContainer() {
  const body = document.body;
  const dollContainer = document.querySelector(".doll__container");
  const texto = document.querySelector("#texto");

  if (body.offsetWidth > 1000 && !texto.value.trim()) {
    dollContainer.style.display = "block";
  } else {
    dollContainer.style.display = "none";
  }

  if (texto.value.trim()) {
    dollContainer.style.display = "none";
  }
}

window.addEventListener("resize", cambiarDisplayDollContainer);
texto.addEventListener("input", cambiarDisplayDollContainer);
