Vue.component('card-content-basic', {
    props: ['title', 'content'],
    template: `<div class="card">
                    <h5 class="card-header">{{ title }}</h5>
                    <div class="card-body">
                        <p class="card-text">{{ content }}</p>
                    </div>
                </div>`,
});
var app = new Vue({
    el: '#app',
    data: {
        title: 'Creando una instancia',
        content: 'var app = new Vue({...});'
    }
});

// App-1
var data = {
    title: 'Datos y métodos',
    content: 'Contenido antiguo - Revisar Consola',
    newcontent: ''
};
// Object.freeze(data);
var app1 = new Vue({
    el: '#app-1',
    data: data,
    methods: {
        new_content: function () {
            this.content = (this.newcontent);
        }
    }
});
app1.$watch('content', function (newValue, oldValue) {
    console.log(
        `%c ${newValue} %c`,
        'background:#41b883; padding:1px; border-radius:3px; color:#fff',
        'background:transparent'
    );
    console.log(
        `%c ${oldValue} %c`,
        'background:#FF5733; padding:1px; border-radius:3px; color:#fff',
        'background:transparent'
    );
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        title: 'Ganchos del ciclo de vida de la instancia',
        content: '',
        button: 'Demo con Registro de Producto'
    },
    created: function () {
        console.log('title is: ' + this.title);
    },
    updated: function () {
        console.log(this.title);
    }
});