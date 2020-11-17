/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

const styles = StyleSheet.create({
    viewCont: {
        backgroundColor: '#95a5a6',
        borderRadius: 6,
        margin: 15,
        padding: 12,
    },
    viewFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 5
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white'
    },
    year: {
        color: 'white'
    },
    imagePerfil: {
        width: 80,
        height: 80,
        borderRadius: 100,
        overflow: 'hidden'
    },
    viewCargo: {
        marginBottom: 5
    },
    titleBio: {
        color: '#828383',
        marginBottom: 10
    },
    nameCargo: {
        marginBottom: 10
    },
    containerFlex: {
        flex: 1,
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        flexDirection: 'column',
    },
    itemDescripcion: {
        color: '#828383',
        marginBottom: 10
    }
});

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.viewCont}>
                        {/* Perfil */}
                        <View style={styles.viewFlex}>
                            <View>
                                <Text style={styles.name}>Daniel Godoy</Text>
                                <Text style={styles.year}>30</Text>
                            </View>
                            <Image
                                style={styles.imagePerfil}
                                source={{
                                    uri: 'https://lh3.googleusercontent.com/ogw/ADGmqu9ZFPFZtCFt5UfexhXVPm-90F-wrw32x-Y-9ECasQ=s64-c-mo'
                                }}
                            ></Image>
                        </View>

                        {/* Nombre Cargo */}
                        <View style={styles.viewCargo}>
                            <Text style={styles.titleBio}>Bio:</Text>
                            <Text style={styles.nameCargo}>Full Stack Developer</Text>
                        </View>

                        {/* Descripcion */}
                        <View>
                            <Text style={styles.itemDescripcion}>Descripción:</Text>
                            <View style={styles.containerFlex}>
                                <View style={styles.item}>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam odio, suscipit in erat at, lacinia dapibus dui. Aenean eleifend tristique urna sit amet scelerisque. Sed tincidunt sem quam. Nam id libero erat. Fusce vulputate malesuada nisl ac dapibus. Proin pretium mi sit amet sagittis congue. Integer pharetra lorem vel massa blandit ullamcorper.</Text>
                                </View>
                                <View style={styles.item}>
                                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam odio, suscipit in erat at, lacinia dapibus dui. Aenean eleifend tristique urna sit amet scelerisque. Sed tincidunt sem quam. Nam id libero erat. Fusce vulputate malesuada nisl ac dapibus. Proin pretium mi sit amet sagittis congue. Integer pharetra lorem vel massa blandit ullamcorper.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default App;
