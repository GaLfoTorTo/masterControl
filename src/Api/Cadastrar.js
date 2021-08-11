import Api from './Api';

const Cadastrar = async (callback, link, values) => {
    const responseHTTP = await Api
        .post(link + '/cadastrar', values)
        .then(function (response) {
            return response.data.success
        })
        .catch(function (error) {
            console.warn(error)
            return undefined
        });
    callback(responseHTTP);
}
export default Cadastrar;