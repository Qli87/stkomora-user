import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { userPath } from './constants/user.constants'
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutCnt from './containers/AboutCnt';
import BiographyCnt from './containers/BiographyCnt';
import NewsCnt from './containers/NewsCnt';
import NoveltyDetailsCnt from './containers/NoveltyDetailsCnt';
import NewsForCategoryCnt from './containers/NewsForCategoryCnt';
import AdvertismentCnt from './containers/AdvertismentCnt';

const routes = [
    {
        path: userPath.homePage,
        exact: true,
        main: () => <div> <HomePage /> </div>
    },
    {
        path: userPath.about,
        main: () => <div> <AboutCnt /> </div>
    },
    {
        path: userPath.news,
        main: () => <div> <NewsCnt /> </div>
    },
    {
        path: userPath.biography+'/:id',
        main: ({match}) => <div> <BiographyCnt biographyParams={match.params} /> </div>
    },
    {
        path: userPath.category+'/:id',
        main: ({match}) => <div category={match.params}> <NewsForCategoryCnt /> </div>
    },
    {
        path: userPath.noveltyDetails+'/:id',
        main: ({match}) => <div> <NoveltyDetailsCnt novelty={match.params}/> </div>
    },
    {
        path: userPath.advertisment,
        main: () => <div> <AdvertismentCnt /> </div>
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
                <div>
                    <Header />
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
                    <Footer />
                </div>
            </Router>
            
        )
    }
}

export default PageRouting