import firebaseApp from "./fiorebase";
import { getDatabase,set,ref ,remove , onValue, off} from "firebase/database";

class CardRepository {
    constructor() {
        this.database = getDatabase(firebaseApp);
    }

    syncCards(userId, onUpdate) {

        const stopSync = onValue(ref(this.database, `clone/${userId}/cards`),
            (snapshot) => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return stopSync;
    }

    saveCard(userId, card) {
        set(ref(this.database, `clone/${userId}/cards/${card.id}`), {
            ...card,
        });
    }


    removeCard(userId,card) {
        remove(ref(this.database, `clone/${userId}/cards/${card.id}`));
    }

}

export default CardRepository;