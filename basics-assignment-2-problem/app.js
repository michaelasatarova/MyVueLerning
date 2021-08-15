var app = new Vue({
    el: '#assignment',
    data() {
        return{
           message: "hello world",
           name:'hello',
           hoco:''
        };
    },
    methods: {
        alertMessage: function () {
          alert(this.message);
        },
        findName(e){
            this.name = e.target.value;
        },
        findHoco(e){
            this.hoco = e.target.value;
        }
    }

  })
