/**
 * Created by ward on 2018/1/8.
 */
import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import ScrollableTabView , {DefaultTabBar, ScrollableTabBar}  from 'react-native-scrollable-tab-view';


export default class HomeView extends Component{

    constructor(props){
        super(props);
        this.state = {
            typeArr : [
                {'title':'全部', 'type':'1',},
                {'title':'视频', 'type':'41',},
                {'title':'图片', 'type':'10',},
                {'title':'段子', 'type':'29',},
                {'title':'声音 ', 'type':'31',},
            ],
        }
    }


    render(){

        return(
            <View style={styles.container}>
                <NavigationBar
                    title={{
                        title: '段子王',
                        style:{
                            fontSize:24,
                            fontWeight:'bold',
                            color:'red',
                        }

                    }}
                    style={styles.navigationBarStyle}
                />
                <ScrollableTabView
                    style={{marginTop: -5,marginBottom:10 }}
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />}
                    onChangeTab={()=>{
                        alert(13)
                    }}
                    tabBarUnderlineStyle={{height:2,backgroundColor:'red'}}
                    tabBarActiveTextColor="red"
                >
                    {
                        this.state.typeArr.map((item,i)=>{
                            return(
                                <View key={i} tabLabel={item.title} type={item.type}
                                          navigator={this.props.navigator} {...this.props}/>
                            )
                        })
                    }
                </ScrollableTabView>
                <Text>段子王--homeView</Text>
            </View>
        )

    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    navigationBarStyle:{
        height:44,
        //backgroundColor:'white',
        borderBottomWidth:0.5,
        borderBottomColor:'#dddddd'
    },
})