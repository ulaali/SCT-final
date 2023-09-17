import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Book({image,author,title,width,height,rate}) {
  return (
    <div>
 <Card sx={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={200}
          width={width}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            By : {author}
          </Typography><br/>
          <Typography variant="body3" color="text.secondary">
            {rate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}
