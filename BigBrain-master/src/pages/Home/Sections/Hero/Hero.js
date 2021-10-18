import classes from "./Hero.module.css";
import Button from "@mui/material/Button";
import heroMain from "../../../../Assets/hero.gif";
const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imgDiv}>
        <img src={heroMain} alt="heroMain" width="40%" />
      </div>
      <div className={classes.buttonDiv}>
        <h2>Presale Mint - 8PM Central 18th of October</h2> 
        <h2>Launch Mint - 8PM Central 19th of October</h2>
        <Button variant="contained" className={classes.availableButton}>
          Minting Soon
        </Button>
      </div>
    </div>
  );
};
export default Hero;
