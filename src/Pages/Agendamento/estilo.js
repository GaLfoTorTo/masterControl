import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    header:{
        width: '98%',
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 25,
        paddingHorizontal: 15,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: Colors.ligth,
        borderRadius: 10
    },
    textHeader: {
        fontSize: 17,
    },
    botaoNovo:{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        borderWidth: 2,
        padding: 5,
        paddingHorizontal: 17,
        borderColor: Colors.success,
    },
    iconNovo: {
        color: Colors.success,
        marginLeft: 5
    },
    textBotao: {
        fontSize: 17,
        color: Colors.success
    },
    card:{
        width: '99%',
        flex: 1,
        backgroundColor: Colors.ligth,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    div: {
        height: 1,
        width: '100%',
        backgroundColor: 'rgb(200, 200, 200)',
    },
    botoes:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    botaoAcoes:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        padding: 30,
    },
    textoInativo:{
        fontSize: 16,
        color: Colors.secondary
    },
    textoAtivo: {
        fontSize: 18,
        color: 'rgb(25, 138, 84)',
    },
    botaoAtivo: {
        backgroundColor: 'rgba(25, 190, 84, 0.5)',
        borderRadius: 10
    },
    cardAgendamento: {
        width: '100%',
        padding: 10,
        borderRadius: 10,
        marginTop: 1
    },
    cardCampos:{
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    campos: {
        flexDirection: 'row',
        marginBottom: 10
    },
    label: {
        color: Colors.dark,
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 3
    },
    dado:{
        color: Colors.secondary,
    },
    concluidos:{
        backgroundColor: 'rgba(25, 190, 84, 0.5)',
    },
    cancelados:{
        backgroundColor: 'rgba(255, 0, 34, 0.5)',
    },
    dadosCancelado: {
        color: Colors.light
    }
});
export default estilo;