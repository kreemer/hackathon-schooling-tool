import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import classroomImage from "./assets/classroom.jpg";
import questionsImage from "./assets/questions.png";
import uploadImage from "./assets/upload.jpg";
import { Grid } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    paddingBottom: 5,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  gridItem: {
    padding: 5,
  },
  selected: {
    backgroundColor: "orange",
  },
});

export enum ClassRoomActionTypes {
  CLASSROOM,
  QUESTION,
  UPLOAD_ASSIGNMENT,
}

export const ClassRoomActions: React.FC<{
  selected: ClassRoomActionTypes;
  onSelected(s: ClassRoomActionTypes): void;
}> = ({ selected, onSelected }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={4}
        className={clsx(
          classes.gridItem,
          selected === ClassRoomActionTypes.CLASSROOM && classes.selected
        )}
      >
        <Card
          className={classes.root}
          onClick={() => onSelected(ClassRoomActionTypes.CLASSROOM)}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={classroomImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Klassenzimmer beitreten
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        item
        xs={4}
        className={clsx(
          classes.gridItem,
          selected === ClassRoomActionTypes.QUESTION && classes.selected
        )}
      >
        <Card
          className={classes.root}
          onClick={() => onSelected(ClassRoomActionTypes.QUESTION)}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={questionsImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Frage an den Lehrer
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        item
        xs={4}
        className={clsx(
          classes.gridItem,
          selected === ClassRoomActionTypes.UPLOAD_ASSIGNMENT &&
            classes.selected
        )}
      >
        <Card
          className={classes.root}
          onClick={() => onSelected(ClassRoomActionTypes.UPLOAD_ASSIGNMENT)}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={uploadImage}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Aufgabe abgeben
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};
