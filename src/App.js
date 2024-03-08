import React from "react";
import "./App.scss";
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import { BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import Firebase, { FirebaseContext } from "./components/Firebase";
import Homepage from "./views/Homepage";
import { Provider } from "react-redux";
import { store } from "./store";
import HotelListView from "./views/HotelListView";
import axios from "axios";
import { DEFAULT_URL } from "./constants/urls";
import HotelDetailedView from "./views/HotelDetailedView";
import ListProperty from "./views/ListProperty";
import ListPropertySignUp from "./views/ListPropertySignUp";
import PropertyRegistration from "./views/PropertyRegistration";

function App() {
  axios.defaults.baseURL = DEFAULT_URL;

  return (
    <div className="App">
      <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}>
          <BrowserRouter>
            <Route exact path={ROUTES.LANDING} component={Homepage} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.LOG_IN} component={Login} />
            <Route path={ROUTES.HOTEL_LIST_VIEW} component={HotelListView} />
            <Route path={ROUTES.HOTEL_VIEW} component={HotelDetailedView} />
            <Route path={ROUTES.LIST_PROPERTY} component={ListProperty} />
            <Route path={ROUTES.LIST_PROPERTY_SIGNUP} component={ListPropertySignUp} />
            <Route path={ROUTES.PROPERTY_REGISTRATION} component={PropertyRegistration} />
          </BrowserRouter>
        </FirebaseContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
