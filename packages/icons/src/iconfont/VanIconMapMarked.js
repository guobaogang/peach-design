/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconMapMarked = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M765.07136 625.777664a56.889344 56.889344 0 0 1 47.269888 25.23648l152.3712 227.556352c17.481728 26.105856 10.488832 61.441024-15.618048 78.921728a56.889344 56.889344 0 0 1-31.65184 9.618432H105.916416c-31.419392 0-56.889344-25.469952-56.889344-56.88832a56.889344 56.889344 0 0 1 9.460736-31.414272l150.721536-227.555328a56.889344 56.889344 0 0 1 47.428608-25.475072l97.460224 0.007168C430.205952 713.237504 512.37888 768 512 768c-0.377856 0 81.794048-54.762496 157.9008-142.215168l95.17056-0.007168z m-25.516032 227.555328v56.889344H284.444672v-56.889344h455.110656zM512 113.777664c125.67552 0 227.555328 101.879808 227.555328 227.555328C739.555328 530.96448 512 701.62944 512 701.62944S284.444672 530.96448 284.444672 341.332992c0-125.67552 101.879808-227.555328 227.555328-227.555328zM512 256c-47.128576 0-85.332992 38.20544-85.332992 85.332992 0 47.128576 38.20544 85.334016 85.332992 85.334016 47.128576 0 85.332992-38.20544 85.332992-85.334016C597.332992 294.20544 559.127552 256 512 256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconMapMarked.defaultProps = {
  size: 18,
};

VanIconMapMarked = React.memo ? React.memo(VanIconMapMarked) : VanIconMapMarked;

export default VanIconMapMarked;