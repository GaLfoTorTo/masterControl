import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '98%',
        padding: 40,
        borderRadius: 10,
        backgroundColor: Colors.ligth
    },
    indice:{
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 17,
        borderRadius: 15,
        backgroundColor: Colors.secondary
    },
    activeIndice:{
        backgroundColor: Colors.success
    },
    textIndice:{
        color: Colors.ligth
    },
    content: {
        marginTop: 10,
        width: '98%',
        padding: 5,
        borderRadius: 10,
        backgroundColor: Colors.ligth
    },
    cardsBotoes:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    botaoSalvar: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        margin: 10,
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.success,
        padding: 10,
        borderRadius: 5
    },
    textVoltar:{
        color: Colors.success
    },
    botaoVoltar:{
        borderWidth: 2,
        borderColor: Colors.success,
        backgroundColor: Colors.ligth
    }
});

export default estilo;