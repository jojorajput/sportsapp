const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  mainContainer: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 0
  },
  logoBox:{
    alignSelf: "center",
    marginTop: deviceHeight / 3
  },
  logo: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 30
  }
};
