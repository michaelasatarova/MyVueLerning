<template>
    <h2>User name: {{ name }}</h2>
    <h3>Age: {{ age }}</h3>
</template>
 
<script>

 
export default {
  name: 'ActiveUser', 
    props:{
    name:String,
    age:Number
   },

 data(){
     return{

     }
 }
 
}
</script>

