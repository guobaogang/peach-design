/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let VanIconUserCircleO = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.993856 455.128064c-62.747648 0-113.77664-51.028992-113.77664-113.777664 0-62.748672 51.028992-113.777664 113.77664-113.777664 62.748672 0 113.778688 51.028992 113.778688 113.777664 0 62.748672-51.030016 113.777664-113.778688 113.777664M682.660864 341.3504c0-94.265344-76.401664-170.667008-170.667008-170.667008-94.26432 0-170.665984 76.401664-170.665984 170.667008s76.40064 170.667008 170.665984 170.667008 170.667008-76.401664 170.667008-170.667008m116.001792 446.390272c-6.656 6.940672-13.652992 13.42464-20.763648 19.910656-3.01568 2.673664-5.974016 5.51936-9.046016 8.192-6.20032 5.291008-12.686336 10.070016-19.113984 14.905344-4.380672 3.18464-8.534016 6.598656-12.971008 9.670656-5.404672 3.697664-10.979328 6.998016-16.555008 10.411008-5.74464 3.526656-11.37664 7.22432-17.294336 10.524672-4.550656 2.446336-9.27232 4.550656-13.88032 6.825984-7.11168 3.584-14.164992 7.281664-21.561344 10.411008-3.867648 1.649664-7.907328 2.900992-11.945984 4.436992-8.192 3.185664-16.441344 6.486016-24.918016 9.15968-3.924992 1.193984-8.078336 2.048-12.059648 3.18464-8.64768 2.390016-17.29536 4.893696-26.169344 6.713344-6.371328 1.308672-12.971008 1.99168-19.456 3.01568-6.713344 1.024-13.312 2.332672-20.139008 3.072a404.601856 404.601856 0 0 1-40.788992 2.048c-13.710336 0-27.363328-0.683008-40.788992-2.048-6.827008-0.739328-13.425664-2.048-20.139008-3.072-6.542336-1.024-13.084672-1.707008-19.456-3.01568-8.875008-1.819648-17.521664-4.323328-26.169344-6.71232-3.981312-1.137664-8.134656-1.99168-12.059648-3.185664-8.476672-2.673664-16.726016-5.974016-24.918016-9.15968-4.038656-1.536-8.078336-2.787328-11.945984-4.436992-7.396352-3.129344-14.449664-6.827008-21.561344-10.411008-4.608-2.275328-9.329664-4.379648-13.937664-6.825984-5.859328-3.300352-11.491328-6.998016-17.236992-10.524672-5.57568-3.412992-11.20768-6.713344-16.555008-10.411008-4.436992-3.072-8.646656-6.484992-12.971008-9.670656-6.427648-4.835328-12.91264-9.61536-19.113984-14.905344-3.072-2.67264-6.03136-5.518336-9.046016-8.192-7.110656-6.484992-14.107648-12.969984-20.763648-19.910656a66.158592 66.158592 0 0 1-1.93536-2.161664C285.526016 686.19264 393.10336 625.77664 512 625.77664c118.897664 0 226.417664 60.416 288.596992 159.801344-0.681984 0.739328-1.251328 1.422336-1.934336 2.16064M113.777664 512c0-219.534336 178.688-398.222336 398.222336-398.222336S910.222336 292.465664 910.222336 512c0 84.820992-26.851328 163.270656-72.192 227.897344-71.851008-103.083008-190.748672-171.008-326.030336-171.008-135.281664 0-254.179328 67.924992-326.086656 171.008C140.628992 675.270656 113.77664 596.820992 113.77664 512m755.883008 280.860672c60.814336-77.425664 97.449984-174.705664 97.449984-280.860672 0-251.334656-203.776-455.110656-455.110656-455.110656-251.334656 0-455.110656 203.776-455.110656 455.110656 0 106.155008 36.579328 203.435008 97.449984 280.860672 31.004672 39.424 68.209664 73.556992 110.364672 100.92032 1.593344 0.96768 3.129344 1.820672 4.665344 2.788352a434.100224 434.100224 0 0 0 36.46464 20.820992c3.641344 1.876992 7.396352 3.584 11.036672 5.347328 10.752 5.06368 21.561344 9.785344 32.65536 13.995008 4.835328 1.820672 9.670656 3.64032 14.563328 5.347328 10.467328 3.584 21.10464 6.713344 31.971328 9.556992 5.404672 1.42336 10.638336 2.95936 16.099328 4.153344 11.264 2.502656 22.699008 4.380672 34.246656 6.086656 5.00736 0.683008 9.956352 1.707008 15.076352 2.332672 16.611328 1.820672 33.39264 2.900992 50.516992 2.900992 17.123328 0 33.905664-1.08032 50.516992-2.900992 5.06368-0.625664 10.012672-1.649664 15.076352-2.332672 11.491328-1.705984 22.982656-3.584 34.246656-6.086656 5.460992-1.195008 10.694656-2.731008 16.099328-4.153344 10.809344-2.843648 21.504-5.972992 31.971328-9.556992 4.836352-1.707008 9.67168-3.526656 14.507008-5.347328 11.150336-4.209664 21.95968-8.931328 32.654336-13.995008 3.697664-1.763328 7.452672-3.470336 11.092992-5.347328a434.100224 434.100224 0 0 0 36.465664-20.820992c1.536-0.96768 3.072-1.820672 4.665344-2.788352 42.155008-27.363328 79.36-61.49632 110.364672-100.92032"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

VanIconUserCircleO.defaultProps = {
  size: 18,
};

VanIconUserCircleO = React.memo ? React.memo(VanIconUserCircleO) : VanIconUserCircleO;

export default VanIconUserCircleO;
