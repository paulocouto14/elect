const db = require('./db')


const cliente = db.sequelize.define('clientes', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    cep:{
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    numero:{
        type: db.Sequelize.INTEGER,
        allowNull: false
    }

});

module.exports = cliente;


// cliente.sync({ force: true })
