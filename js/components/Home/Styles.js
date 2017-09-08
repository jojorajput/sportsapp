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
  head: {
    paddingTop: 25
  }
};
