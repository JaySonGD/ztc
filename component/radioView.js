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
    ActivityIndicator,
    ListView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import Video from 'react-native-video';

import HttpRequest from './httpRequest';

const DataJson = require('./resources/data.json');
const Screen = {height, width} = Dimensions.get('window');

export default class RadioView extends Component{



    static navigationOptions = ({ navigation }) => ({
        // title: '',
        //headerRight:<Image source={require('./resources/电视.png')}/>, // 设置导航条右侧。可以是按钮或者其他。
        headerLeft:
            <TouchableOpacity onPress={()=>{
            navigation.navigate('Player', { user: 'Lucy' })
                }}
            >
                <Image source={require('./resources/音乐.png') }
                 style={{width:30,height:30,marginLeft:12}}
                />


            </TouchableOpacity>, // 设置导航条左侧。可以是按钮或者其他。
    });

    constructor(props){
        super(props)
        var ds = new ListView.DataSource({
                rowHasChanged:(r1,r2) =>  r1 !== r2
        })
        this.state = {
            loading : true,
            dataSource : ds.cloneWithRows([]),
            rowData : null,
        }
    }

    componentDidMount() {
        HttpRequest.get('http://oz3odd99d.bkt.clouddn.com/HKRadio.json',null,(json)=>{
            this.setState({
                loading:false,
                dataSource:(new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})).cloneWithRows(json),
            })
        },(error)=>{
           console.log(error)
            this.setState({
                loading:false,
            })
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

        this.state.rowData? console.log(11):console.log(22)
        var obj = this.state.rowData;
        var self = this
        return(
            <View>
                <ListView dataSource={this.state.dataSource}
                          contentContainerStyle={styles.listViewStyle}
                          renderRow={this._renderRow.bind(this)}
                          pageSize={20}
                />
                {this.state.rowData? <Video source={{uri:obj.url}}
                                              style={styles.videotyle}/>:null}
            </View>

        )
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
                           // source={require('./resources/电台.png')}
                           source={{uri:rowData.thumb}}
                    />
                    <Text style={styles.cellTextStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _didClickRow(rowData){
        this.setState({
            rowData:rowData,
        })
    }
}


const styles = StyleSheet.create({

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
        backgroundColor:'orange',
        marginTop:12.5,
    },
    cellTextStyle:{
        marginTop:10,
        fontSize:12,
        color:'#000',
    },


})