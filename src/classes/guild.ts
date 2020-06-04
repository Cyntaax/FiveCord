import { CordBase } from './base';
import { Snowflake } from './snowflake';
import { Role } from './role';

export class Guild {
    id: Snowflake;
    name: string;
    roles: Array<Role>;
    constructor(snowflake: Snowflake, name: string, roles: Array<Role>) {  // Construtor
        this.id = snowflake;
        this.name = name;
        this.roles = roles
    }
}