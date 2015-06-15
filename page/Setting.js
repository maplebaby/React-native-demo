/**
 * 个人信息页面
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component
} = React;

var Setting = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>设置页面</Text>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
  },
  text: {
    margin: 10,
  },
});

module.exports = Setting;
