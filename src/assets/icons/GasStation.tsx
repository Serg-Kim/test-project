import React, { ReactElement } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { COLORS } from '../../constants/colors';

interface OwnProps extends SvgProps {
  stroke?: string;
  fill?: string;
}

export const GasStationIcon = (props: OwnProps): ReactElement => {
  const { stroke = COLORS.white, fill = COLORS.transparent } = props;

  return (
    <Svg width='24' height='24' viewBox='-2 -1 20 20' fill={stroke}>
      <Path
        d="M1 2a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 012 2v.5a.5.5 0 001 0V8h-.5a.5.5 0 01-.5-.5V4.375a.5.5 0 01.5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 00-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 010-1c.564 0 1.034.11 1.412.336.383.228.634.551.794.907.295.655.294 1.465.294 2.081v3.175a.5.5 0 01-.5.501H15v4.5a1.5 1.5 0 01-3 0V12a1 1 0 00-1-1v4h.5a.5.5 0 010 1H.5a.5.5 0 010-1H1V2zm9 0a1 1 0 00-1-1H3a1 1 0 00-1 1v13h8V2z"
      />
      <Path
        d="M3 2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5z"
      />
    </Svg>
  );
};
