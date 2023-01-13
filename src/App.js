import React from "react";
import "./styles.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import ListStoreComponent from "./components/ListStoreComponent";
import CreateStoreComponent from "./components/CreateStoreComponent";
import ViewStoreComponent from "./components/ViewStoreComponent";
import Home from "./components/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";


export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/employees" component={ListEmployeeComponent} />
          <Route exact path = "/add-employee/:id" component = {CreateEmployeeComponent} />
          <Route exact path = "/view-employee/:id" component = {ViewEmployeeComponent} />
          <Route exact path="/stores" component={ListStoreComponent} />
          <Route exact path = "/add-store/:id" component = {CreateStoreComponent} />
          <Route exact path = "/view-store/:id" component = {ViewStoreComponent} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
