/**
 * Created by czljcb on 2017/12/26.
 */
import React,{Component} from 'react';

import {
    View,
    Text,
    ListView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


export default class App extends Component{

    constructor(props){
        super(props)

        var ds = new ListView.DataSource(
            {
                rowHasChanged:(r1,r2) =>  r1 !== r2,
                sectionHeaderHasChanged:(s1,s2) => s1 !== s2
            }
        )

        this.state = {
            dataSource : ds.cloneWithRowsAndSections([['a','b','d','e',],['111','2222','333','111','2222']])
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <ListView
                    style={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={this._renderSeparator.bind(this)}
                    renderHeader={this._renderHeader.bind(this)}
                    renderFooter={this._renderFooter.bind(this)}
                    onChangeVisibleRows={this._onChangeVisibleRows.bind(this)}
                    onEndReached={()=>{
                        console.log('onEndReached')
                    }}
                    onEndReachedThreshold = {100}

                    stickySectionHeadersEnabled = {true}
                    renderSectionHeader={(sectionData, sectionID) =>{
                        return(
                            <View style={styles.cellSectionHeader}></View>
                        )
                    }}


                />
            </View>
        )
    }
    // 实现数据源方法,每行cell外观
    _renderRow(rowData, sectionID, rowID, highlightRow) {
        console.log(rowData)
        return (

            <TouchableOpacity onPress={()=>{
                highlightRow(sectionID,rowID)
            }}>
                <View style={styles.cell}>
                    <Text style={styles.cellText}>{99}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted){
        return(
            <View style={styles.cellLine}/>
        )
    }


    _renderHeader(){
        return(
            <View style={styles.listViewHeader}/>
        )
    }

    _renderFooter(){
        return(
            <View style={styles.listViewFooter}/>
        )
    }

    _onChangeVisibleRows(visibleRows, changedRows){
        console.log('4444')
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },

    listView:{
        flex:1,
        marginTop:20,
    },
    cell:{
        height:100,
        flexDirection:'row',
        alignItems:'center',
    },

    cellText:{
        backgroundColor:'red',
        marginLeft:15,
        color:'white',
        fontSize:18,
    },

    cellSectionHeader:{
        backgroundColor:'blue',
        height:50,
    },

    cellLine:{
        height:0.5,
        backgroundColor:'black',
    },

    listViewHeader:{
        height:100,
        backgroundColor:'red',
    },


    listViewFooter:{

        height:100,
        backgroundColor:'green',
    },
})

