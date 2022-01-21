import React, { Component, useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { getSmurfs } from "./actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from "react-redux";

const App = (props)=> {
  console.log('App', props)
  useEffect(() => {
    props.getSmurfs()
  }, [])
  return (
    <div className="App">
      <Header />
      <main>
        <SmurfList characters={props.characters} loading={props.loading} error={props.error}/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.results,
    error: state.error,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, {getSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.