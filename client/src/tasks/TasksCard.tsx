import {
  Card,
  CardHeader,
  createStyles,
  Divider,
  List,
  ListItem,
  makeStyles,
  Theme,
  Typography
} from "@material-ui/core";
import React from "react";
import { TaskStatus, useTasks } from ".";
import { Task } from "./Task";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    group: {
      textTransform: "uppercase"
    },
    progress: {
      width: "37%",
      flexShrink: 0,
      flexGrow: 0
    }
  })
);

export function TasksCard() {
  const [tasks, error] = useTasks();
  const classes = useStyles();

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (tasks) {
    return (
      <Card>
        <CardHeader title="All Tasks" />
        <List className={classes.root}>
          <ListItem>
            <Typography
              color="textSecondary"
              variant="caption"
              className={classes.group}
            >
              In progress
            </Typography>
          </ListItem>
          <Divider />
          {tasks
            .filter(task => task.status === TaskStatus.PROGRESS)
            .map(task => (
              <Task
                key={task.id}
                name={task.name}
                progress={task.progress}
                status={task.status}
              />
            ))}
          <ListItem>
            <Typography
              color="textSecondary"
              variant="caption"
              className={classes.group}
            >
              Upcomming
            </Typography>
          </ListItem>
          <Divider />
          {tasks
            .filter(task => task.status === TaskStatus.PENDING && task.dueDate)
            .map(task => (
              <Task
                key={task.id}
                name={task.name}
                progress={task.progress}
                status={task.status}
                dueDate={new Date(task.dueDate)}
              />
            ))}
          <ListItem>
            <Typography
              color="textSecondary"
              variant="caption"
              className={classes.group}
            >
              Pending
            </Typography>
          </ListItem>
          <Divider />
          {tasks
            .filter(task => task.status === TaskStatus.PENDING && !task.dueDate)
            .map(task => (
              <Task
                key={task.id}
                name={task.name}
                progress={task.progress}
                status={task.status}
              />
            ))}
        </List>
      </Card>
    );
  }

  return <span>{"Loading..."}</span>;
}
