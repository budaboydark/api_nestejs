import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    nome: String,
    usuario: String,
    senha: String,
    casa: String

})