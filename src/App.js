// import logo from './logo.svg';
// import './App.css';
import Header from './pjt/Header';
import Footer from './pjt/Footer';
import Main_01 from './pjt/Router/Main_01';
import TmapTrans from './pjt/Router/api/TmapTrans';
// import Main_02 from './pjt/Router/Main_02';
// import Main_03 from './pjt/Router/Main_03';
// import Details from './pjt/Router/Details';

function App() {
    return (
        <>
            <Header />
            <Main_01 />
            {/* <Main_02 />
      <Main_03 />
      <Details /> */}
            <Footer />
            <TmapTrans />
        </>
    );
}

export default App;
