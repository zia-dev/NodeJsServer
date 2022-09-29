export interface CreateUserDto {
    id: string;
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    permissionLevel?: number;

    // name and level are optional
}
