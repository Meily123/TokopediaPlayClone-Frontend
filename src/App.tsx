import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Detail from "./pages/detail";
import SearchPage from "./pages/search";
import SearchResultsPage from "./components/searchResult";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/detail/:id" Component={Detail}/>
                <Route path="/search" Component={SearchPage} />
                <Route path="/users/login" Component={Login} />
                <Route path="/users/register" Component={Register} />
            </Routes>
        </Router>
    );
};

export default App;
