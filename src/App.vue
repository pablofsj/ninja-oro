<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col m12 s12">
        <nav>
          <div class="nav-wrapper yellow darken-1">
            <h3>Ninja Gold</h3>
          </div>
        </nav>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col m12 s12">
        <h4>Tu total de oro es: <span :class="{ verde: $store.state.orosTotales > 0, rojo: $store.state.orosTotales < 0 }">{{$store.state.orosTotales}}</span> oros</h4>
      </div>
    </div>
    <div class="row">
      <Card v-for="(carta,i) in $store.state.cartas" :key="i" :img_url="carta.img_url" :titulo="carta.titulo" :descripcion="carta.descripcion" :contenido="carta.contenido" :min="carta.min" :max="carta.max" ></Card>
    </div>
    <div class="row">
      <div class="col m12 s12">
        <div class="row">
          <h4>Actividades</h4>
          <ul class="collection">
            <li :class="{ verde: actividad.valor > 0, rojo: actividad.valor < 0 }" class="collection-item" v-for="(actividad,i) in $store.state.actividades" :key="i">{{actividad.texto}}<span class="new badge blue" data-badge-caption="Quitar" @click="$delete($store.state.actividades, i)"></span></li>  
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col m12 s12">
        <div class="row">
          <button @click="resetOros()" class="btn">Reiniciar juego</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue';
export default {
  name: 'App',
  components: {
    Card
  },
  
  methods: {
    resetOros(){
      var respuesta = window.confirm("¿Estás seguro que quieres reiniciar tu juego? ¡Perderás todo tu progreso!");
      if (respuesta == true) {
        this.$store.commit('resetOros');
      }   
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

.verde{
  color: green;
  font-weight: bold;
}
.rojo{
  color: red;
  font-weight: bold;
}
h3{
    font-family: 'Fredoka One', cursive;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>