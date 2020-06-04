import { Snowflake } from './snowflake';
import { Role } from './role';

// TODO Get data from api for guild
export class Guild {
    id: Snowflake;
    // name: string; 
    // roles: Array<Role>;
    constructor(snowflake: Snowflake) {  // Construtor
        this.id = snowflake;
        // this.name = name
        // this.roles = roles
    }
}