import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { TasksCard } from "./tasks/TasksCard";

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
      <TasksCard />
      <div />
    </main>
  );
}
