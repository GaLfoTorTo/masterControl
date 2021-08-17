import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Style/Colors';

const medidas = Dimensions.get('screen').width;
const estilo = StyleSheet.create({
    container: {
        flex: 1,        
    },
    header: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        padding: 3,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userImg:{
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    dadosUser: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    campo: {
        flexDirection: 'row'
    },
    label: {
        fontWeight: 'bold',
        color: Colors.dark,
        fontSize: 16,
        marginRight: 5
    },
    dado:{
        fontSize: 15,
        color: Colors.secondary
    },
    dadoExame: {
        fontSize: 15,
        color: Colors.ligth
    },
    div:{
        height: 1,
        width: medidas,
        backgroundColor: 'rgb(200, 200, 200)',
        marginVertical: 10
    },
    card: {
        alignItems: 'center',
        backgroundColor: Colors.ligth,
        marginVertical: 10,
        paddingVertical: 10,
    },
    tituloCard: {
        fontSize: 18,
        color: Colors.secondary
    },
    itemExame: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        width: 190,
        height: 90,
        borderRadius: 15,
        padding: 5,
        backgroundColor: Colors.success
    },
    itemAgendamento: {
        width: medidas,
        height: 150,
        marginVertical: 5,
        padding: 5,
        backgroundColor: Colors.infoLight
    },
    dadosAgendamento:{
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginVertical: 5,
        flexDirection: 'row'
    },
    moreInfoBotao: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 10,
        borderTopWidth:1,
        borderTopColor: Colors.secondaryLight,
    },
    moreInfo: {
        width: '100%',
        paddingHorizontal: 5,
        borderTopWidth: 1,
        borderTopColor: Colors.secondaryLight,
    },
    moreDadosUser: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 3
    },
    textInfo:{
        color: Colors.secondaryLight,
        fontSize: 16,
        alignSelf: 'center'
    },
    botaoSair:{
        backgroundColor: Colors.danger,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        width: '20%',
        padding: 7,
        flexDirection: 'row',
        borderRadius: 5
    },
    textIconSair: {
        color: Colors.ligth,
        fontSize: 16,
        marginRight: 5
    }
})

export default estilo;