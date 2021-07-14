/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconUserO = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M398.222336 568.889344L512 682.665984l113.777664-113.77664h44.009472c8.47872 0 16.850944 1.8944 24.50432 5.547008l183.545856 87.602176a56.889344 56.889344 0 0 1 32.385024 51.341312v196.842496c0 31.418368-25.469952 56.88832-56.889344 56.88832H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832v-196.84352a56.889344 56.889344 0 0 1 32.385024-51.340288l183.54688-87.602176a56.889344 56.889344 0 0 1 24.50432-5.547008h44.008448z m-23.564288 56.88832h-20.445184L170.667008 713.37984v196.842496h682.665984v-196.84352L669.78816 625.778688h-20.445184L512 763.119616 374.658048 625.777664zM512 56.889344c125.67552 0 227.555328 101.879808 227.555328 227.555328S637.67552 512 512 512s-227.555328-101.879808-227.555328-227.555328S386.32448 56.889344 512 56.889344z m0 56.88832c-94.256128 0-170.667008 76.41088-170.667008 170.667008S417.743872 455.110656 512 455.110656s170.667008-76.409856 170.667008-170.665984c0-94.257152-76.41088-170.667008-170.667008-170.667008z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconUserO.defaultProps = {
  size: 18,
};

VanIconUserO = React.memo ? React.memo(VanIconUserO) : VanIconUserO;

export default VanIconUserO;
