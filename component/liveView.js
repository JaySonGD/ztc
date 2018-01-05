/**
 * Created by ward on 2018/1/3.
 */




import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
    Dimensions,
    ListView,
    ActivityIndicator,
    TouchableOpacity,
    RefreshControl,
} from 'react-native';

import Toast, {DURATION} from 'react-native-easy-toast';

import HttpRequest from './httpRequest';


const DataJson = require('./resources/tv.json');
const Screen = {height, width} = Dimensions.get('window');


export default class LiveView extends Component{

    // static navigationOptions = {
    //     // title: '电视',
    // };
    constructor(props){
        super(props)
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) =>  r1 !== r2
        })
        this.state = {
            loading : false,
            dataSource : ds.cloneWithRows([]),
            isRefreshing:false,
            loadMore:false,
        }
    }


    componentDidMount() {
        this._loadData()
    }

    _loadData(){
        HttpRequest.get('http://oz3odd99d.bkt.clouddn.com/hk.json',null,(json)=>{
            this.setState({
                loading:false,
                dataSource:this.state.dataSource.cloneWithRows(json),
                loadMore:false,
                isRefreshing:false,
            })
            this.refs.toast.show('加载成功!');
            console.log('加载成功!');

        },(error)=>{
            this.setState({
                loading:false,
                loadMore:false,
                isRefreshing:false,
            })
            this.refs.toast.show('加载失败!');
            console.log('加载失败!');

        })
    }

    render(){
            if(this.state.loading) return this._renderLoading()
            return this._renderRadio()
    }

    _renderLoading(){
        return(<ActivityIndicator style={styles.loadingStyle}
                                  animating={this.state.loading}
                                  size="large"
        />)
    }

    _renderRadio(){

        const FooterView = this.state.loadMore?
            <View style={styles.footerStyle}>
                <ActivityIndicator/>
                <Text style={styles.footerTextStyle}>加载更多•••</Text>
            </View> : null
        return(
            <View style={styles.container}>
                <Toast ref="toast" position={'center'}/>
                <ListView dataSource={this.state.dataSource}
                          contentContainerStyle={styles.listViewStyle}
                          renderRow={this._renderRow.bind(this)}
                          pageSize={20}
                          enableEmptySections={true}

                          onEndReachedThreshold={0}
                          //onEndReached={this._onEndReached.bind(this)}
                          onEndReached={()=>{
                              this._onEndReached()
                          }}

                          renderFooter={() => FooterView}

                          refreshControl={
                              <RefreshControl
                                  refreshing={this.state.isRefreshing}
                                  //onRefresh={this._onRefresh.bind(this)}
                                  onRefresh={()=>{
                                      this._onRefresh()
                                    }
                                  }

                                  tintColor="#ff0000"
                                  title="Loading..."
                                  titleColor="#00ff00"
                                  colors={['#ff0000', '#00ff00', '#0000ff']}
                                  progressBackgroundColor="#ffff00"
                              />
                          }
                />
            </View>

        )
    }

    _onRefresh() {
        var timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;
        //当前时间戳为：1403149534
        console.log("当前时间戳为：" + timestamp);

        console.log("下拉载数据：");
        this.setState({
            isRefreshing: true,
        })
        setTimeout(()=>{
            this._loadData();
        },2000)


    }

    _onEndReached() {

        var timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;
        //当前时间戳为：1403149534
        console.log("当前时间戳为：" + timestamp);

        if(this.state.loadMore) return;

        console.log("加载数据：");

        this.setState({
            loadMore: true,
        });
        setTimeout(()=>{
            this._loadData();
        },2000)

    }


    // 实现数据源方法,每行cell外观
    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableOpacity activeOpacity={0.5}
                              onPress={()=>{
                                  this._didClickRow(rowData)
                              }}
            >
                <View style={styles.cellStyle}>
                    <Image style={styles.cellImageStyle}
                           source={{uri:rowData.img}}
                    />
                    <Text style={styles.cellTextStyle}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _didClickRow(rowData){
        this.props.navigation.navigate('Play', { data: rowData })
    }
}


const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    loadingStyle:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    listViewStyle:{
        backgroundColor:'#e6e6e6',
        flexDirection:'row',
        flexWrap:'wrap',
        paddingBottom:10,
    },
    cellStyle:{
        height:(Screen.width - 20 )/3,
        width: (Screen.width - 20 )/3,
        backgroundColor: 'white',
        marginLeft:5,
        marginTop:5,
        borderRadius:5,
        alignItems:'center',
    },
    cellImageStyle:{
        width : (Screen.width - 20 )/3 - 50,
        height : (Screen.width - 20 )/3 - 50,
        //backgroundColor:'orange',
        marginTop:12.5,
    },
    cellTextStyle:{
        marginTop:10,
        fontSize:12,
        color:'#000',
    },
    footerStyle:{
        height:25,
        width: Screen.width,
        //backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10,
        flexDirection:'row',
    },
    footerTextStyle:{
        color:'orange',
        fontSize:14,
        marginLeft:5,
    },


})