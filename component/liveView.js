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

} from 'react-native';

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
            loading : true,
            dataSource : ds.cloneWithRows(DataJson),
            rowData : DataJson[0],
        }
    }
    componentDidMount() {
        HttpRequest.get('http://oz3odd99d.bkt.clouddn.com/hk.json',null,(json)=>{
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

        return(
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
        this.setState({
            rowData:rowData,
        })

        this.props.navigation.navigate('Play', { data: rowData })
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
        //backgroundColor:'orange',
        marginTop:12.5,
    },
    cellTextStyle:{
        marginTop:10,
        fontSize:12,
        color:'#000',
    },

})