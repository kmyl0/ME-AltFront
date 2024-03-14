import { IResponse } from "./response";
import { Rol } from "./roles";

export interface UserResults extends IResponse{
    gestion_tipo_id: number,
    user_id: string,
    p_id: string,
    username: string,
    persona: string,
    roles:Rol[]
    token: string,
    refreshToken: string,
}