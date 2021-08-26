<template>
    <label for="name" >
        Name
        <input type="text" name="name" v-model="name">  
    </label>

        <label for="age">
        Age
        <input type="text" name="age"  v-model="age">  
    </label>
    
    <active-user :name="name" :age="age"></active-user>
</template>
 
<script>
import ActiveUser from  './ActiveUser.vue';
 
export default {
  name: 'UserData', 
  components:{
      ActiveUser
  },
 data(){
     return{
         name:" ",
         age: 0,
     }
 }
 
}
</script>

