import React from 'react';
import './App.css';
// different pages
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import ResponsiveAppBar from './navigation/navi';
// elements from MUI
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// React components
import { HashRouter, Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
// open in new tab use '_blank' in target, else use '_self'
// use MUI library
// https://mui.com/core
// material icons
// https://mui.com/material-ui/material-icons/
function App() {
  

  /*
  const [naviSelection, setNaviSelection] = useState<String>('/')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false)
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    setOpen(true);
  }, [open]);
  

  const handleClose = useCallback((page:string) => {
    setNaviSelection(page);
    setOpen(false);
  }, [open]);
  */



  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/gallery" Component={Gallery} />
        </Routes>
      </header>
      <footer>I have a bottom line :[</footer>
    </div>
  );
}

export default App;
