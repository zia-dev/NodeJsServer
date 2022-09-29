import { PutUserDto } from './put.user.dto';

// Partial interface means that the properties of that object is optional not required
export interface PatchUserDto extends Partial<PutUserDto> {}
