/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconServiceO = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 56.889344c217.73312 0 394.652672 174.741504 398.169088 391.635968l0.053248 6.585344v284.444672c0 31.419392-25.469952 56.889344-56.889344 56.889344h-56.88832c-31.419392 0-56.889344-25.469952-56.889344-56.889344V512c0-31.418368 25.469952-56.889344 56.889344-56.889344h56.88832c0-186.628096-149.778432-338.27328-335.68768-341.286912L512 113.77664l-5.644288 0.04608C322.304 116.80768 173.666304 265.464832 170.71104 449.522688l-0.044032 5.587968h56.88832c31.105024 0 56.379392 24.964096 56.881152 55.948288l0.008192 0.941056v227.555328c0 31.105024-24.963072 56.379392-55.948288 56.881152l-0.941056 0.008192h-112.75264a1.024 1.024 0 0 1-1.024-1.024V455.110656c0-219.931648 178.28864-398.221312 398.221312-398.221312zM853.332992 512h-56.88832v227.555328h56.88832V512z m-625.77664 0h-56.889344v227.555328h56.88832V512z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M853.332992 463.128576c0-15.709184 12.735488-28.443648 28.444672-28.443648 15.710208 0 28.444672 12.734464 28.444672 28.444672v324.000768c-0.841728 116.01408-55.412736 180.272128-157.559808 180.272128H540.68224c-15.70816 0-28.443648-12.734464-28.443648-28.444672 0-15.70816 12.734464-28.443648 28.443648-28.443648h211.981312c68.537344 0 100.042752-37.098496 100.66944-123.589632l0.001024-323.795968z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

VanIconServiceO.defaultProps = {
  size: 18,
};

VanIconServiceO = React.memo ? React.memo(VanIconServiceO) : VanIconServiceO;

export default VanIconServiceO;