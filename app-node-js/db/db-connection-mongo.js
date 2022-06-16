const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        console.log('Inicializando llamado a bd');
        await mongoose.connect('mongodb://root:toor@cluster0-shard-00-00.uyq2x.mongodb.net:27017,cluster0-shard-00-01.uyq2x.mongodb.net:27017,cluster0-shard-00-02.uyq2x.mongodb.net:27017/inventario?ssl=true&replicaSet=atlas-xqora7-shard-0&authSource=admin&retryWrites=true&w=majority');
        console.log('Estoy conectado');
    } catch(error) {
        console.log('Fallo la conexión a la base de datos');
    }
}

module.exports = {
    getConnection,
}