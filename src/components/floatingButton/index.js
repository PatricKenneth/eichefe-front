import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "8px",
    width: "64px",
    height: "48px",
    marginRight: "81px",
    background: "white",
    position: "fixed",
    bottom: "100px",
    display: "none",
    right: "0px",
    boxShadow: "rgb(0 0 0 / 60%) 0px 4px 25px",
    alignItems: "center",
    justifyContent: "center",
  },
}));

window.onscroll = () =>  scrollFunction();

function scrollFunction() {
  if(document.getElementById("myBtn")){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "flex";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
  }
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function scrollToY(scrollTargetY, speed, easing) {
  var scrollY = window.scrollY || document.documentElement.scrollTop, currentTime = 0;;
  var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
  var easingEquations = { 
    easeOutSine: function (pos) {
        return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function (pos) {
        return (-0.5 * (Math.cos(Math.PI * pos) - 1));
    },
    easeInOutQuint: function (pos) {
        if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
        }
        return 0.5 * (Math.pow((pos - 2), 5) + 2);
    }
  };

  function tick() {
    currentTime += 1 / 60;

    var p = currentTime / time;
    var t = easingEquations[easing](p);

    if (p < 1) {
        window.requestAnimFrame(tick);

        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
    } else {
        window.scrollTo(0, scrollTargetY);
    }
  }

  tick();
}

function FloatingButton() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="myBtn">
      <Button style={{ color: "#3d5afe" }} onClick={() => scrollToY(0, 5000, 'easeInOutSine')}>
          <ArrowUpwardIcon />
      </Button>
    </div>
  );
}

export default FloatingButton;
