import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Switch,  Route, Redirect } from 'react-router-dom';

function App({posts, dialogs, messages}) {
  return (
    
      <div className="App app-wrapper">
        <Header />
        <Navbar />
        <article className="app-wrapper-content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/profile" />
            </Route>
            <Route path="/profile">
              <Profile posts={posts} />
            </Route>
            <Route path="/dialogs">
              <Dialogs dialogs={dialogs} messages={messages} />
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
          </Switch>
        </article>
        <Footer />
      </div>
  );
}

export default App;
