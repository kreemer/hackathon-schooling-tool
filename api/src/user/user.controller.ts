import { Controller, Get, Param } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number): Promise<User> {
    return this.userService.findOne(id);
  }
}
