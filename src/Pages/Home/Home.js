import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { AuthContext } from '../../Components/Context';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import estilo from './estilo';
import { getUser } from '../../Storage/Storage';

const Home = ({navigation}) => {

    const [info, setInfo] = useState(false);
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    const {signOut} = useContext(AuthContext);
    
    useEffect(() => {
        const dataUser = async () => {
            const data = await getUser()
            setUser(data.user)
            setToken(data.token)
            return data
        }
        dataUser()
    },[])

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
                        <Text style={estilo.dado}>{user != null && user.nome}</Text>
                    </View>
                    <View style={estilo.campo}>
                        <Text style={estilo.label}>CPF:</Text>
                        <Text style={estilo.dado}>{user != null && user.cpf}</Text>
                    </View>
                    <View style={estilo.campo}>
                        <Text style={estilo.label}>RG:</Text>
                        <Text style={estilo.dado}>{user != null && user.rg}</Text>
                    </View>
                </View>
            </View>
            <RectButton
                onPress={() => setInfo(!info)}
                style={estilo.moreInfoBotao}
            >
                <Text style={estilo.textInfo}>Mais Informações</Text>
            </RectButton>
            {info == true && 
                <View style={estilo.moreInfo}>
                    <View style={estilo.moreDadosuser != null && User}>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Data de nascimento:</Text>
                            <Text style={estilo.dado}>{user != null && user.data_nascimento}</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>CEP:</Text>
                        <Text style={estilo.dado}>{user != null && user.cep}</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Logradouro:</Text>
                            <Text style={estilo.dado}>{user != null && user.logradouro}</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Número</Text>
                            <Text style={estilo.dado}>{user != null && user.numero}</Text>
                        </View>
                    </View>
                    <View style={estilo.moreDadosuser != null && User}>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Bairro:</Text>
                            <Text style={estilo.dado}>{user != null && user.bairro}</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Cidade:</Text>
                            <Text style={estilo.dado}>{user != null && user.cidade}</Text>
                        </View>
                        <View style={estilo.campo}>
                            <Text style={estilo.label}>Estado:</Text>
                            <Text style={estilo.dado}>{user != null && user.uf}</Text>
                        </View>
                    </View>
                    <RectButton 
                        style={estilo.botaoSair}
                        onPress={() => {signOut()}}
                    >
                        <Text style={estilo.textIconSair}>Sair</Text>
                    <Icon name='sign-out-alt' size={20} color='white'/>
                    </RectButton>
                </View>
            }
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