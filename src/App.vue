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
        <h4>Tu total de oro es: {{state.orosTotales}} oros</h4>
      </div>
    </div>
    <div class="row">
      <Card v-for="(carta,i) in cartas" :key="i" :img_url="carta.img_url" :titulo="carta.titulo" :contenido="carta.contenido" :min="carta.min" :max="carta.max" ></Card>
    </div>
    <div class="row">
      <form class="col m12 s12">
        <div class="row">
          <h4>Actividades</h4>
          <div class="input-field col s12">
            <input disabled value="" type="text" class="validate">
            <label for="disabled"></label>
          </div>
        </div>
      </form>
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
        {img_url:'https://k48b9e9840-flywheel.netdna-ssl.com/wp-content/uploads/2020/04/COVID-19-Relief_Small-Farms--1024x614.jpg',titulo:'Granja', min: 10, max:20 },
        {img_url:'https://media-cdn.tripadvisor.com/media/photo-s/15/25/37/79/in-der-deer-cave.jpg',titulo:'Caverna', min:5 , max:10 },
        {img_url:'https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg',titulo:'Casa', min:2 , max:5 },
        {img_url:'https://tendenciasdigitales.com/web/wp-content/uploads/2019/06/Casino-en-l%C3%ADnea600x400.jpg',titulo:'Casino', min:0 , max:50},
      ],
      state: store.state
    }
  },
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
