const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  mainContainer: {
    flex: 1,
    width: null,
    height: null
  },
  formContainer: {
    flex: 1,
    //top: deviceHeight / 3,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20
  },
  but: {
    width: deviceWidth / 2,
    alignSelf: "center",
    marginTop: 20
  },
  logo: {
    marginTop: 50,
    alignSelf: "center"
  }
};
