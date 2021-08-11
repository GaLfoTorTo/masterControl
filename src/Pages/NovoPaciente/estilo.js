import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    card:{
        width: '98%',
        flex: 1,
        marginTop: 5,
        backgroundColor: Colors.ligth,
        borderRadius: 10,
        padding: 5
    },
    descricao:{
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center'
    },
    cardTitulo:{
        paddingVertical: 20,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: 'rgb(200, 200, 200)',
        borderBottomColor: 'rgb(200, 200, 200)',
    },
    titulo: {
        color: 'rgb(200,200,200)',
        fontSize: 20
    },
    form: {
        marginTop: 15
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    col: {
        flex: 1,
        paddingHorizontal: 5
    },
    col2: {
        flex: 0.4,
        paddingHorizontal: 5
    },
    label: {
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold'
    },
    cardLabel:{
        flexDirection: 'row'
    },
    input: {
        padding: 5,
        paddingLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(200, 200, 200)'
    },
    inputDate: {
        padding: 9,
    },
    obs:{
        color: Colors.dangerLight,
        marginLeft: 10
    },
    error:{
        color: Colors.danger,
        marginLeft: 10,
        fontSize: 16
    },
    obrigatorios:{
        color: Colors.danger
    },
    cadastrar:{
        alignItems: 'center',
        alignSelf: 'flex-end',
        margin: 10,
        width: '35%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.success,
        padding: 15,
        borderRadius: 5
    },
    textoBotao: {
        color: 'white',
        fontSize: 15,
        marginRight: 5
    },
    textInputData:{
        color: Colors.secondaryLight
    },
    check:{
        flex: 1,
        backgroundColor: Colors.ligth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mensagem:{
        color: Colors.success,
        fontSize: 25,
        textAlign: 'center'
    },
    errorMensagem:{
        color: Colors.danger
    },
    load:{
        width: '65%',
        height: '65%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default estilo;