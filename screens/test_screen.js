import {StyleSheet, Text, TouchableOpacity, View, Image, FlatList, SafeAreaView, TextInput} from "react-native"
import {useState, useEffect} from "react"
import savePoint from "../redux/action"
import store from "../redux/store"
import action from "../redux/action"

function test_screen({navigation}){
    const [data, setData]= useState({})
    const [select, setSelect]= useState()
    const [question, setQuesion] = useState('')
    const [flag, setFlag]= useState(true)

    useEffect(()=>{
        getQuestion();
        
    }, [])
    
    const getQuestion = ()=>{
        fetch('https://654108cc45bedb25bfc31cd9.mockapi.io/ToeicQuestion/1')
        .then(response => response.json())
        //.then(json=>console.log(json))
        .then((json)=>{
            setData(json)
        })
    }

    console.log(data);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Lab 7</Text>
                <TouchableOpacity style={styles.submitButton} onPress={()=>{
                    if(select==data.true){
                        action.value=10;
                        store.dispatch(action)                       
                        navigation.navigate('score_screen', {score: 10})
                    } else {
                        action.value=0;
                        store.dispatch(action)                        
                        navigation.navigate('score_screen', {score: 0})
                    }
                }}>
                    <Text style={[styles.title, {color: 'rgba(2, 190, 165, 1)'}]}>Submit</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.adText1}>Title</Text>
            <Text style={styles.adText2} editable={false} >{flag===true ? data.title : data.translate}</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>{
                //Set flag to translate
                setFlag(!flag)
            }}>
                <Text style={styles.btnText}>Translate</Text>
            </TouchableOpacity>
            <View style={styles.questionWrapper}>
                <Text style={styles.question}>{data.question}</Text>
            </View>
            


            <View style={[styles.answer, {backgroundColor: `${select==1 ? 'rgba(205, 240, 62, 1)' : 'rgba(253, 248, 248, 1)'}`}]}>
                <TouchableOpacity style={styles.selectBtn} onPress={()=>{
                    setSelect(1)
                }}>
                    <Text style={styles.adText3}>A</Text>
                </TouchableOpacity>
                <Text style={styles.adText4}>{data.answer1}</Text>
            </View>
            <View style={[styles.answer, {backgroundColor: `${select==2 ? 'rgba(205, 240, 62, 1)' : 'rgba(253, 248, 248, 1)'}`}]}>
                <TouchableOpacity style={styles.selectBtn} onPress={()=>{
                    setSelect(2)
                }}>
                    <Text style={styles.adText3}>B</Text>
                </TouchableOpacity>
                <Text style={styles.adText4}>{data.answer2}</Text>
            </View>
            <View style={[styles.answer, {backgroundColor: `${select==3 ? 'rgba(205, 240, 62, 1)' : 'rgba(253, 248, 248, 1)'}`}]}>
                <TouchableOpacity style={styles.selectBtn} onPress={()=>{
                    setSelect(3)
                }}>
                    <Text style={styles.adText3}>C</Text>
                </TouchableOpacity>
                <Text style={styles.adText4}>{data.answer3}</Text>
            </View>
            <View style={[styles.answer, {backgroundColor: `${select==4 ? 'rgba(205, 240, 62, 1)' : 'rgba(253, 248, 248, 1)'}`}]}>
                <TouchableOpacity style={styles.selectBtn} onPress={()=>{
                    setSelect(4)
                }}>
                    <Text style={styles.adText3}>D</Text>
                </TouchableOpacity>
                <Text style={styles.adText4}>{data.answer4}</Text> 
            </View>
        </View>
    )
}
export default test_screen;
const styles=StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(253, 248, 248, 1)',
        position: 'relative'
    },
    header: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        alignItems: 'flex-start',
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    title: {
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center'
    },
    adText1: {
        fontFamily: "Inter",
        fontSize: 18,
        textAlign: 'left',
        fontStyle: "italic",
        fontWeight: 600,
        margin: 10
    },
    adText2: {
        width: '90%',
        height: 180,
        margin: 15,
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: 400,
        textAlign: 'left'
    },
    btn: {
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 40,
        marginTop: 20,
        backgroundColor: 'rgba(9, 188, 162, 1)',
        borderRadius: 10
    },
    btnText: {
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center',
        color: 'rgba(255, 253, 253, 1)'
    },
    questionWrapper: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(35, 168, 224, 1)',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 15
    },
    question: {
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: 700,
        textAlign: 'center',
        marginLeft: 15
    },
    answer: {
        width: '95%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 15,
        marginLeft: 5,
        borderRadius: 10,
        paddingLeft: 10
    },
    selectBtn: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(217, 217, 217, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    adText3: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'left',
        marginLeft: 2,
        marginTop: 5
    },
    adText4: {
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'left',
        marginLeft: 5,
        marginTop: 12
    }
})