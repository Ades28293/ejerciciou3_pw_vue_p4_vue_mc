<template>

    <DatosVehiculo/>
    
  </template>
  
  <script>
  
  import DatosVehiculo from '../components/DatosVehiculo.vue';
  
  export default {
      components:{
        DatosVehiculo
      },
      mounted(){
       
       const {placa}= this.$route.params;
    
       
      }
  }
  </script>
  
  <style scoped>
  
  </style>