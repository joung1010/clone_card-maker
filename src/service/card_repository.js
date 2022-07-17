import firebaseApp from "./fiorebase";
import { getDatabase,set,ref ,remove} from "firebase/database";

class CardRepository {
    constructor() {
        this.database = getDatabase(firebaseApp);
    }

    saveCard(userId, card) {
        set(ref(this.database, `${userId}/cards/${card.id}`), {
            ...card,
        });
    }


    remoceCard(userId,card) {
        remove(ref(this.database, `${userId}/cards/${card.id}`));
    }

}

export default CardRepository;