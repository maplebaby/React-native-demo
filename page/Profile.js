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

var Profile = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>我的昵称叫{this.props.text}</Text>
      </View>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: '#E9EFE2'
  },
  text: {
    margin: 10,
  },
});

module.exports = Profile;
