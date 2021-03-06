class DateHelper {

    constructor() {
        throw new Error('DateHelper nao pode ser instanciada');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() +1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');

            return new Date(...texto
                .split('-')
                .map((item, indice) => item - indice % 2)
            );
        }
        // let data = new Date(this._inputData.value.split('-'));
        // let data = new Date(this._inputData.replace(/-/g, ','));
        // let data = new Date(...
        //             this._inputData
        //             .value
        //             .split('-')
        //             .map(function(item, indice){
        //                 return item - indice % 2;
        //             }));
}