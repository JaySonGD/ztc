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

import HttpRequest from './httpRequest';

const DataJson = require('./resources/data.json');
const Screen = {height, width} = Dimensions.get('window');

export default class RadioView extends Component{

    // static navigationOptions = {
    //     // title: '',
    // };

    constructor(props){
        super(props)
        var ds = new ListView.DataSource({
                rowHasChanged:(r1,r2) =>  r1 !== r2
        })
        this.state = {
            loading : true,
            dataSource : ds.cloneWithRows(DataJson),
        }
    }

    componentDidMount() {
        HttpRequest.get('http://oz3odd99d.bkt.clouddn.com/HKRadio.json',null,(json)=>{
            console.log(typeof (json[1]))
            this.setState({
                loading:false,
                // dataSource:json,
            })
        },(error)=>{
           console.log(error)
            this.setState({
                loading:false,
            })
        })
    }

    render(){
        return(
                this.state.loading? <ActivityIndicator style={styles.loadingStyle}
                                                       animating={this.state.loading}
                                                       size="large"
                                    /> :
                <ListView dataSource={this.state.dataSource}
                          contentContainerStyle={styles.listViewStyle}
                          renderRow={this._renderRow.bind(this)}
                          pageSize={20}
                />




        )
    }

    // 实现数据源方法,每行cell外观
    _renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.cellStyle}>
                    <Image style={styles.cellImageStyle}
                           source={require('./resources/电台.png')}
                    />
                    <Text style={styles.cellTextStyle}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
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