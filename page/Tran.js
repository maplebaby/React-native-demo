/**
 * Tab训练页面
 */
'use strict';

var React = require('react-native');
var TranList = require('./TranList');
var {
  StyleSheet,
  NavigatorIOS,
  StatusBarIOS,
  AlertIOS,
  Text,
  View
} = React;


var Tran = React.createClass({

  getInitialState: function() {
    return {
      hideNavbar: false
    };
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    console.log(this.state, nextState); // Object {hideNavbar: true} Object {hideNavbar: false}
    return true;
  },

  toggleNavigation: function() {
    console.log(!this.state.hideNavbar ? "hide" : "show");
    this.setState({
      hideNavbar: !this.state.hideNavbar
    });
  },

  render: function() {
    
    return (
      <NavigatorIOS
        ref="tran"
        tintColor="#FFFFFF"
        barTintColor="#584F60"
        titleTextColor="#FFFFFF"
        style={styles.container}

        navigationBarHidden={this.state.hideNavbar}
        initialRoute={{
          title: 'Keep',
          component: TranList,
          rightButtonIcon: require('image!NavBarButtonPlus'),
          onRightButtonPress: () => {
            AlertIOS.alert(
              '提示', 
              '添加训练功能未开发', 
              [{
                text: '确定',
                onPress: () => console.log('Tapped OK'),
              }]
            );
          },
          passProps: {
            toggleNavigation: this.toggleNavigation.bind(this)
          }
        }}
        configureScene={() => Navigator.SceneConfigs.PushFromRight}/>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

module.exports = Tran;
