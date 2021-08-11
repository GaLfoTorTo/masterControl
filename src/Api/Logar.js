import Api from './Api';

const Logar = async (cpf, senha, platform) => {
    const loginHTTP = await Api
        .post('logar', {
            cpf: cpf,
            senha: senha,
            device_name: platform
        })
        .then(function (response) {
            return response.data.user
        })
        .catch(function (error) {
            return undefined
        });
    return loginHTTP;
}

export default Logar;