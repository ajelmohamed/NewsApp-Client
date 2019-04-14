import { Categorie } from './Categorie';
import { Like } from './Like';
import { Admin } from './Admin';
import { Comment } from './Comment';

export class Post {
	idPost:String;
	titlePost:String ;
	contenuePost : string;
	datePost : string;
	photoPost :string;
    videoPost : string;
    admin:Admin;
    categoriePost:Categorie;
    listLike:Like[];
    listComment: Comment[];
    constructor() {
    }

}