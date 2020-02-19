import {
  Checkbox,
  createStyles,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Slider,
  Theme
} from "@material-ui/core";
import React from "react";
import { TaskStatus } from ".";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      width: "37%",
      flexShrink: 0,
      flexGrow: 0,
      textAlign: "right"
    }
  })
);

export function Task({
  name,
  progress,
  status,
  dueDate
}: {
  name: string;
  progress: number;
  status: TaskStatus;
  dueDate?: Date;
}) {
  const classes = useStyles();

  if (status === TaskStatus.PROGRESS) {
    return (
      <ListItem>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText primary={name} />
        <ListItemText className={classes.progress}>
          <Slider value={progress} min={0} step={0.1} max={1} />
        </ListItemText>
      </ListItem>
    );
  }

  return (
    <ListItem>
      <ListItemText primary={name} />
      <ListItemText className={classes.progress}>
        {(dueDate &&
          dueDate.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
          })) ||
          status.toLowerCase()}
      </ListItemText>
    </ListItem>
  );
}
