import Main from "./components/Main/Main.tsx";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import ChatMobile from "./components/ChatMobile/ChatMobile.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Main />} />
                <Route path='/chatMobile' element={<ChatMobile />} />
            </Routes>
        </>
    );
}

export default App;
