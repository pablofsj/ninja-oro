import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'; 

Vue.config.productionTip = false

Vue.use(Vuex)
  
const store = new Vuex.Store({
  state: {
    orosTotales: 0,
    actividades: [],
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
       titulo:'Cavernas', 
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
    ]
    
  },

  mutations: {
    aumentarOros: function(state,aumento) {
      this.state.orosTotales+=aumento;
    },
    agregaActividad: function(state,mensaje){
      this.state.actividades.push(mensaje);
    },
    resetOros: function(){
      this.state.actividades = [];
      this.state.orosTotales = 0;
    }
  }
})



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
