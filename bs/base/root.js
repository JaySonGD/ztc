/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components';

import TabBar from './tabBar';

export default class root extends Component {
    render() {
        return (

            <View style={{ flex: 1 }}>
                <Navigator
                    initialRoute={{ name: 'TabBar', component: TabBar }}
                    configureScene={(route) => {
                        if (route.sceneConfig) {
                            return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.PushFromRight;
                    } }
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps} />
                        )
                    } }
                />
            </View>
        );
    }
};


