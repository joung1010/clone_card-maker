import './app.module.css';
import Login from "./component/login/login";
import styles from './app.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Maker from "./component/maker/maker";
import CardRepository from "./service/card_repository";

function App({authService,FileInput,cardRepository}) {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login authService={authService}/>}/>
                    <Route exact path="/maker" element={<Maker authService={authService} FileInput={FileInput} cardRepository={cardRepository}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
