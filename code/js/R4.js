var el = new Vue({
  el: "#table",
  data: {
    //Creamos un array de usuario para almacenar los datos
    usuarios: [],
  },
  created() {
    //Se realiza la peticion a la url para obtener los datos
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.usuarios = json;
      });
  },
});
