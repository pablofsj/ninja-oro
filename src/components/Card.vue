<template>
    <div class="col m3 s6">
      <div class="card">
        <div class="card-image">
          <img :src="img_url">
          <span class="card-title">{{ titulo }}</span>
        </div>
        <div class="card-content">
          <p>Consigue entre {{ min }} y {{ max }} oros</p>
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
    min: Number,
    max: Number,
  },

  methods: {
    totalOros: function(){
      let aumento = this.generarNumeroRandom();
      store.aumentarOros(aumento);
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
