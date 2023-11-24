import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import store from "../redux/store"

function home_screen({navigation, route}){
    const [globalState, setGlobalState] = useState(0);

        useEffect(() => {
            const unsubscribe = store.subscribe(() => {
            setGlobalState(store.getState());
            });

            return () => {
            unsubscribe();
            };
        }, []); 
        const score = `${globalState}`;
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>HOME</Text>
            </View>
            <View style={styles.dowloadWrapper}>
                <Image style={styles.downloadImg} source={require('../assets/download_icon.png')}/>
                <Text style={styles.adText1}>TOEIC Test version for WINDOWNS</Text>
                <Text style={styles.adText2}>(ad)</Text>
            </View>
            <Text style={styles.adText3}>Estimated score</Text>
            <View style={styles.scoreWrapper}>
                <Image style={styles.scoreImg} source={require('../assets/score_img.png')}/>
                <Text style={styles.scoreText}>{score}</Text>
                <Text style={styles.maxScoreText}>/405</Text>
                <Image style={styles.headphone} source={require('../assets/headphone_icon.png')}/>
                <Image style={styles.bookmark} source={require('../assets/bookmark_icon.png')}/>
                <Text style={styles.listenText}>Listening score: --</Text>
                <Text style={styles.readingText}>Reading score: --</Text>
                <Text style={styles.note}>(Take a full text to show here)</Text>
            </View>
            <Text style={styles.adText4}>TOEIC Practice</Text>
            <View style={styles.practiceWrapper}>
                <TouchableOpacity style={styles.miniTest} onPress={()=>{
                    navigation.navigate('test_screen')
                }}>
                    <Image style={styles.rocketImg} source={require('../assets/rocket_icon.png')}/>
                    <Text style={styles.testName1}>Mini test</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fullTest} onPress={()=>{
                    navigation.navigate('test_screen')
                }}>
                    <Image style={styles.manhghepImg} source={require('../assets/manhghep_icon.png')}/>
                    <Text style={styles.testName2}>Full test</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.descWrapper}>
                <Text style={styles.testDesc1}>Random 48 questions</Text>
                <Text style={styles.testDesc2}>Full test 200 questions</Text>
            </View>
            <Text style={styles.adText5}>Practice Listening</Text>
            <View style={styles.listenWrapper}>
                <View style={styles.view1}>
                    <View style={styles.v1}>
                        <Image style={styles.v1Img} source={require('../assets/v1_img.png')}/>
                    </View>
                    <Text style={styles.v1Text}>Photographs</Text>
                </View>
                <View style={styles.view2}>
                    <View style={styles.v2}>
                        <Image style={styles.v2Img} source={require('../assets/v2_img.png')}/>
                    </View>
                    <Text style={styles.v2Text}>Question response</Text>
                </View>
                <View style={styles.view3}>
                    <View style={styles.v3}>
                        <Image style={styles.v3Img} source={require('../assets/v3_img.png')}/>
                    </View>
                    <Text style={styles.v3Text}>Conversation</Text>
                </View>
                <View style={styles.view4}>
                    <View style={styles.v4}>
                        <Image style={styles.v4Img} source={require('../assets/v4_img.png')}/>
                    </View>
                    <Text style={styles.v4Text}>Short talks</Text>
                </View>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.select1}>
                    <Image style={styles.s1Img} source={require('../assets/s1_img.png')}/>
                    <Text style={[styles.menuText, {color: 'rgba(9, 188, 162, 1)'}]}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.select2} onPress={
                    ()=>{
                        navigation.navigate('favourite_screen')
                    }}>
                    <Image style={styles.s2Img} source={require('../assets/s2_img.png')}/>
                    <Text style={styles.menuText}>Favourite</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.select3} onPress={()=>{
                    navigation.navigate('vocabulary_screen')
                }}>
                    <Image style={styles.s3Img} source={require('../assets/s3_img.png')}/>
                    <Text style={styles.menuText}>Vocabulary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.select4} onPress={()=>{
                    navigation.navigate('video_screen')
                }}>
                    <Image style={styles.s4Img} source={require('../assets/s4_img.png')}/>
                    <Text style={styles.menuText}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.select5} onPress={()=>{
                    navigation.navigate('profile_screen')
                }}>
                    <Image style={styles.s5Img} source={require('../assets/s5_img.png')}/>
                    <Text style={styles.menuText}>Profile</Text>
                </TouchableOpacity>
            </View>

        </View>              
    )
}
export default home_screen;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(253, 248, 248, 1)',
        position: 'relative'
    },
    header: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        paddingLeft: 20,
        alignItems: 'flex-start'
    },
    title: {
        fontFamily: 'Inter',
        fontSize: 25,
        fontWeight: 700,
    },
    dowloadWrapper: {
        width: '100%',
        height: 45,
        backgroundColor: 'rgba(249, 117, 114, 1)',
        justifyContent: 'center',
        paddingLeft: 15
    },
    downloadImg: {
        width: 30,
        height: 30,
        position: 'relative'
    },
    adText1: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 400,
        color: 'rgba(255, 253, 253, 1)',
        position: 'absolute',
        left: 55
    },
    adText2: {
        fontFamily: 'Inter',
        fontSize: 10,
        fontWeight: 100,
        color: 'rgba(255, 253, 253, 1)',
        position: 'absolute',
        right: 40
    },
    adText3: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 700,
        paddingLeft: 14,
        marginTop: 15
    },
    scoreWrapper: {
        width: '80%',
        height: 130,
        backgroundColor: 'rgba(253, 254, 255, 1)',
        borderRadius: 8,
        marginTop: 10,
        marginLeft: 40
    },
    scoreImg: {
        width: 90,
        height: 80,
        marginLeft: 15,
        marginTop: 25,
        position: 'relative'
    },
    scoreText: {
        fontSize: 25,
        fontWeight: 600,
        color: 'rgba(2, 190, 165, 1)',
        position: 'absolute',
        left: 52,
        top: 40
    },
    maxScoreText: {
        color: 'rgba(149, 155, 163, 1)',
        fontSize: 17,
        fontWeight: 600,
        position: 'absolute',
        left: 39,
        top: 68
    },
    headphone: {
        width: 22,
        height: 22,
        position:'absolute',
        left: 120,
        top: 30
    },
    bookmark: {
        width: 43,
        height: 43,
        position:'absolute',
        left: 110,
        top: 50
    },
    listenText: {
        fontSize: 14,
        fontWeight: 600,
        position: 'absolute',
        left: 150,
        top: 30
    },
    readingText: {
        fontSize: 14,
        fontWeight: 600,
        position: 'absolute',
        left: 150,
        top: 55
    },
    note: {
        color: 'rgba(128, 141, 150, 1)',
        fontSize: 12,
        fontWeight: 600,
        position: 'absolute',
        left: 120,
        top: 100
    },
    adText4: {
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 14,
        marginTop: 10
    },
    practiceWrapper: {
        width: '100%',
        height: 90,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    miniTest: {
        width: 150,
        height: 100,
        backgroundColor: 'rgba(232, 255, 249, 1)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    fullTest: {
        width: 150,
        height: 100,
        backgroundColor: 'rgba(233, 253, 242, 1)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    rocketImg: {
        width: 35,
        height: 35,
    },
    testName1: {
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 700,
        color: 'rgba(35, 168, 224, 1)'
    },
    manhghepImg: {
        width: 35,
        height: 35,
    },
    testName2: {
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 700,
        color: 'rgba(35, 168, 224, 1)'
    },
    descWrapper: {
        width: '80%',
        height: 50,
        marginLeft: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    testDesc1: {
        color: 'rgba(128, 141, 150, 1)',
        fontSize: 13,
        fontWeight: 700,
    },
    testDesc2: {
        color: 'rgba(128, 141, 150, 1)',
        fontSize: 13,
        fontWeight: 700,
    },
    adText5: {
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 700,
        paddingLeft: 14,
        marginTop: 15
    },
    listenWrapper: {
        width: '100%',
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    view1: {
        width: 70,
        height: 130,
        alignItems: 'center',
        flexDirection: 'column',
        border: 2
    },
    view2: {
        width: 70,
        height: 130,
        alignItems: 'center',
        flexDirection: 'column',
        border: 2
    },
    view3: {
        width: 70,
        height: 130,
        alignItems: 'center',
        flexDirection: 'column',
        border: 2
    },
    view4: {
        width: 70,
        height: 130,
        alignItems: 'center',
        flexDirection: 'column',
        border: 2
    },
    v1: {
        width: 65,
        height: 65,
        backgroundColor: 'rgba(254, 227, 236, 1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    v2: {
        width: 65,
        height: 65,
        backgroundColor: 'rgba(250, 227, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    v3: {
        width: 65,
        height: 65,
        backgroundColor: 'rgba(234, 228, 254, 1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    v4: {
        width: 65,
        height: 65,
        backgroundColor: 'rgba(228, 233, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    v1Text: {
        color: 'rgba(128, 141, 150, 1)',
        fontSize: 11,
        fontWeight: 700,
    },
    v2Text: {
        color: 'rgba(128, 141, 150, 1)',
        fontSize: 11,
        fontWeight: 700,
    },
    v3Text: {
        color: 'rgba(128, 141, 150, 1)',
        fontSize: 11,
        fontWeight: 700,
    },
    v4Text: {
        color: 'rgba(128, 141, 150, 1)',
        fontSize: 11,
        fontWeight: 700,
    },
    v1Img: {
        width: 40,
        height: 40
    },
    v2Img: {
        width: 40,
        height: 40
    },
    v3Img: {
        width: 40,
        height: 40
    },
    v4Img: {
        width: 40,
        height: 40
    },
    menu: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 2,
        borderColor: 'rgba(0, 0, 0, 1)',
        backgroundColor: 'white',
        position: 'fixed',
        bottom: 0,
        zIndex: 1
    },
    select1: {
        width: 60,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    select2: {
        width: 60,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    select3: {
        width: 60,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    select4: {
        width: 60,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    select5: {
        width: 60,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    s1Img: {
        width: 35,
        height: 35,
        marginLeft: 10
    },
    s2Img: {
        width: 35,
        height: 35
    },
    s3Img: {
        width: 35,
        height: 35,
        marginLeft: 5
    },

    s4Img: {
        width: 35,
        height: 35
    },
    s5Img: {
        width: 35,
        height: 35
    },
    menuText: {
        fontSize: 11,
        fontWeight: 700,
        textAlign: 'center'
    }
})