/**
 * Created by ward on 2018/1/9.
 */

import React,{Component} from 'react';
import {
    View,Text,Image,
    StyleSheet,
    ListView,Dimensions,
    ActivityIndicator,
    RefreshControl,
    ActionSheetIOS,
    TouchableOpacity,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import ActionSheet from 'react-native-actionsheet';

import HttpRequest from '../../common/httpRequest';
import Config from '../../common/config';

const {width, height} = Dimensions.get('window');

let items=[];

const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 2
const options  = [
    '取消',
    '色情',
    '拉死'
]
const message = '你确定要举报该用户?'
const title = '举报类型'

export default class HomeListView extends Component{

    constructor(props){
        super(props)
        var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});

        this.state = {
            dataSource:dataSource.cloneWithRows([]),
            maxTime:0,
            loadMore:false,
            isRefreshing:false,

        }
    }

    componentWillMount() {
        this._loadData()
    }

    render(){
        const FooterView = this.state.loadMore?
            <View style={styles.footerStyle}>
                <ActivityIndicator/>
                <Text style={styles.footerTextStyle}>加载更多•••</Text>
            </View> : null
        return(
            <View style={styles.container}>
                <Toast ref="toast" position={'center'}/>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this._renderRow.bind(this)}
                          //pageSize={10}
                          onEndReachedThreshold={-100}
                          enableEmptySections={true}
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
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={title}
                    message={message}
                    options={options}
                    cancelButtonIndex={CANCEL_INDEX}
                    destructiveButtonIndex={DESTRUCTIVE_INDEX}
                    onPress={this.handlePress.bind(this)}
                />
            </View>
        )
    }

    _loadData(){
        let maxtime = this.state.maxTime
        let url = Config.api.homeList + '&type='+ this.props.type +'&maxtime=' + maxtime
        HttpRequest.get(url,[],(obj)=>{
            console.log(obj)

            this.refs.toast.show('加载成功!');
            //let items = items.slice();

            let contentlist = obj.list;
            if (maxtime !== 0){
                items = items.concat(contentlist);

            } else {
                items = obj.list;
            }

            this.setState({

                dataSource:this.state.dataSource.cloneWithRows(items),
                maxTime:obj.info.maxtime,
                loadMore: false,
                isRefreshing:false,

            })
        },(error)=>{
            this.refs.toast.show('加载失败!');
            console.log(error)
            this.setState({
                loadMore: false,
                isRefreshing:false,
            })
        })
    }

    showActionSheet() {
        this.ActionSheet.show()
    }

    handlePress(buttonIndex) {
        console.log(buttonIndex)
        if(buttonIndex != 0) this.refs.toast.show('举报成功！');
    }
    _onRefresh() {
        var timestamp = Date.parse(new Date());
        timestamp = timestamp / 1000;
        //当前时间戳为：1403149534
        console.log("当前时间戳为：" + timestamp);

        console.log("下拉载数据：");
        this.setState({
            isRefreshing: true,
            maxTime:0,
        })
        this._loadData();



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
        this._loadData();

    }
    _renderRow(row){



        return(
            <View style={styles.cellStyle}>

                <View style={styles.cellHeaderBoxStyle}>
                    <Image style={styles.cellProfileImageStyle} source={{uri:row.profile_image}}/>
                    <View style={styles.cellNameBoxStyle}>
                        <Text style={styles.cellNameStyle}>{row.name}</Text>
                        <Text style={styles.cellPassTimeStyle}>{row.passtime}</Text>
                    </View>
                    <TouchableOpacity style={styles.cellMoreBoxStyle}
                                      // onPress={()=>this._showActionSheet()}
                                      // onPress={this._showActionSheet.bind(this)}
                                      onPress={()=>{
                                          this.showActionSheet()
                                      }}
                    >
                        <Image source={require('../../resource/more.png')}
                               style={styles.cellMoreButtonStyle}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.cellTextStyle}>{row.text}</Text>
                <Image style={{marginTop:5,marginRight:12,marginLeft:12,width:width-24,height:width * row.height / row.width}} source={{uri:row.bimageuri? row.bimageuri:row.cdn_img}}/>
                <View style={{marginTop:5,height:0.5,backgroundColor:'#dddddd'}}/>
                <View style={styles.cellToolStyle}>
                    <View style={{
                        flexDirection:'row',
                        width:width/4,
                        height:24,
                        borderRightWidth:0.5,
                        borderRightColor:'#dddddd',
                        justifyContent:'center',
                        alignItems:'center'}}>
                        <Image source={require('../../resource/like.png')}
                               style={{
                                   height:22,
                                   marginRight:1.5,
                                   width:22}}/>
                        <Text style={{
                            fontSize:12,
                            color:'#414141',
                            marginLeft:1.5}}>{row.ding}</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        width:width/4,
                        height:24,
                        borderRightWidth:0.5,
                        borderRightColor:'#dddddd',
                        justifyContent:'center',
                        alignItems:'center'}}>
                        <Image source={require('../../resource/unlike.png')}
                               style={{
                                   height:22,
                                   marginRight:1.5,
                                   width:22}}/>
                        <Text style={{
                            fontSize:12,
                            color:'#414141',
                            marginLeft:1.5}}>{row.cai}</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        width:width/4,
                        height:24,
                        borderRightWidth:0.5,
                        borderRightColor:'#dddddd',
                        justifyContent:'center',
                        alignItems:'center'}}>
                        <Image source={require('../../resource/share.png')}
                               style={{
                                   height:15,
                                   marginRight:1.5,
                                   width:15}}/>
                        <Text style={{
                                    fontSize:12,
                                    color:'#414141',
                                    marginLeft:1.5}}>{row.comment}</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        width:width/4,
                        height:24,
                        justifyContent:'center',
                        alignItems:'center'}}>
                        <Image source={require('../../resource/message.png')}
                               style={{
                                   height:20,
                                   marginRight:1.5,
                                   width:20}}/>
                        <Text style={{
                                    fontSize:12,
                                    color:'#414141',
                                    marginLeft:1.5}}>{row.repost}</Text>
                    </View>
                </View>
                <View style={{height:5,backgroundColor:'#dddddd'}}/>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },

    cellStyle:{

    },
    cellHeaderBoxStyle:{
        marginTop:12,
        marginLeft:12,
        marginRight:12,
        flexDirection:'row',
    },
    cellProfileImageStyle:{
        width:35,
        height:35,
        borderRadius:17.5,
    },
    cellNameBoxStyle:{
        marginLeft:12,

    },
    cellMoreBoxStyle:{
        position:'absolute',
        right:0,
        top:0,
    },
    cellMoreButtonStyle:{
        width:20,
        height:20,
        //backgroundColor:'red',
    },
    cellNameStyle:{
        color:'#414141',
        fontSize:12,
    },
    cellPassTimeStyle:{
        marginTop:5,
        color:'#414141',
        fontSize:12,
    },
    cellTextStyle:{
        // backgroundColor:'red',
        fontSize:14,
        marginLeft:12,
        marginRight:12,
        marginTop:5,

    },
    cellToolStyle:{
        height:30,
        flexDirection:'row',

        //backgroundColor:'orange',
        alignItems:'center',
    },
    footerStyle:{
        height:35,
        width: width,
        //backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        //paddingTop:10,
        flexDirection:'row',
    },
    footerTextStyle:{
        color:'orange',
        fontSize:14,
        marginLeft:5,
    },

})