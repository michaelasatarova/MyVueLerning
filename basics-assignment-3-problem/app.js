var app = new Vue({
    el: '#assignment',
    data() {
        return{
           counter: 0,
        };
    },
    watch:{
        //služi pri tom countery po 5 sekundach sa to nastaví znova na 0 po tom ako dosiahne hodnotu 37
        //dobry watch v  tom že stale sleduje zmeny na tom elemente je to ten isty counter ako v data
        counter(value){
            if (value > 37){
                 setTimeout(() => {
                this.counter = 0 ;
              }, 5000)
            }
        }
    },
    methods: {
        // zväčší o 5
        counter5 () {
            this.counter = this.counter + 5 ;
        },
        // zväčší o 1
        counter1 () {
            this.counter ++ ;
          },
    }
  
  })