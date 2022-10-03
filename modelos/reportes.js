const { model, Schema } = require("mongoose")

module.exports = model("reporte", new Schema({

    ServidorID: String,
    ServidorNombre: String,
    CanalID: String,
    CanalNombre: String,
    CanalComandoID: String,
    CanalComandoNombre: String,
    RolMencionID: String,
    RolMencionNombre: String
    
}))