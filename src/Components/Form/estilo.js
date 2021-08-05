import {StyleSheet} from 'react-native';
import Colors from '../../Style/Colors';

const estilo = StyleSheet.create({
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
    label: {
        marginLeft: 10,
        fontSize:  17,
        fontWeight: 'bold'
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
    cpf_cnpj:{
        flexDirection: 'row'
    },
    readOnly: {
        backgroundColor: 'rgb(230, 230, 230)',
    },
    radiosButton:{
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgb(200, 200, 200)',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5
    },
    borderSelected:{
        borderColor: Colors.primary
    },
    selected: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: Colors.primary
    },
});

export default estilo;