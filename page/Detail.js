/**
 * 角色详情页面
 */
'use strict';

var React = require('react-native');
var Config = require('../config/Config');
var Profile = require('./Profile');
var Dimensions = require('Dimensions');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  StatusBarIOS,
  TouchableHighlight,
  SegmentedControlIOS,
  ScrollView,
  PixelRatio,
  Component
} = React;

var Detail = React.createClass({

  render: function() {
    var item = this.props;
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}>
        <Image style={styles.img} source={{uri: 'http://public.npt.changyou.com/static/carousel/banner003.jpg'}} />
        <View style={styles.container}>
          <View style={styles.detailWrap}>
            <View style={styles.imgWrap}>
              <Image source={{uri: this._getLargeImage(item.goods.largeImage)}} style={styles.thumbnail} />
            </View>
            <View style={styles.infoWrap}>
              <Text style={styles.roleName}>[{item.goods.title}] {item.goods.goodsName}</Text>
              <Text style={styles.attrKey}>
                商品编号：<Text style={styles.attrValue}>{item.goods.goodsCode}</Text>
              </Text>
              <Text style={styles.attrKey}>
                区       服：<Text style={styles.attrValue}>电信四区—潘多拉/超梦幻/莲花灯</Text>
              </Text>
              <Text style={styles.attrKey}>
                销售状态：<Text style={styles.attrValue}>待售中</Text>
              </Text>

              <View style={styles.block}>
                <Text style={styles.attrKey}>
                  价格：<Text style={styles.attrValue}>{item.goods.price}</Text>
                </Text>
                <TouchableHighlight
                  style={styles.btn}
                  onPress={this.props.toggleNavigation}
                  underlayColor={"#F2F2F2"}>
                  <Text style={styles.btnText}>发现</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  },

  _getLargeImage: function(url) {
    return  Config.IMAGE_PATH + url;
  },

});

var styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width
  },

  carousel: {
    backgroundColor: "#000000",
  },

  img: {
    resizeMode: 'stretch',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 300 / 720
  },

  fixTop: {
    position: 'absolute',
    top: 0,
  },

  detailWrap: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  roleName: {
    fontSize: 13,
    marginBottom: 10
  },

  btn: {
    backgroundColor: "#c40000",
    borderRadius: 3,
    width: 75,
    marginTop: 2,
    height: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 12
  },

  block: {
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    marginLeft: -5,
    backgroundColor: "#FAFAFA"
  },

  imgWrap: {
    width: 100,
    height: 150,
    alignItems: "center",
    justifyContent: "center",

    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: "#F2f2f2",
    borderRightWidth: 1 / PixelRatio.get(),
    borderRightColor: "#F2f2f2",
  },
  thumbnail: {
    borderRadius: 1,
    width: 120 / PixelRatio.get(),
    height: 120 / PixelRatio.get()
  },

  infoWrap: {
    height: 150,
    marginLeft: 10,
    paddingTop: 10
  },
  attrKey: {
    marginTop: 5,
    fontSize: 12,
    color: "grey"
  },
  attrValue:  {
    fontSize: 12,
    color: "#4d4d4d"
  },

  text: {
    margin: 10,
  },
});

module.exports = Detail;
