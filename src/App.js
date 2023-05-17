import React, { useEffect, useState } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { AuthProvider } from "./context/AuthContext";
import { Protected } from "./protected/Protected";



const alanKey = '9d723622a4df86a4efd58055f3f898752e956eca572e1d8b807a3e2338fdd0dc/stage';


const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if (command === 'testCommand') {
                    window.location.replace('http://localhost:3000/movies/popular');
                }
                if (command === 'testCommand1') {
                    window.location.replace('http://localhost:3000/movies/top_rated');
                }
                if (command === 'testCommand2') {
                    window.location.replace('http://localhost:3000/movies/upcoming');
                }
                if (command === 'testCommand3') {
                    window.location.replace('http://localhost:3000/login');
                }
                if (command === 'testCommand4') {
                    window.location.replace('http://localhost:3000/c');
                }

            }
        })
    }, []);

    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route element={<Protected />}>
                            <Route index element={<Home />}></Route>
                            <Route path="movie/:id" element={<Movie />}></Route>
                            <Route path="movies/:type" element={<MovieList />}></Route>
                        </Route>
                        <Route path="/*" element={<h1> Error Page</h1>}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </div>

    );
}


export default App;