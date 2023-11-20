import {StyleSheet, Text, TouchableOpacity, View, Image, FlatList, SafeAreaView} from "react-native"

function score_screen({navigation, route}){
    const {score}= route.params
    console.log(score);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Score</Text>
            </View>

            <View style={styles.scoreWrapper}>
                <Text style={styles.text1}>Your score: </Text>
                <Text style={styles.scoreText}>{score}</Text>
            </View>

            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btnRetry} onPress={()=>{
                    navigation.navigate('test_screen')
                }}>
                    <Text style={styles.btnText}>Retry</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnHome} onPress={()=>{
                    navigation.navigate('home_screen', {flag: 1})
                }}>
                    <Text style={styles.btnText}>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default score_screen;
const styles= StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(253, 248, 248, 1)',
        flexDirection:'column'
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
    scoreWrapper: {
        width: '100%',
        height: 50,
        marginTop: 150,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text1: {
        fontFamily: 'Inter',
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'center'
    },
    scoreText: {
        fontFamily: 'Inter',
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'center',
        marginLeft: 10,
        color: 'blue',
    },
    btnWrapper: {
        width: '100%',
        height: 150,
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnRetry: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'rgba(2, 190, 165, 1)',
        alignItems: 'center'
    },
    btnHome: {
        width: 100,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'rgba(2, 190, 165, 1)',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 700,
        marginTop: 5
    }
})