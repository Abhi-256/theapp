import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Meme from './Post/Meme';
import useStyles from './styles';

const Memes = () => {
  const memes = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !memes.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {memes.map((meme) => (
          <Grid key={meme._id} item xs={12} sm={6} md={4}>
            <Meme meme={meme} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Memes;
