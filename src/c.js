import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import LazyLoad from './util/lazyload';

const D = LazyLoad(() => import(/* webpackChunkName: "d" */'./d.js'));
export default class C extends Component{
  render(){
    return (
        <Router>
          <div>
          this is C
            <Route path="/C/D" component={D}/>
            <Link to="/C/D">to D</Link>
          </div>
        </Router>
    )
  }
}