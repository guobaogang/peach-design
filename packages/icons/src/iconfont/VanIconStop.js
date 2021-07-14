/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconStop = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M348.16 307.2h327.68c22.621184 0 40.96 18.338816 40.96 40.96v327.68c0 22.621184-18.338816 40.96-40.96 40.96H348.16c-22.621184 0-40.96-18.338816-40.96-40.96V348.16c0-22.621184 18.338816-40.96 40.96-40.96z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconStop.defaultProps = {
  size: 18,
};

VanIconStop = React.memo ? React.memo(VanIconStop) : VanIconStop;

export default VanIconStop;
