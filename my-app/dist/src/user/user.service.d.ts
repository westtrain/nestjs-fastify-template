import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<import("./user.schema").User>;
    findAllUsers(): Promise<import("./user.schema").User[]>;
}
