/**
 * Created by ward on 2018/1/8.
 */
/**
 * Created by ward on 2018/1/8.
 */
import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class ProfileView extends Component{

    constructor(props){
        super(props)
        this.state = {
            avatarSource : null,
        }
    }

    render(){

        return(
            <View style={styles.container}>
                <Text>ProfileView</Text>
                {this.state.avatarSource? <Image source={this.state.avatarSource} style={{width:100,height:100}}/> : null}
                <Button title="上传" onPress={()=>{
                    this._selectImage()
                }}/>
            </View>
        )



    }

    _selectImage(){
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                })
            }
        })
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
    },
})