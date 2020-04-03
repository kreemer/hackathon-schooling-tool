import React from "react";
import {
  Card,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Container,
  CardContent,
  CardHeader,
  TextField,
  CardActions,
  Button,
  Select,
  MenuItem,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectFormControl: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    attachFileFormControl: {
        marginTop: theme.spacing(1),
    },
    select: {
      minWidth: 200,
    },
  })
);

function QuestionScene() {
  const classes = useStyles();

  return (
    <Container style={{ padding: 5 }}>
      <Card>
        <CardHeader title="Neue Frage an den Lehrer:"></CardHeader>
        <CardContent>
          <FormControl className={classes.selectFormControl}>
            <InputLabel id="demo-simple-select-label">Lehrperson</InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={10}>Hans Müller</MenuItem>
              <MenuItem value={20}>Roger Federer</MenuItem>
              <MenuItem value={30}>Berthold Munter</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="standard-multiline-flexible"
            label="Frage hier eintippen"
            multiline
            rowsMax="8"
            rows="4"
            style={{ width: "100%" }}
          />
          <FormControl className={classes.attachFileFormControl}>
            <Button variant="contained" component="label">
              Datei hinzufügen
              <input type="file" style={{ display: "none" }} />
            </Button>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Frage stellen
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default QuestionScene;
