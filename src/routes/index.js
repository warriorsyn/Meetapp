import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Profile from '../pages/profile/Profile';
import Preferences from '../pages/preference/Preferences';
import Dashboard from '../pages/dashboard';
import NewMeetups from '../pages/NewMeetups';
import Meetup from '../pages/meetup';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/cadastro" component={Register} />
    <Route path="/preferences" component={Preferences} />
    <Route path="/profile" component={Profile} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/newmeetup" component={NewMeetups} />
    <Route path="/meetup" component={Meetup} />
  </Switch>
);
export default Routes;
