export default {
    state: {
        orosTotales: 0,
        actividades: []
    },
    //Declaración de función
    aumentarOros: function(aumento) {
        this.state.orosTotales+=aumento;
    },
    agregaActividad: function(actividadNueva){
        this.state.actividades.push(actividadNueva);
    },
    resetOros: function(){
        this.state.actividades = [];
        this.state.orosTotales = 0;
    }
  };