import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Switch, Route, Redirect } from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <div className="App app-wrapper">
            <Header />
            <Navbar store={props.store} />
            <article className="app-wrapper-content">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/profile" />
                    </Route>
                    <Route path="/profile">
                        <Profile store={props.store} />
                    </Route>
                    <Route path="/dialogs">
                        <DialogsContainer store={props.store} />
                    </Route>
                    <Route path="/news">
                        <News />
                    </Route>
                    <Route path="/music">
                        <Music />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/users">
                        <UsersContainer />
                    </Route>
                </Switch>
            </article>
            <Footer />
        </div>
    );
}

export default App;
