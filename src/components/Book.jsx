import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import '../pages/home/Home.css'
export default function Book({ image, author, title, rate}) {
  return (
    <div>
      <Card style={{padding:'10px',backgroundColor:'white',borderRadius:'10px'}} className="Card">
        <CardActionArea>
          <CardMedia
            component="img"
            height={400}
            image={image}
            alt="book cover"
          />
          <CardContent > 
            <Typography gutterBottom variant="h6" component="div"
             style={{display:'-webkit-box',WebkitBoxOrient:'vertical',overflow:'hidden',lineClamp:'1',WebkitLineClamp:'1',lineHeight:'1.8rem'}}
             >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
            <br />
            <Typography variant="body3" color="text.secondary">
              {rate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
