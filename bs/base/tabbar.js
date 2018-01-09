/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../pages/home/homeView';
import Profile from '../pages/profile/profileView';
import Middle from '../pages/profile/profileView';

const tabBarItems = [
    { title: '精华', icon: () => <Image style={styles.tabIconStyle} source={require('../resource/home .png')}/>,
        selectedIcon: () => <Image style={styles.tabIconStyle} source={require('../resource/home_select.png')}/>,
        component: Home },
    { title: null, icon:() => <Image style={styles.tabIconAddStyle} source={require('../resource/add.png')}/>,
       selectedIcon: () => <Image style={styles.tabIconAddStyle} source={require('../resource/add_select.png')}/>,
        component: Middle },
    // { title: '发现', icon: () => <Icon name="md-paper-plane" size={30} color='#333' style={{marginTop:20}}/>,
    //  selectedIcon: () => <Icon name="md-paper-plane" size={30} color='#d81e06' style={{marginTop:20}}/>,
    // component: Main },
    // { title: '收藏', icon: () => <Icon name="ios-star-outline" size={30} color='#333' style={{marginTop:20}}/>,
    //     selectedIcon: () => <Icon name="md-star" size={30} color='#d81e06' style={{marginTop:20}}/>,
    //     component: Main },
    { title: '我的', icon: () => <Image style={styles.tabIconStyle} source={require('../resource/wode.png')}/>,
        selectedIcon: () => <Image style={styles.tabIconStyle} source={require('../resource/wode_select.png')}/>,
        component: Profile },
];

export default class tabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: tabBarItems[0].title,
        };
    }
    render(){
        return(
            <TabNavigator tabBarStyle={styles.tabBarStyle}>
                {
                    tabBarItems.map((controller,i) => {
                        let Component = controller.component;
                        return(
                            <TabNavigator.Item
                                key={i}
                                selected = {this.state.selectedTab === controller.title}
                                title = {controller.title}
                                renderIcon = {controller.icon}
                                renderSelectedIcon = {controller.selectedIcon}
                                onPress={() => this.setState({selectedTab:controller.title})}
                                titleStyle={styles.titleStyle}
                                selectedTitleStyle={styles.selectedTitleStyle}
                                allowFontScaling={true}

                            >
                                <Component navigator = {this.props.navigator} {...this.props} />
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    tabBarStyle:{
        height:49,
    },
    tabIconStyle:{
        width: 25,
        height: 25,
        resizeMode: 'stretch',
    },
    tabIconAddStyle:{
        width: 40,
        height: 40,
        resizeMode: 'stretch',
        position: 'relative',top: 8.5,
    },
    titleStyle:{
        color:'#333',
        fontSize:12,
    },
    selectedTitleStyle:{
        color:'rgb(251,33,33)',
    },
})