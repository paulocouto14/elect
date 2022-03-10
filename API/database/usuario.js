const db = require('./db')


const usuario = db.sequelize.define('usuarios_new', {
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
    senha:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    telefone:{
        type: db.Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = usuario;


// usuario.sync({ force: true })
