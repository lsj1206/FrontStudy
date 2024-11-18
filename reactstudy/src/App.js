import logo from './logo.svg';
import './App.css';

import Clock from './react_jsx/Clock';
import CommentList from './react_jsx/Comment'
import NotificationList from './react_jsx/Notification';
import BtnCounter from './react_jsx/BtnConuter';
import Accommodate from './react_jsx/Accommodate';
import ConfirmButton from './react_jsx/ConfirmButton';
import LandingPage from './react_jsx/LandingPage';
import SingUp from './react_jsx/SignUp';
import Temperature from './react_jsx/Temperature';
import ProfileCard from './react_jsx/ProfileCard';
import ThemeChange from './react_jsx/Theme';

function App() {

  return (
    <div className="App">
      <Clock />
      <LandingPage />
      <ConfirmButton />
      <Accommodate />
      <BtnCounter />
      <SingUp />
      <Temperature />
      <NotificationList />
      <CommentList />
      <ProfileCard />
      <ThemeChange />
    </div>
  );
}

export default App;
