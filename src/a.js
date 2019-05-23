import React,{Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import LazyLoad from './util/lazyload';

const B = LazyLoad(() => import(/* webpackChunkName: "b" */'./b.js'));
const C = LazyLoad(() => import(/* webpackChunkName: "c" */'./c.js'));


export default class A extends Component{
    render(){
      return <div>
        <Router>
          <div>
            <Route path="/B" component={B}/>
            <Route path="/C" component={C}/>
            <Link to="/B">to B</Link><br/>
            <Link to="/C">to C</Link>
          </div>
        </Router>
      </div>
    }
}


ReactDom.render(<A/>,document.querySelector("#btn"))
if (module.hot) {
     module.hot.accept()
}

