import Main from "./components/Main/Main.tsx";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path={"/About"} element={<Main />} />
                    <Route path={"/Services"} element={<Main />} />
                    <Route path={"/Blog"} element={<Main />} />
                    <Route path={"/Reviews"} element={<Main />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
