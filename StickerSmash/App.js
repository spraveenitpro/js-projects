import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

const PlaceholderImage = require('./assets/images/background-image.png');
import ImageViewer from './components/MyimageViewer';


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage} />
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    image: {
        width: 300,
        height: 440,
        borderRadius: 18
    }

});
