import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router-dom';
// import FileBase from 'react-file-base64';

import { createMeme, updateMeme } from '../../actions/meme';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [memeData, setMemeData] = useState({ name: '', url: '', caption: '' });
  const meme = useSelector((state) => (currentId ? state.posts.find((meme) => meme._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (meme) setMemeData(meme);
  }, [meme]);

  const clear = () => {
    
    setMemeData({ name: '', url: '', caption: '' });
    console.log(`clear button : ${memeData}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === "0") {
      dispatch(createMeme(memeData)).then(history.push('/'));
      console.log(`create : ${memeData}`);
    } else {
      dispatch(updateMeme(currentId, memeData)).then(history.push('/'));
      console.log(`update : ${memeData}`);
    }

  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId !== "0" ? `Created By "${memeData.name}"` : 'Upload a Meme'}</Typography>
        {currentId === "0" && <TextField name="name" variant="outlined" label="name" fullWidth value={memeData.name} onChange={(e) => setMemeData({ ...memeData, name: e.target.value })} /> }
        <TextField name="caption" variant="outlined" label="caption (coma separated)" fullWidth value={memeData.caption} onChange={(e) => setMemeData({ ...memeData, caption: e.target.value })} />
        <TextField name="url" variant="outlined" label="Image Url" fullWidth value={memeData.url} onChange={(e) => setMemeData({ ...memeData, url: e.target.value })} />
        
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> 
      </form>
    </Paper>
  );
};

export default Form;
