var app = new Vue({
    el: '#app',
    data: {
        title: 'Texto en html, v-once',
        content: 'Si se quiere enviar un dato de manera estatica en el DOM, se utiliza v-once',
        example_title: 'Cambiar la declaracion en consola: app.example_content = "excelente, se cambio!"',
        example_content: 'CAMBIANDO'
    }
});