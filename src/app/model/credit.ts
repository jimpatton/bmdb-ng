import { Actor } from "./actor";
import { Movie } from "./movie";

export class Credit {
    id: number;
    actor: Actor;
    movie: Movie;
    role: string;
    

constructor(id: number = 0, actor:Actor=new Actor(), movie=new Movie(), role:string = '', ){
    this.id = id;
    this.actor = actor;
    this.movie = movie;
    this.role = role;
}
}