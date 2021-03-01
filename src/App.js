import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="App app-wrapper">
      <Header />
      <Navbar />
      <article className="app-wrapper-content">
        {/* <Profile /> */}
        <Dialogs />
      </article>
      <Footer />
    </div>
  );
}

export default App;
