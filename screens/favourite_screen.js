import { Text, View, StyleSheet, Image, TouchableOpacity} from "react-native"

function favourite_screen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Favourite</Text>
            </View>
            <View style={styles.imgWrapper}>
                <Image style={styles.img} source={require('../assets/books.png')}/>
                <Text style={styles.text}>Saved Question</Text>
            </View>
            <View style={styles.questionWrapper}>
                <Image style={styles.checkImg} source={require('../assets/check_icon.png')}/>
                <Text style={styles.questionText}>Question ID: ---</Text>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.select1} onPress={()=>{
                    navigation.navigate('home_screen')
                }}>
                    <Image style={styles.s1Img} source={require('../assets/s1_img.png')}/>
                    <Text style={styles.menuText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.select2}>
                    <Image style={styles.s2Img} source={require('../assets/s2_img.png')}/>
                    <Text style={[styles.menuText, {color: 'rgba(9, 188, 162, 1)'}]}>Favourite</Text>
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
export default favourite_screen;
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
    imgWrapper: {
        width: '100%',
        height: 170,
        marginTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    img: {
        width: 90,
        height: 100
    },
    text: {
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center'
    },
    questionWrapper: {
        width: '100%',
        height: 60,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    checkImg: {
        width: 40,
        height: 40,
        marginTop: 5
    },
    questionText: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 700,
        textAlign: 'center',
        marginLeft: 15,
        marginTop: 15    
    },
    menu: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
        boxShadow: '8px -5px 0px 0px rgba(0, 0, 0, 0.1)',
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
        width: 39,
        height: 34,
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