import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    backgroundColor: '#24292E',
    color: 'whitesmoke',
    marginTop: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  followerText: {
    paddingLeft: '10px',
  },
}));

export default function UserCard({ userData, userFollowers }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader title={userData.login} />
      <CardMedia
        className={classes.media}
        image={userData.avatar_url}
        title='Paella dish'
      />
      <CardContent>
        <Typography variant='body1' component='p'>
          {userData.name}
          <br />
          {userData.location}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography className={classes.followerText}>Followers</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon className='icon' />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {userFollowers.map((follower) => (
              <h5 key={follower.id}>
                <a href={follower.html_url} target='_blank' rel='noreferrer'>
                  {follower.login}
                </a>
              </h5>
            ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
