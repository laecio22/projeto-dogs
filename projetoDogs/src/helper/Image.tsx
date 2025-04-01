import { useState } from "react";
import { ContainerSkeleton, WrapperImage } from "./styleImage";

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };
  return (
    <WrapperImage>
      {skeleton && <ContainerSkeleton></ContainerSkeleton>}
      <img onLoad={handleLoad} alt={alt} {...props} />
    </WrapperImage>
  );
};

export default Image;
