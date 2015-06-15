/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Tran = require('./page/Tran');
var Me = require('./page/Me');
var news = require('./page/News');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  StatusBarIOS,
  VibrationIOS,
  TabBarIOS,
  AlertIOS,
  Text,
  View,
} = React;

var iuu = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'blueTab'
    };
  },

  _notDeveloped: function(text: string) {
    AlertIOS.alert(
      '提示',
      text,
      [
        {
          text: '确定',
          onPress: () => console.log('Tapped OK'),
        },
      ]
    );
  },

  componentDidMount: function() {
    /* 初始化StatusBarIOS */
    StatusBarIOS.setStyle('light-content');
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor={'#584F60'}>
        <TabBarIOS.Item
          title={'我的训练'}
          icon={require('image!Tab1')}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          <Tran />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title={'动态'}
          tintColor={'#000000'}
          icon={require('image!Tab2')}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}>
          <NavigatorIOS
            ref="dt"
            tintColor="#FFFFFF"
            barTintColor="#584F60"
            titleTextColor="#FFFFFF"
            style={styles.container}

            initialRoute={{
              title: '动态',
              component: news,
              leftButtonIcon: require('image!add'),
              onLeftButtonPress: () => this._notDeveloped('添加好友功能未开发'),
              rightButtonIcon: require('image!news'),
              onRightButtonPress: () => this._notDeveloped('通知功能未开发'),
              passProps: {
                text: '这个是动态页面',
              },
            }}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title={'我'}
          icon={require('image!Tab3')}
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}>
          <Me />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyPage: {
    flex: 1,
    paddingTop: 64,
  },
  emptyPageText: {
    margin: 10,
  },
});

AppRegistry.registerComponent('iuu', () => iuu);
