import { StyleSheet } from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: Colors.success
    },
    cardLogo:{
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        color: Colors.ligth
    },
    cardMessage: {
        position: 'relative',
        bottom: 10,
        width: '90%',
        backgroundColor: Colors.danger,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        flexDirection: 'row'
    },
    textMessage: {
        color: Colors.ligth,
        textAlign: 'center',
        flex: 0.9
    },
    cardInputs: {
        flex: 0.6,
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        paddingVertical: 15,
    },
    tecladoOpen: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 30
    },
    input: {
        backgroundColor: 'rgb(230, 230, 240)',
        borderRadius: 10,
        marginVertical: 5,
        padding: 10,
        width: '88%'
    },
    botao: {
        backgroundColor: Colors.success,
        width: '88%',
        height: '15%',
        borderRadius: 20,
        marginTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        color: 'white',
        fontSize: 20,
    },
    cardBotoes: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },
    botao2: {
        backgroundColor: Colors.primary,
        width: 50,
        height: 50,
        borderRadius: 13,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoSenha: {
        backgroundColor: Colors.danger
    },
    load:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    }
})

export default estilo;