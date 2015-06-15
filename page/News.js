/**
 * 我的动态页面
 */
'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var CarouselView = require('../component/CarouselView');
var {
  StyleSheet,
  ScrollView,
  StatusBarIOS,
  Text,
  View
} = React;

var News = React.createClass({

  render: function() {
    StatusBarIOS.setStyle('light-content');

    return (
      <CarouselView style={styles.carousel}>
        <ScrollView label={"发现"}
          automaticallyAdjustContentInsets={false}>
          <View style={styles.container}>
            <Text style={styles.text}>我的昵称叫{this.props.text}</Text>
          </View>
        </ScrollView>
        
        <ScrollView label={"关注"}
          automaticallyAdjustContentInsets={false}>
          <View style={styles.container}>
            <Text style={styles.text}>我的昵称叫关注</Text>
          </View>
        </ScrollView>

        <ScrollView label={"最新"}
          automaticallyAdjustContentInsets={false}>
          <View style={styles.container}>
            <Text style={styles.text}>我的昵称叫最新</Text>
          </View>
        </ScrollView>
      </CarouselView>
    );
  }
});

var styles = StyleSheet.create({
  carousel: {
    paddingTop: 64,
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width
  },
  text: {
    margin: 10,
  },
});

module.exports = News;
