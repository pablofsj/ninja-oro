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
    generarNumeroRandom(){
      return Math.floor(Math.random() * (this.max - this.min)) + this.min
    },
    totalOros(){
      let fecha = new Date(); 
      let fecha_larga = fecha.toLocaleDateString();
      let hora_exacta = (fecha.getHours() + ":" + fecha.getMinutes());
      let aumento = this.generarNumeroRandom();
      this.$store.commit('aumentarOros', aumento);
      let mensaje = '';
      if(aumento < 0) {
        mensaje = {
          texto:`Perdiste ${Math.abs(aumento)} oros desde ${this.titulo} con fecha ${fecha_larga} a las ${hora_exacta} hrs`,
          valor: aumento
        }
      }
      else {
        mensaje = {
          texto:`Ganaste ${aumento} oros desde ${this.titulo} con fecha ${fecha_larga} a las ${hora_exacta} hrs`,
          valor: aumento
        }
      }
      
      this.$store.commit('agregaActividad', mensaje);
      
    
  
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
img{
  height:200px;
}
.card{
  height: 400px;
}
.card-content{
  height: 100px;
}
.card-action{
  height: 100px;
}
</style>