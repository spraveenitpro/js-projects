import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
    return (

        <Image source={placeholderImageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
