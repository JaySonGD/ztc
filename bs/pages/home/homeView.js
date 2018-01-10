/**
 * Created by ward on 2018/1/8.
 */
import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    ActivityIndicator,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import ScrollableTabView , {DefaultTabBar, ScrollableTabBar}  from 'react-native-scrollable-tab-view';

import HomeListView from './homeListView';

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
            loading : false,
        }
    }

    _renderLoading(){
        return(<ActivityIndicator style={styles.loadingStyle}
                                  animating={this.state.loading}
                                  size="large"
        />)
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
                {this.state.loading? this._renderLoading():
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarActiveTextColor='red'
                    tabBarInactiveTextColor='#rgb(67,67,67)'
                    tabBarBackgroundColor='#f7f7f7'
                    style={{height:10}}
                    tabBarUnderlineStyle={{backgroundColor:'red',height:2}}
                >
                    {
                        this.state.typeArr.map((item, i) => {
                            return (
                                <HomeListView key={i} tabLabel={item.title} type={item.type}
                                          navigator={this.props.navigator} {...this.props}/>
                            )
                        })
                    }
                </ScrollableTabView>}
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