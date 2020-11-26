import PropTypes from "prop-types";
import { Slide, useScrollTrigger } from "@material-ui/core";

const HideOnScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default HideOnScroll;
