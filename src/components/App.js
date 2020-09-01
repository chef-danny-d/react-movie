import React from 'react'
import Header from './elements/Header/Header'
import Home from './Home/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from './elements/NotFound/NotFound'
import Movie from './Movie/Movie'

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/:movieID" component={Movie} exact />
                    <Route component={NotFound} />
                </Switch>
            </>
        </BrowserRouter>
    )
}

export default App
