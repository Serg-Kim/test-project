import React, { ReactElement } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { COLORS } from '../../constants/colors';

interface OwnProps extends SvgProps {
  stroke?: string;
  fill?: string;
}

export const TravelsIcon = (props: OwnProps): ReactElement => {
  const { stroke = COLORS.white, fill = COLORS.transparent } = props;

  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' strokeWidth="2" fill={fill}>
      <Path
        d="M11 20.5999C16.302 20.5999 20.6 16.3018 20.6 10.9999C20.6 5.69797 16.302 1.3999 11 1.3999C5.69809 1.3999 1.40002 5.69797 1.40002 10.9999C1.40002 16.3018 5.69809 20.5999 11 20.5999Z"
        stroke={stroke}
      />
      <Path
        d="M14.4976 7.50296L13.6491 13.1515L8.00057 14L8.84909 8.35149L14.4976 7.50296Z"
        stroke={stroke}
      />
    </Svg>
  );
};
