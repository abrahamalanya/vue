var linkview = new Vue({
    el: '#link-view',
    data: {
        links: [
            {
                prefix: 'introduccion',
                route: './index.html'
            },
            {
                prefix: 'instancia',
                route: './instancia/index.html'
            }
        ]
    }
});
var app = new Vue({
    el: '#app',
    data: {
        title: 'Iniciando con vue.js',
        message: 'Bienvenido a Naturemarket 👌'
    }
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        title: 'Conociendo directivas: v-bind y sus atributos',
        content: 'Colocar el mouse encima 🖱',
        message: 'Esto es un ejemplo de v-bind, con el atributo title'
    }
});
var app3 = new Vue({
    el: '#app-3',
    data: {
        title: 'Condicionales y bucles',
        message: 'Desaparece si es false 👽',
        view: true
    }
});
var app4 = new Vue({
    el: '#app-4',
    data: {
        title: 'Directiva: v-for ( array / array to array )',
        modules: ['Mod. Comisiones', 'Mod. Ventas', 'Mod. Reportes'],
        detail_module: [
            {
                name_module: 'Mod. Comisiones',
                detail: ['Crear Lineas', 'Crear Cuota', 'Asignar Cuota']
            },
            {
                name_module: 'Mod. Ventas',
                detail: ['Registrar Venta', 'Confirmar Venta', 'Emitir Comprobante']
            },
            {
                name_module: 'Mod. Reportes',
                detail: ['Seleccionar Filtro', 'Exportar Excel']
            }
        ]
    }
});
var app5 = new Vue({
    el: '#app-5',
    data: {
        title: 'Uso de eventos, directiva: v-on, atributo: click',
        title_button: 'Click para el mensaje Inverso 👽'
    },
    methods: {
        click_message: function () {
            this.title = this.title.split('').reverse().join('');
        },
        change_message: function () {
            console.log(
                `%c ${this.title} %c`,
                'background:#35495e; padding:1px; border-radius:3px; color:#fff',
                'background:transparent'
            );
        }
    }
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        title: 'Mensaje al instante, directiva: v-model',
        message: 'Cambia este texto, insofacto! 😱'
    }
});

// create component
Vue.component('app-card', {
    props: ['user'],
    template: `<div class="card">
                    <app-image :src="user.photo" :alt="user.name"></app-image>
                    <div class="card-body">
                        <h5 class="card-title">{{ user.name }}</h5>
                        <p class="card-text">{{user.description}}</p>
                        <p class="card-text">
                            <small class="text-muted">{{ user.conection }}</small>
                        </p>
                    </div>
                </div>`,
});
Vue.component('app-image', {
    template: '<img src="" class="card-img-top" style="width:50px" alt="">'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        title: "Creando Componentes, Vue.component('name',{})",
        users: [
            {
                id: 0,
                name: 'Abraham Alanya',
                description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                conection: 'Ultimo hace 3 minutos',
                photo: 'https://image.flaticon.com/icons/png/512/2922/2922506.png'
            },
            {
                id: 2,
                name: 'Gino Galarza',
                description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                conection: 'Ultimo hace 60 minutos',
                photo: 'https://image.flaticon.com/icons/png/512/2922/2922506.png'
            },
            {
                id: 3,
                name: 'Anali Melina',
                description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                conection: 'Ultimo hace 83 minutos',
                photo: 'https://image.flaticon.com/icons/png/512/2922/2922506.png'
            }
        ]
    }
});