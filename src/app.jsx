import './app.module.css';
import Login from "./component/login/login";
import styles from './app.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Maker from "./common/maker/maker";

function App({authService}) {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login authService={authService}/>}/>
                    <Route exact path="/maker" element={<Maker authService={authService}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
