import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users';

@Injectable()
export class UsersService {

    constructor(@InjectModel('usuarios') private readonly usersModel: Model<Users>) { }

    async getUserId(id: string){
        return await this.usersModel.findById(id).exec();
    }

    async getUsers() {
        return await this.usersModel.find().exec();
    }

    async create(users: Users) {
        const createUsers = new this.usersModel(users);
        return await createUsers.save();
    }

    async update(id: string, users: Users) {
        await this.usersModel.updateOne({_id: id},users).exec();
        return this.getUserId(id);
    }

    async delete(id: string) {
        return await this.usersModel.deleteOne({_id: id}).exec();
    }


}
