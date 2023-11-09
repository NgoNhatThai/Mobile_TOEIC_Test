import {StyleSheet, Text, TouchableOpacity, View, Image, FlatList, SafeAreaView} from "react-native"
const data =[
    {
        url: require('../assets/lession_img.png'),
        title: 'Lession 1: Cho người mới bắt đầu'
    },
    {
        url: require('../assets/lession_img.png'),
        title: 'Lession 2: Các từ vựng thường gặp'
    },
    {
        url: require('../assets/lession_img.png'),
        title: 'Lession 3: Làm quen với tranh'
    },
    {
        url: require('../assets/lession_img.png'),
        title: 'Lession 4: Làm quen với Listening'
    },
]
const Item =({url, title}) => (
    <TouchableOpacity style={styles.wrapper}>
        <Image style={styles.img} source={url}/>
        <Text style={styles.name}>{title}</Text>
    </TouchableOpacity>
)
function video_screen({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Vocabulary</Text>
            </View>
            <SafeAreaView>
                <FlatList 
                    data={data}
                    keyExtractor={item => item.title}
                    renderItem={({item})=><Item url={item.url} title={item.title}/>}
                />
            </SafeAreaView>
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
                <TouchableOpacity style={styles.select4}>
                    <Image style={styles.s4Img} source={require('../assets/s4_img.png')}/>
                    <Text style={[styles.menuText, {color: 'rgba(9, 188, 162, 1)'}]}>Video</Text>
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
export default video_screen;
const styles = StyleSheet.create({
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
    wrapper: {
        width: 330,
        height: 80,
        marginTop: 15,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        flexDirection: 'row',
        borderRadius: 8
    }, 
    img: {
        width: 50,
        height: 50,
        marginLeft: 5,
        marginTop: 15
    },
    name: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 700,
        textAlign: 'center',
        marginLeft: 10,
        marginTop: 25
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