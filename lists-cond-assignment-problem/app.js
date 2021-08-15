var app = new Vue({
    el: '#assignment',
    data() {
        return{
            goals: [],
            enteredGoalValue: "",
            isActive: false,
        };
    },
    methods: {
      addToList(){
          this.goals.push(this.enteredGoalValue);
      },
      toggleVisibility(){
        this.isActive = !this.isActive;
        }
    }
  
  })

