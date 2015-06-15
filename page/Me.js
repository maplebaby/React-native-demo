/**
 * 我页面
 */
'use strict';

var React = require('react-native');
var Profile = require('./Profile');
var Setting = require('./Setting');
var {
  StyleSheet,
  NavigatorIOS,
  AlertIOS,
  Text,
  View
} = React;


var Me = React.createClass({

  render: function() {
    return (
      <NavigatorIOS
        ref="me"
        tintColor="#FFFFFF"
        barTintColor="#584F60"
        titleTextColor="#FFFFFF"
        style={styles.container}

        initialRoute={{
          title: '周小枫',
          component: Profile,
          rightButtonIcon: require('image!install'),
          onRightButtonPress: () => {
            this.refs.me.push({
              title: '设置',
              component: Setting,
              leftButtonIcon: require('image!back'),
              onLeftButtonPress: () => this.refs.me.pop(),
              passProps: {
                text: 'This page has a right button in the nav bar',
              }
            });
          },
          passProps: {
            text: '周小枫',
          },
        }}/>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30
  }
});

module.exports = Me;
