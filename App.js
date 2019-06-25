import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { AuthSession } from 'expo';

export default class App extends React.Component {
    state = {
        CameraPermission: null
    };

    async componentDidMount() {
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({ CameraPermission: status === 'granted' })
    }

    picture = (event) => {
        alert('Connecting to flask server');
    }

    render() {
        const {CameraPermission} = this.state;
        if (CameraPermission === null) {
            return <View/>
        } else if (CameraPermission === false) {
            alert('Access to camera is required for this app. Please go to settings and enable access.');
            return (<View/>)
        } else {
            return (
                <View style={styles.container}>
                    <Camera>
                        <View style={styles.view}>
                            <TouchableOpacity style={styles.button} onPress={this.picture}>
                                <Text style={styles.text}>IDENTIFY</Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    button: {
        fontFamily: 'Arial',
        height: 80,
        width: 80,
        justifyContent: 'center',
        borderWidth: 5,
        borderRadius: 200,
        borderRightColor: 'cyan',
        borderLeftColor: 'darkblue',
        borderTopColor: 'orange',
        borderBottomColor: 'darkgreen',
        alignSelf: 'flex-end',
        marginBottom: 28,
    },
    text: {
        fontSize: 12,
        color: 'white',
        alignSelf: 'center',
    }
}