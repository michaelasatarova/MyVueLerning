var app = new Vue({
    el: '#assignment',
    data() {
        return{
            //v html som to prepojila cez v-model ten ma rovnake meno ako :class a ako tu v data STYLING
            // v css su vytvorene classy a ked ich user napiše do inputu tak sa odzrkadlia na elemente
           styling:"",
           isActive: false,
           bg:"",
        };
    },
    methods: {
        toggle(){
            this.isActive = !this.isActive;
        }
    }
  
  })