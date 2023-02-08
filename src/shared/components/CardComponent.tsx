import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UpdateIcon from '@mui/icons-material/Update';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MovieIcon from '@mui/icons-material/Movie';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardComponentProps } from './types/types';
import { borderColor } from '@mui/system';



interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const CardComponent = ({ titleCard, poster, MovieTitle, alreadyBeenWatched, id, handleUpdateStatus, dataRequest, sinopseText, handleDeleteMovie }: CardComponentProps) => {
  const [expanded, setExpanded] = useState(false)

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: 'white', border: 'black', borderColor: 'black', borderStyle: 'solid', borderWidth: 2 }} aria-label="recipe">
              {alreadyBeenWatched ? <TheaterComedyIcon color={'success'} /> : <TheaterComedyIcon color={'error'} />}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => handleUpdateStatus(id)}>
              <UpdateIcon />
            </IconButton>
          }
          title={`${titleCard}`.toUpperCase()}
          subheader={`ID: ${id}`}
        />
        <CardMedia
          component="img"
          height="500"
          image={`${poster}`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {MovieTitle}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {alreadyBeenWatched ? <MovieIcon color={'success'} /> : <MovieIcon color={'error'} />}
          </IconButton>
          <IconButton aria-label="share" onClick={() => handleDeleteMovie(id)}>
            <DeleteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Sinopse:</Typography>
            <Typography paragraph alignContent={'center'} align={'justify'}>
              {`${sinopseText}`}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

    </>
  )
}