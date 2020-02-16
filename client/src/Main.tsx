import { createStyles, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { TaskList } from "./tasks/TaskList";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "30px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr"
    }
  })
);

export function Main() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <div />
      <Paper>
        <TaskList />
      </Paper>
      <div />
    </main>
  );
}
