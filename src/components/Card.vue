<template>
    <div class="col m3 s6">
      <div class="card">
        <div class="card-image">
          <img :src="img_url">
          <span class="card-title">{{ titulo }}</span>
        </div>
        <div class="card-content">
          <p>{{ descripcion }}</p> 
        </div>
        <div class="card-action">
          <button @click="totalOros()" class="waves-effect waves-light btn-small">Encontrar oro!</button>
        </div>
      </div>
    </div>           
</template>

<script>
import store from "@/store";

export default {
  name: 'Card',
  props: {
    img_url: String,
    titulo: String,
    descripcion: String,
    min: Number,
    max: Number,
  },

  methods: {
    totalOros: function(){
      let fecha = new Date(); 
      let fecha_larga = fecha.toLocaleDateString();
      let hora_exacta = (fecha.getHours() + ":" + fecha.getMinutes());
      let aumento = this.generarNumeroRandom();
      store.aumentarOros(aumento);
      let mensaje = '';

      if(aumento < 0) {
        mensaje = (`Haz perdido ${Math.abs(aumento)} oros desde ${this.titulo} con fecha ${fecha_larga} a las ${hora_exacta} hrs`);
      }
      else {
        mensaje = (`Haz ganado ${aumento} oros desde ${this.titulo} con fecha ${fecha_larga} a las ${hora_exacta} hrs`);
      }

      store.agregaActividad(mensaje);
    },

    generarNumeroRandom: function(){
      return Math.floor(Math.random() * (this.max - this.min)) + this.min;  
    }
  }
}
</script>



<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
