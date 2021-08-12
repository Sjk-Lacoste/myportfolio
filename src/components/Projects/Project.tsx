import { FC, useEffect } from 'react';

interface ProjectProps {}

const Project: FC<ProjectProps> = (props) => {
  useEffect(() => {
    console.log('Props', props);
  }, []);

  return <h1>Project</h1>;
};

export default Project;
