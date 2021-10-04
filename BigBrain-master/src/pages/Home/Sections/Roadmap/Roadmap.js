import classes from "./Roadmap.module.css";
import clsx from "clsx";
import Fade from 'react-reveal/Fade';

const Roadmap = () => {
  return (
    <div>
    <Fade bottom cascade duration={6000}>
      <div className={classes.roadMain}>
        <div className={classes.textContainer}>
          <h2 className={classes.mainHeading}>Roadmap</h2>
          <h3 className={classes.secondaryHeading}>Season 1</h3>
          <p>
            Brainstorming. As we get closer to launch we think you'll be a
            little mind blown by the things we got planned! OG Big Brains in our
            discord may even have some say over the things we do. A bunch of Big
            Brains is always better than one, right?
          </p>
          {/* <p>#Brainstorming</p> */}
        </div>
        <div className={classes.main}>
          <ul className={classes.timeline}>
            <li>
              <div className={classes.directionL}>
                <div className={classes.flagWrapper}>
                  <div className={classes.flag}>
                    <h2>20%</h2>
                    <p>
                      This community will CHALLENGE YOU to use your brain, at 20% sold we will be hosting derivative art contest(s), puzzles, and other interactive brain teasers with prizes to be won by holders.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.directionR}>
                <div className={classes.flagWrapper}>
                  <div className={clsx(classes.flag, classes.list)}>
                    <h2>40%</h2>
                    <p>
                      {" "}
                      At 40% sold, we will make a 5 ETH CHARITABLE DONATION to a mental health organization selected by our community members.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.directionL}>
                <div className={classes.flagWrapper}>
                  <div className={clsx(classes.flag, classes.list)}>
                    <h2>60%</h2>
                    <p>
                      {" "}
                      At 60% sold, we will provide a free MERCH DROP to holders.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.directionR}>
                <div className={classes.flagWrapper}>
                  <div className={clsx(classes.flag, classes.list)}>
                    <h2>80%</h2>
                    <p>
                      {" "}
                      At 80% sold, there will be a CLAIMABLE GIFT for all holders that will serve utility in Season 2.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.directionL}>
                <div className={classes.flagWrapper}>
                  <div className={clsx(classes.flag, classes.list)}>
                    <h2>100%</h2>
                    <p>
                      {" "}
                      The Big Brain Season Finale will give a taste of what we have planned for in Season 2.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </Fade>
    </div>
    
  );
};
export default Roadmap;
