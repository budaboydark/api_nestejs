import { Document } from  'mongoose';

export class Users extends Document {
    nome: String;
    usuario: String;
    senha: String;
    casa: String;
}