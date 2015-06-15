/**
 * 我的训练页面
 */
'use strict';

var React = require('react-native');
var TimerMixin = require('react-timer-mixin');
var RCTRefreshControl = require('RCTRefreshControl');
var Dimensions = require('Dimensions');
var Carousel = require('react-native-carousel');
var Detail = require('./Detail');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  PixelRatio,
  StatusBarIOS,
  ActivityIndicatorIOS,
  TouchableHighlight,
  ScrollView,
  Component
} = React;

var NEW_GOODS_API = "http://cyg.changyou.com/index/rankList.json?type=0";

var TranList = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() {
    this.fetchData();
    return {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  },

  componentDidMount: function() {
    /* 下拉刷新 */
    RCTRefreshControl.configure({
      node: this.refs["HotList"],
      tintColor: '#929292',
      activityIndicatorViewColor: '#929292',
    }, () => {
      this.setTimeout(() => {
        this.fetchData();
        RCTRefreshControl.endRefreshing(this.refs["HotList"]);
      }, 2000);
    });
  },

  fetchData: function() {
    fetch(NEW_GOODS_API)
      .then((response) => response.json())
      .then((responseData) => {
        var index = Math.floor(Math.random()*5 + 1); 
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data.list.slice(0, index)),
          isLoading: false
        });
      })
      .catch(function(error) {
        console.log(error);
      })
      .done();
  },

  _renderRow: function(item) {
    return (
      <TouchableHighlight onPress={() => this._handlePress(item)} underlayColor={"#F2F2F2"} activeOpacity={10}>
        <View style={styles.peopleItem}>
          <Image source={{uri: this._getLargeImage(item.goods.largeImage)}} style={styles.thumbnail} />
          <View style={styles.infoWrap}>
            <View style={styles.infoRow} numberOfLines={1}>
              <Text style={styles.txtHighlight}>[{item.goods.title}] {item.goods.goodsName}</Text>
              <View style={styles.labelWrap}><Text style={styles.label}>{item.goods.topNum}</Text></View>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.txtNormal}>价格：</Text>
              <Text style={styles.price}>￥{item.goods.price}</Text>
            </View>
            <Text style={styles.infoRow} numberOfLines={1}>
              <Text style={styles.txtHighlight}>
                {this._getAttrDesc(item.goods.attrs)}
              </Text>
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.loading}>
        <ActivityIndicatorIOS
          size='small'/>
      </View>
    );
  },

  render: function() {
    // if (this.state.isLoading) {
    //   return this.renderLoadingView();
    // }
    return (
      <ScrollView
        ref={"HotList"}
        style={styles.container}
        automaticallyAdjustContentInsets={false}>

        <Carousel style={styles.carousel} width={Dimensions.get('window').width} indicatorSize={40}>
          <Image style={styles.img} source={{uri: 'http://public.npt.changyou.com/static/carousel/banner003.jpg'}} />
          <Image style={styles.img} source={{uri: 'http://public.npt.changyou.com/static/carousel/刀剑上线banner.jpg'}} />
          <Image style={styles.img} source={{uri: 'http://public.npt.changyou.com/static/carousel/banner001.jpg'}} />
        </Carousel>

        <View style={styles.boxHeader}>
          <Text style={styles.boxTitle}>人气排行版</Text>
        </View>
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow} />
      </ScrollView>
    );
  },

  _getAttrDesc: function(attrs) {
    var html = '';
    for(var i=0, len=attrs.length; i<len; i++) {
      html += attrs[i].name + ':' + attrs[i].value + " " 
    }
    return html;
  },

  _getLargeImage: function(url) {
    return "http://public.npt.changyou.com/" + url;
  },

  _handlePress: function(item) {
    this.props.toggleNavigation();
    this.props.navigator.push({
      title: item.goods.goodsName,
      component: Detail,
      leftButtonIcon: require('image!back'),
      onLeftButtonPress: () => this.props.navigator.pop(),
      passProps: {
        goods: item.goods,
        navigator: this.props.navigator,
        toggleNavigation: this.props.toggleNavigation
      }
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64
  },

  listView: {
    flex: 1,
    justifyContent: "flex-start"
  },

  labelWrap: {
    borderWidth: 1,
    borderColor: "#B40000",
    borderRadius: 2,
    marginLeft: 5,
    backgroundColor: "#C40000",
    position: "absolute",
    right: 0,
    top: 0
  },
  label: {
    fontSize: 11,
    paddingLeft: 3,
    paddingRight: 3,
    color: "#FFFFFF",
  },

  carousel: {
    flex: 1
  },
  img: {
    resizeMode: 'stretch',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 300 / 720
  },

  boxHeader: {
    height: 25,
    paddingLeft: 5,
    marginTop: 10,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: "#CCCCCC",
    borderLeftWidth: 4,
    borderLeftColor: "#C40000",
    backgroundColor: "#FFFFFF",
    justifyContent: "center"
  },
  boxTitle: {
    fontSize: 14,
    color: "#666666"
  },

  peopleItem: {
    alignItems: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: "#CCCCCC",
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10
  },

  hotList: {
    overflow: "hidden",
    padding: 10
  },

  hotItem: {
    alignItems: "flex-start",
    flexDirection: "row",
  },

  price: {
    fontSize: 12,
    color: '#C40000'
  },

  innnerImage: {
    height: 20,
    marginTop: 40,
    textAlign: "center",
    color: "#000000"
  },

  infoWrap: {
    marginLeft: 20,
    flex: 1,
  },
  infoRow: {
    height: 16,
    alignItems: "center",
    marginBottom: 7,
    flex: 1,
    flexDirection: "row",
    overflow: "hidden",
  },
  txtNormal: {
    fontSize: 12,
    color: "#666666"
  },
  txtHighlight:  {
    fontSize: 12,
    color: "#546534",
  },

  instructions: {
    textAlign: 'center',
    color: '#333333'
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  thumbnail: {
    borderRadius: 1,
    width: 120 / PixelRatio.get(),
    height: 120 / PixelRatio.get(),
  },
});

module.exports = TranList;
