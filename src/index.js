import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Error from './Error';
import EditPost from './EditPost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path='/post' element={<NewPost/>}/>
          <Route exact path="/edit/:id" element={<EditPost/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </Router>
);


