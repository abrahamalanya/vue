Vue.component('navbar', {
    props: ['title'],
    template: `<nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="">
                        <img src="https://vuejs.org/images/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> {{ title }}
                    </a>
                </div>
            </nav>`,
});
var navbar = new Vue({
    el: '#navbar',
    data: {
        title: 'Demo'
    }
});
var linkview = new Vue({
    el: '#link-view',
    data: {
        links: [
            {
                prefix: 'vue2',
                route: './vue2/index.html'
            }
        ]
    }
});