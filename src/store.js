export default {
    state: {
        orosTotales: 0 
    },
    //Declaración de función
    aumentarOros: function(aumento) {
        this.state.orosTotales+=aumento;
    }
  };