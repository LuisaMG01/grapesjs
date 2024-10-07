const lang = {
  welcome: 'Bienvenido a',
  description: 'Este es un contenido de demostración de index.html. Para el desarrollo, no deberías editar este archivo. En su lugar, puedes copiar y renombrarlo a _index.html. En el próximo inicio del servidor, se servirá el nuevo archivo y será ignorado por git.'
};

document.querySelector('.welcome').textContent = lang.welcome;
document.querySelector('.description').textContent = lang.description;
