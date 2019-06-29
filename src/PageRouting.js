import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { userPath } from './constants/user.constants'
import HomePage from './components/HomePage';
import Contact from './components/Contact';

const routes = [
    {
        path: userPath.homePage,
        exact: true,
        main: () => <div> <HomePage /> </div>
    },
    {
        path: userPath.contact,
        main: () => <div> <Contact /> </div>
    }
]


class PageRouting extends React.Component {
    
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    {
                        routes.map((route, index) => (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))
                    }
                </div>
            </Router>
            
        )
    }
}

export default PageRouting