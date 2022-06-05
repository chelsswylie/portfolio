import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

export const GridContainer = () => {
    <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid>
}
//   const useStyles = makeStyles((theme) => ({
//     paper: {
//       padding: theme.spacing(1),
//       textAlign: "center",
//       color: theme.palette.text.secondary,
//     },
//   }));
// }

//   export default function GridItem({ classes }) {
//     return (
//       <Grid item xs={12} sm={6} md={3}>
//         <Paper className={classes.paper}>item</Paper>
//       </Grid>
//     );
//   }

//   export default function AutoGrid() {
//     const classes = useStyles();
//     return (
//       <div>
//         <h3>I am a container</h3>
//         <Grid container spacing={1}>
//           <GridItem classes={classes} />
//           <GridItem classes={classes} />
//         </Grid>
//       </div>
//     );
//   }
