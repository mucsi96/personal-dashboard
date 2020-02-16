import {
  createStyles,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme
} from "@material-ui/core";
import React from "react";
import { useTasks } from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    }
  })
);

export function TaskList() {
  const [tasks, error] = useTasks();
  const classes = useStyles();

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (tasks) {
    return (
      <List className={classes.root}>
        {tasks.map(task => (
          <ListItem>
            <ListItemText primary={task.name} secondary={task.status} />
          </ListItem>
        ))}
      </List>
    );
  }

  return <span>{"Loading..."}</span>;
}
