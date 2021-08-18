import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../Style/Colors';

const medidas = Dimensions.get('screen').width;
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
    div: {
        height: 1,
        width: medidas,
        backgroundColor: 'rgb(200, 200, 200)',
        marginVertical: 10
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
    },
    //estilo form

    form: {
        //flex: 1,
        padding: 5
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
    textInputData: {
        color: 'rgba(200, 200, 200, 0.7)'
    },
    textoBotao: {
        color: 'white',
        fontSize: 15,
        marginRight: 5
    },
    cpf_cnpj: {
        flexDirection: 'row'
    },
    readOnly: {
        backgroundColor: 'rgb(230, 230, 230)',
    },
    radiosButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgb(200, 200, 200)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    borderSelected: {
        borderColor: Colors.primary
    },
    selected: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: Colors.primary
    },
    obs:{
        color: Colors.danger,
        fontSize: 17
    },
    dadosUsuario: {
        alignItems: 'flex-start',
        marginLeft: 10
    },
    dadosUser: {
        backgroundColor: 'rgba(200, 200, 200, 0.2)',
        borderRadius: 5,
        marginBottom: 15
    },
    campo: {
        flexDirection: 'row',
        marginVertical: 3
    },
    label: {
        marginLeft: 10,
        marginRight: 5,
        fontSize: 17,
        fontWeight: 'bold'
    },
    dado: {
        fontSize: 15,
        color: Colors.secondary
    },
    obsConfirmacao:{
        marginLeft: 10,
        fontSize: 17,
        color: Colors.dangerLight
    }
});

export default estilo;