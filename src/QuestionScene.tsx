import React, { useState } from "react";
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
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Chip,
  Box,
  Avatar,
  Zoom,
  Fab,
  useTheme,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import Dialog from '@material-ui/core/Dialog';

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
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expansionSummary: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    chip: {
      marginRight: theme.spacing(1),
    },
    teacherAvatarContainer: {
      minWidth: 56,
    },
    fab: {
      position: "absolute",
      right: theme.spacing(2),
      bottom: theme.spacing(2),
    },
  })
);

function QuestionScene() {
  const [newQuestionOpen, setNewQuestionOpen] = useState(false);

  const classes = useStyles();
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Container style={{ padding: 5 }}>
      <ExistingQuestionsCard />

      {
        <Dialog
          onClose={() => setNewQuestionOpen(false)}
          aria-labelledby="simple-dialog-title"
          open={newQuestionOpen}
        >
          <NewQuestionCard />
        </Dialog>
      }

      <Zoom
        in={true}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${transitionDuration.exit}ms`,
        }}
        unmountOnExit
      >
        <Fab
          color="primary"
          className={classes.fab}
          onClick={() => setNewQuestionOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Zoom>
    </Container>
  );
}

function ExistingQuestionsCard() {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title="Deine letzten Fragen:"></CardHeader>
      <CardContent>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Box className={classes.expansionSummary}>
              <Chip
                className={classes.chip}
                style={{ backgroundColor: "green" }}
                label="Beantwortet"
              />
              <Typography className={classes.heading}>
                Du: Wann können wir wieder zur Schule kommen?
              </Typography>
            </Box>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Box className={classes.expansionSummary}>
              <Box className={classes.teacherAvatarContainer}>
                <Avatar>H</Avatar>
              </Box>

              <Typography>
                Zurzeit ist die Situation noch unklar, dementsprechend kann ich
                Dir leider noch keine Auskunft geben.
              </Typography>
            </Box>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </CardContent>
    </Card>
  );
}

function NewQuestionCard() {
  const classes = useStyles();

  return (
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
  );
}

export default QuestionScene;
