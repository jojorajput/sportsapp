const React = require("react-native");

const { Dimensions } = React;

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
    paddingBottom: 5,
    marginBottom: 0
  },
  logo: {
    alignSelf: "center",
    marginTop: deviceHeight / 8,
    padding: 20
  },
  img:{
      alignSelf: 'center',
      width: 200,
      height:200
  },
  but:{
      opacity: .60,
      padding:0,
      width:50,
      height:50,
      position: 'relative',
      top:150,
      left: 150
  },
  usrName:{flex:1, alignSelf: 'center', marginTop: 15},
  usrNameTx: {
    fontSize: 30,
    fontWeight: 'bold'
  }
};
