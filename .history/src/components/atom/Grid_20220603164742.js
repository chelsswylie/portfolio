import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export const GridContainer = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  function GridItem({ classes }) {
    return "";
  }

  export default function autoGrid() {
    const classes = useStyles();
  }
  return (
    <div>
      <h3>I am a container</h3>
      <Grid container spacing={1}>
        <GridItem classes={classes} />
        <GridItem classes={classes} />
      </Grid>
    </div>
  );
};
