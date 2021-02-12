import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getMeme } from '../../actions/meme';
import Form from '../Form/Form';

const AddMeme = (props) => {
  const [currentId, setCurrentId] = useState(props.match.params.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeme());
    
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container> <Grid item xs>
         </Grid>
        <Grid container spacing={0} direction="column"  alignItems="center"  justify="center">
        <Grid item xs={12} sm={6}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default AddMeme;
