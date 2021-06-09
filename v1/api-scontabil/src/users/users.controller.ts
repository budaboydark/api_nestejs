import { Controller, Get , Post, Put, Delete, Param, Body} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUsers(): Promise<Users[]> {
    return await this.userService.getUsers();
  }

  @Get(':id')
  async getUsersId(@Param('id') id: string): Promise<Users> {
    return await this.userService.getUserId(id);
  }

  @Post()
  async createUsers(@Body() users: Users): Promise<Users>  {
    console.log(users)
    return await this.userService.create(users);
  }

  @Put(':id')
  async updateUsers(@Param('id') id: string,@Body() users: Users): Promise<Users> {
    return await this.userService.update(id, users);
  }

  @Delete(':id')
  async deleteUsers(@Param('id') id: string){
    this.userService.delete(id);
  }

}
