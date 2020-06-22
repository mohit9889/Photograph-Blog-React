import React from "react";
import styles from "./Gallery.module.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import tileData from "./tileData";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#131111"
  },
  gridList: {
    width: 360,
    height: 450,
    margin: "0 50 0 50"
  }
}));

const GalleryComponent = () => {
  const classes = useStyles();

  return (
    <div className={styles.gallery}>
      <h3 className={styles.h3}>This is Our Gallery</h3>
      <div className={styles.photos}>
        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {tileData.map((tile, index) => (
              <GridListTile key={index} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
