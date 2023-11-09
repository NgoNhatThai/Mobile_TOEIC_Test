import {StyleSheet, Text, TouchableOpacity, View, Image, FlatList, SafeAreaView} from "react-native"

function profile_screen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View style={styles.updateWrapper}>
                <TouchableOpacity style={styles.vipWrapper}>
                    <Image style={styles.vipImg} source={require('../assets/vip_icon.png')}/>
                    <Text style={styles.text1}>Upgrade for Premium now</Text>
                    <Text style={styles.text2}>Manage your subscription</Text>
                </TouchableOpacity>
                <View style={styles.discountWrapper}>
                    <Text style={styles.discountText}>-50%</Text>
                </View>
            </View>
            <View style={styles.referenceWrapper}>
                <Text style={styles.referText}>References</Text>
                <View style={styles.referWrapper}>
                    <Image style={styles.referImg1} source={require('../assets/r1_icon.png')}/>
                    <Text style={styles.referTitle}>Native language</Text>
                    <Image style={styles.referImg2} source={require('../assets/arrow_icon.png')}/>
                </View>
                <View style={styles.referWrapper}>
                    <Image style={styles.referImg1} source={require('../assets/r2_icon.png')}/>
                    <Text style={styles.referTitle}>Your goal</Text>
                    <Image style={styles.referImg2} source={require('../assets/arrow_icon.png')}/>
                </View>
                <View style={styles.referWrapper}>
                    <Image style={styles.referImg1} source={require('../assets/r3_icon.png')}/>
                    <Text style={styles.referTitle}>Daily study reminder</Text>
                    <Image style={styles.referImg2} source={require('../assets/arrow_icon.png')}/>
                </View>
            </View>
            <View style={styles.referenceWrapper}>
                <Text style={styles.referText}>Comunity</Text>
                <View style={styles.referWrapper}>
                    <Image style={styles.referImg1} source={require('../assets/c1_icon.png')}/>
                    <Text style={styles.referTitle}>Rate us 5 stars</Text>
                </View>
                <View style={styles.referWrapper}>
                    <Image style={styles.referImg1} source={require('../assets/c2_icon.png')}/>
                    <Text style={styles.referTitle}>Recommend to friends</Text>
                </View>
                <View style={styles.referWrapper}>
                    <Image style={styles.referImg1} source={require('../assets/c3_icon.png')}/>
                    <Text style={styles.referTitle}>Fanpage</Text>
                </View>
                <View style={styles.referWrapper}>
                    <Image style={styles.referImg1} source={require('../assets/c4_icon.png')}/>
                    <Text style={styles.referTitle}>Feedback</Text>
                </View>
            </View>


            <View style={styles.menu}>
                <TouchableOpacity style={styles.select1} onPress={()=>{
                    navigation.navigate('home_screen')
                }}>
                    <Image style={styles.s1Img} source={require('../assets/s1_img.png')}/>
                    <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.select2}  onPress={()=>{
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
                <TouchableOpacity style={styles.select5}>
                    <Image style={styles.s5Img} source={require('../assets/s5_img.png')}/>
                    <Text style={[styles.menuText, {color: 'rgba(9, 188, 162, 1)'}]}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default profile_screen;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(253, 248, 248, 1)',
        position: 'relative'
    },
    header: {
        width: '100%',
        height: 45,
        justifyContent: 'center',
        paddingLeft: 20,
        alignItems: 'flex-start',
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    title: {
        fontFamily: 'Inter',
        fontSize: 25,
        fontWeight: 700,
    },
    updateWrapper: {
        width: '100%',
        height: 160,
        position: 'relative',
        marginTop: 25,
    },
    vipWrapper: {
        width: '90%',
        height: 150,
        borderRadius: 10,
        marginLeft: 18,
        backgroundColor: 'rgba(25, 197, 175, 1)',
        position: 'relative'
    },
    vipImg: {
        width: 70,
        height: 70,
        position: 'absolute',
        left: 10,
        top: 30
    },
    text1: {
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1)',
        position: 'absolute',
        top: 40,
        left: 100
    },
    text2: {
        fontSize: 14,
        fontWeight: 700,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1)',
        position: 'absolute',
        top: 90,
        left: 100
    },
    discountWrapper: {
        width: 80,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'rgba(247, 86, 86, 1)',
        position: 'absolute',
        right: 30,
        top: -10
    },
    discountText: {
        fontSize: 13,
        fontWeight: 700,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1)'
    },
    referenceWrapper: {
        width: '90%',
        height: 180,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        borderTopWidth: 4,
        borderTopColor: 'rgba(226, 226, 226, 1)',
        marginTop: 10
    },
    referText: {
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'left',
        marginLeft: 5,
        marginTop: 10,
        color: 'rgba(83, 144, 243, 1)'
    },
    referWrapper: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        marginTop: 2
    },
    referImg1: {
        width: 40,
        height: 40
    },
    referTitle: {
        width: 250,
        fontSize: 15,
        fontWeight: 700,
        textAlign: 'left',
        marginLeft: 10,
    },
    referImg2: {
        width: 15,
        height: 10,
        marginRight: 30,
        marginTop: 8
    },

    menu: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 2,
        borderColor: 'rgba(0, 0, 0, 1)',
        position: 'absolute',
        bottom: 0
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