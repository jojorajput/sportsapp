const React = require("react-native");

const { Dimensions} = React;

const deviceHeight = Dimensions.get("window").height;


export default {
  mainContainer: {
    flex: 1,
    width: null,
    height: null,
    marginBottom: 0,
    marginTop: 0
  },
  head: {
    paddingTop: 25,
    paddingBottom:5,
    marginBottom: 0
  },
  logo:{
      alignSelf:"center",
      marginTop: deviceHeight/3,
      padding: 20
  },
but:{
      alignSelf:"center",      
  }
};
