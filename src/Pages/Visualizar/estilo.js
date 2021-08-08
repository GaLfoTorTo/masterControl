import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center'
    },
    doc:{
        width: '98%',
        padding: 10,
        backgroundColor: Colors.ligth,
        borderRadius: 10,
    },
    headerDoc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        alignItems: 'flex-end'
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    info: {
        fontSize: 15,
    },
    div: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.secondaryLight,
        marginVertical: 10
    },
    contentDoc:{
        marginTop: 10
    },
    campoDados:{
        backgroundColor: 'rgba(200, 200, 200, 0.2)',
        padding: 3,
        paddingLeft: 10,
        borderRadius: 5
    },
    statusMarcado: {
        backgroundColor: 'rgba(0, 170, 200, 0.3)'
    },
    textStatusMarcado:{
        color: 'rgb(0, 130, 200)'
    },
    statusConcluido: {
        backgroundColor: 'rgba(25, 190, 84, 0.3)',
    },
    textStatusConcluido: {
        color: Colors.success
    },
    statusCancelado:{
        backgroundColor: 'rgba(255, 0, 34, 0.3)',
    },
    textStatusCancelado: {
        color: Colors.danger
    },
    campo:{
        flexDirection: 'row',
        marginVertical: 5
    },
    label:{
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 3
    },
    dataCampo:{
        fontSize: 17,
        color: Colors.secondary
    },
    botaoCancelar: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        margin: 10,
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.danger,
        padding: 10,
        borderRadius: 5
    },
    textCancelar: {
        color: Colors.ligth
    },
    textResumo: {
        fontSize: 17
    }
});

export default estilo;