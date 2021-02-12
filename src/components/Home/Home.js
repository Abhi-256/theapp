import React, { useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getMeme } from '../../actions/meme';
import Meme from '../Memes/Memes';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeme());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12}>
            <Meme/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
