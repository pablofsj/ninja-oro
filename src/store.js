export default {
    state: {
        orosTotales: 0,
        actividades: []
    },
    //Declaración de función
    aumentarOros: function(aumento) {
        this.state.orosTotales+=aumento;
    },
    agregaActividad: function(mensaje){
        this.state.actividades.push(mensaje);
    },
    resetOros: function(){
        this.state.actividades = [];
        this.state.orosTotales = 0;
    }
  };