import { Card, CardHeader, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { TasksCard } from "./tasks/TasksCard";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "30px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: "30px"
    }
  })
);

export function Main() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Card>
        <CardHeader title="Contacts" />
      </Card>
      <Card>
        <CardHeader title="Appointments" />
      </Card>
      <TasksCard />
    </main>
  );
}
