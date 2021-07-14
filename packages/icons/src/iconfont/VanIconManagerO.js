/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconManagerO = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M170.667008 713.37984v196.842496h682.665984v-196.84352L669.78816 625.778688H354.21184L170.667008 713.37984z m-24.50432-51.341312l183.54688-87.602176a56.889344 56.889344 0 0 1 24.50432-5.547008h315.573248c8.47872 0 16.850944 1.8944 24.50432 5.547008l183.545856 87.602176a56.889344 56.889344 0 0 1 32.385024 51.341312v196.842496c0 31.418368-25.469952 56.88832-56.889344 56.88832H170.667008c-31.419392 0-56.889344-25.469952-56.889344-56.88832v-196.84352a56.889344 56.889344 0 0 1 32.385024-51.340288zM512 455.110656c94.256128 0 170.667008-76.409856 170.667008-170.665984 0-94.257152-76.41088-170.667008-170.667008-170.667008s-170.667008 76.41088-170.667008 170.667008S417.743872 455.110656 512 455.110656zM512 512c-125.67552 0-227.555328-101.879808-227.555328-227.555328S386.32448 56.889344 512 56.889344s227.555328 101.879808 227.555328 227.555328S637.67552 512 512 512z m85.332992 227.555328h113.777664c15.710208 0 28.444672 12.735488 28.444672 28.444672s-12.734464 28.444672-28.444672 28.444672h-113.77664c-15.710208 0-28.444672-12.735488-28.444672-28.444672s12.734464-28.444672 28.443648-28.444672z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconManagerO.defaultProps = {
  size: 18,
};

VanIconManagerO = React.memo ? React.memo(VanIconManagerO) : VanIconManagerO;

export default VanIconManagerO;
