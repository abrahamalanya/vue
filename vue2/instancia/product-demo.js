data_header = {
    title: 'Productos'
};
var header = new Vue({
    el: '#header',
    data: data_header
});
var product = new Vue({
    el: '#product',
    data: {
        id: 1,
        name: '',
        stock: 0,
        unidadmedida: '',
        products: []
    },
    methods: {
        add_product: function () {
            this.products.push({ id: this.id++, name: this.name, stock: this.stock, unidadmedida: this.unidadmedida });
        }
    }
});