import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import UpdateIcon from '@material-ui/icons/Update';
import moment from 'moment';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Post = ({ meme }) => {
  const classes = useStyles();


  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={meme.url || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} caption={meme.caption} />

     
      <CardContent className={classes.card}>
      <Typography className={classes.caption} gutterBottom variant="h5" component="h2" alignItems="center">  {meme.caption}</Typography>
      
      <Typography variant="h6">Created by - {meme.name}</Typography>
      <Typography variant="body2">{moment(meme.createdAt).fromNow()}</Typography>
      <div className={classes.overlay2}>
        <Button component={Link} to={"/addmeme/"+ meme._id} onClick={() => console.log(meme._id)} style={{ color: 'white' }} size="small">
          <UpdateIcon color="action" fontSize="default" />
        </Button>
      </div>
      </CardContent>
    </Card>
  );
};

export default Post;
