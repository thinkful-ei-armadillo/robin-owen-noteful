import React, { Component } from 'react';
import './App.css';
import {Switch, Link, Route} from 'react-router-dom'
import Notelist from './Notelist';
import Folders from './Folders';
import STORE from './dummyStore';



class App extends Component {

    state = {
      STORE
    }
  
  render() {
    return (
    <div>
      <h1><Link to='/' >Noteful</Link></h1>
      <Switch>
        <Route exact path='/' render={()=> <Folders folders ={this.state.STORE.folders}/>}/>
        <Route path='/folders/:folderId' render={(routeProps)=>  <Folders folders ={this.state.STORE.folders}
        fId ={routeProps.match.params.folderId} />}/>
      </Switch>
      <Switch>
        <Route exact path='/' render={()=> <Notelist notes={this.state.STORE.notes}/>}/>
        <Route path='/folders/:folderId' render={(routeProps)=> {
            return <Notelist notes={this.state.STORE.notes} fId={routeProps.match.params.folderId} />;
          }}/>
      </Switch>
    
     
    </div>
    );
  }
}

export default App;
