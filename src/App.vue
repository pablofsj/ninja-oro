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
        <h4>Tu total de oro es: <span :class="{ verde: state.orosTotales > 0, rojo: state.orosTotales < 0 }">{{state.orosTotales}}</span> oros</h4>
      </div>
    </div>
    <div class="row">
      <Card v-for="(carta,i) in cartas" :key="i" :img_url="carta.img_url" :titulo="carta.titulo" :descripcion="carta.descripcion" :contenido="carta.contenido" :min="carta.min" :max="carta.max" ></Card>
    </div>
    <div class="row">
      <div class="col m12 s12">
        <div class="row">
          <h4>Actividades</h4>
          <ul class="collection">
            <li :class="{ verde: actividad.valor > 0, rojo: actividad.valor < 0 }" class="collection-item" v-for="(actividad,i) in state.actividades" :key="i">{{actividad.texto}}<span class="new badge blue" data-badge-caption="Quitar" @click="$delete(state.actividades, i)"></span></li>  
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
import store from "@/store";

export default {
  name: 'App',
  components: {
    Card
  },
  data: function (){
    return {
      cartas: [
        {
          img_url: 'https://k48b9e9840-flywheel.netdna-ssl.com/wp-content/uploads/2020/04/COVID-19-Relief_Small-Farms--1024x614.jpg',
          titulo: 'Granja',
          min: 10,
          max: 20,
          descripcion: 'Gana entre 10 y 20 oros'
        },

        {
         img_url:'https://media-cdn.tripadvisor.com/media/photo-s/15/25/37/79/in-der-deer-cave.jpg',
         titulo:'Caverna', 
         min:5, 
         max:10,
         descripcion: 'Gana entre 5 y 10 oros'
        },

        {
         img_url:'https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg',
         titulo:'Casa', 
         min:2 , 
         max:5,
         descripcion: 'Gana entre 2 y 5 oros' 
        },

        {img_url:'https://tendenciasdigitales.com/web/wp-content/uploads/2019/06/Casino-en-l%C3%ADnea600x400.jpg',
        titulo:'Casino', 
        min:-50 , 
        max:50, 
        descripcion: 'Gana ó pierde entre 0 y 50 oros'
        },
      ],
      state: store.state
    }
  },

  methods: {
    resetOros: function(){
      var respuesta = window.confirm("¿Estás seguro que quieres reiniciar tu juego? ¡Perderás todo tu progreso!");
      if (respuesta == true) {
        store.resetOros();
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
