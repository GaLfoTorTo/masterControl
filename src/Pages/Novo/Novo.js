import React, { useState } from 'react';
import {
    FlatList,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import estilo from './estilo';
import Form1 from '../../Components/Form/Form1'
import Form2 from '../../Components/Form/Form2'
import Form3 from '../../Components/Form/Form3'
import Form4 from '../../Components/Form/Form4'
import { RectButton } from 'react-native-gesture-handler';

const Novo = ({navigation}) => {
    const [indice, setIndice] = useState(1);
    const fade = new Animated.Value(1);

    const fadeAnimation = () => {
        Animated.timing(fade, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() =>{
            Animated.timing(fade, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();
        })

    };

    const voltar = () => {
        //fadeAnimation()
        setIndice(indice - 1);
    }

    const proximo = () => {
        //fadeAnimation()
        if(indice < 4){
            setIndice(indice + 1);
        }
    }
    return (
        <ScrollView>
            <View style={estilo.header}>
                <FlatList 
                    data={['1','2','3','4']}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return(
                            <View style={[estilo.indice, indice == item && estilo.activeIndice]}>
                                <Text style={estilo.textIndice}>{item}</Text>
                            </View>
                        );
                    }}
                />
            </View>
            <Animated.View style={[estilo.content, {opacity: fade}]}>
                {(() =>{
                    switch(indice){
                        case 1:
                            return <Form1 />
                        case 2:
                            return <Form2 />
                        case 3:
                            return <Form3 />
                        case 4:
                            return <Form4 />
                        default:
                            break;
                    }
                })()}
                <View style={estilo.cardsBotoes}>
                    {indice > 1 && 
                        <TouchableOpacity 
                            style={[estilo.botaoSalvar, estilo.botaoVoltar]}
                            onPress={() => voltar()}
                        >
                            <Text style={estilo.textVoltar}>Voltar</Text>
                        </TouchableOpacity>
                    }
                    {indice < 4 ?
                        <RectButton
                            style={estilo.botaoSalvar}
                            onPress={() => proximo()}
                        >
                            <Text style={estilo.textIndice}>Proximo</Text>
                        </RectButton>
                    :
                        <RectButton
                            style={estilo.botaoSalvar}
                            onPress={() => {}}
                        >
                            <Text style={estilo.textIndice}>Salvar</Text>
                            <Icon name="save" size={20} color='white' />
                        </RectButton>
                    }                    
                </View>
            </Animated.View>
        </ScrollView>
    );
}

export default Novo;