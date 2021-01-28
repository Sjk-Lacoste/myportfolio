import { Slide, useScrollTrigger } from "@material-ui/core";
import { FunctionComponent } from 'react';

interface Props {
  children: any;
  window: any;
}
const HideOnScroll: FunctionComponent<Props> = ({ children, window }) => {
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
