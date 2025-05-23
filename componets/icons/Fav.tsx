import React from "react";
import Svg, { Path } from "react-native-svg";

const Fav = ({width=20,height=18,fill='white'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 18"
      fill={fill}
    >
      <Path
        d="M14.44 0C12.63 0 11.01 0.88 10 2.23C9.48413 1.53881 8.81426 0.977391 8.04353 0.590295C7.27281 0.203198 6.42247 0.00108555 5.56 0C2.49 0 0 2.5 0 5.59C0 6.78 0.19 7.88 0.52 8.9C2.1 13.9 6.97 16.89 9.38 17.71C9.72 17.83 10.28 17.83 10.62 17.71C13.03 16.89 17.9 13.9 19.48 8.9C19.81 7.88 20 6.78 20 5.59C20 2.5 17.51 0 14.44 0Z"
        fill={fill}
      />
    </Svg>
  );
};

export default Fav;
