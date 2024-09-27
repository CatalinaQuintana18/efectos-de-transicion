const leerMasButton = document.querySelector('.leer-mas');
const textoAdicional = document.querySelector('.texto-adicional');

leerMasButton.addEventListener('click', () => {
	if (textoAdicional.style.display === 'block') {
		textoAdicional.style.display = 'none';
		leerMasButton.textContent = 'Leer más';
	} else {
		textoAdicional.style.display = 'block';
		leerMasButton.textContent = 'Ocultar';
	}
});
let imagenes = document.querySelectorAll('.slider img');
let indice = 0;

imagenes[indice].classList.add('activo');

document.querySelector('.anterior').addEventListener('click', () => {
  imagenes[indice].classList.remove('activo');
  indice--;
  if (indice < 0) {
    indice = imagenes.length - 1;
  }
  imagenes[indice].classList.add('activo');
});

document.querySelector('.siguiente').addEventListener('click', () => {
  imagenes[indice].classList.remove('activo');
  indice++;
  if (indice >= imagenes.length) {
    indice = 0;
  }
  imagenes[indice].classList.add('activo');
});