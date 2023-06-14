// import logo from './logo.svg';
// import './App.css';
import Header from './pjt/Header';
import Footer from './pjt/Footer';
import Main_01 from './pjt/Router/Main_01';
import SubPage from './pjt/Router/SubPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main_01 />}></Route>
                    <Route path="/subpage" element={<SubPage />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
            <TmapTrans />
        </>
    );
}

export default App;
