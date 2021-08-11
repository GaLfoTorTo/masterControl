import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import estilo from './estilo';

const Home = ({navigation, route}) => {

    const user = route.params;
    console.warn(user);
    return (
        <SafeAreaView style={estilo.container}>
            <View style={estilo.header}>
                <Image 
                    style={estilo.userImg}
                    source={require('../../../assets/img/user-default.png')}
                />
                <View style={estilo.dadosUser}>
                    <View style={estilo.campo}>
                        <Text style={estilo.label}>Nome:</Text>
                        <Text style={estilo.dado}>Individuo</Text>
                    </View>
                    <View style={estilo.campo}>
                        <Text style={estilo.label}>CPF:</Text>
                        <Text style={estilo.dado}>000.000.000-00</Text>
                    </View>
                    <View style={estilo.campo}>
                        <Text style={estilo.label}>Protocólo:</Text>
                        <Text style={estilo.dado}>15t34523532</Text>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={estilo.card}>
                    <Text style={estilo.tituloCard}>Meus Exames:</Text>
                    <View style={estilo.div}></View>
                    <FlatList 
                        data={['1','1','1','1','1','1']}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => {
                            return(
                                <RectButton style={estilo.itemExame}>
                                    <View style={estilo.dadosUser}>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Exame:</Text>
                                            <Text style={estilo.dadoExame}>xxxxx</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Data</Text>
                                            <Text style={estilo.dadoExame}>00/00/0000</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Protocólo:</Text>
                                            <Text style={estilo.dadoExame}>15t34523532</Text>
                                        </View>
                                    </View>
                                </RectButton>
                            )
                        }}
                    />
                </View>
                <View style={estilo.card}>
                    <Text style={estilo.tituloCard}>Meus Agendamentos:</Text>
                    <View style={estilo.div}></View>
                    <FlatList 
                        data={[{ paciente: 'teste', status: 'Marcado' }, { paciente: 'teste2', status: 'Marcado' }, { paciente: 'teste3', status: 'Marcado' },'1','1','1']}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => {
                            return(
                                <TouchableOpacity 
                                    style={estilo.itemAgendamento}
                                    onPress={() => navigation.navigate('Visualizar', {item})}
                                >
                                    <View style={estilo.dadosAgendamento}>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Paciente:</Text>
                                            <Text style={estilo.dado}>XXXXXXXXXX </Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Data:</Text>
                                            <Text style={estilo.dado}>00/00/0000</Text>
                                        </View>
                                    </View>
                                    <View style={estilo.dadosAgendamento}>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Protocolo:</Text>
                                            <Text style={estilo.dado}>09079795342</Text>
                                        </View>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Laudo:</Text>
                                            <Text style={estilo.dado}>XXXXXXXX</Text>
                                        </View>
                                    </View>
                                    <View style={estilo.dadosAgendamento}>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Procedimento:</Text>
                                            <Text style={estilo.dado}>XXXXXXXXXXXX</Text>
                                        </View>
                                    </View>
                                    <View style={estilo.dadosAgendamento}>
                                        <View style={estilo.campo}>
                                            <Text style={estilo.label}>Modalidade:</Text>
                                            <Text style={estilo.dado}>XXXXXXXXX</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;