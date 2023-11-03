import React, { ReactElement } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { COLORS } from '../../constants/colors';

interface OwnProps extends SvgProps {
  stroke?: string;
  fill?: string;
}

export const CCTVIcon = (props: OwnProps): ReactElement => {
  const { stroke = COLORS.white, fill = COLORS.transparent } = props;

  return (
    <Svg width='26' height='26' viewBox='2 2 20 20' fill={fill}>
      <Path
        d="M6.03 12.03l2 3.47-2.53 3.18L2 12.62l4.03-.59M17 18v-2.71c.88-.39 1.5-1.26 1.5-2.29 0-.57-.2-1.1-.53-1.5l1.97-1.15c1.01-.59 1.36-1.88.77-2.89l-1.38-2.4a2.125 2.125 0 00-2.89-.78L8.31 9c-.95.53-1.28 1.75-.73 2.71l1.5 2.6c.55.95 1.78 1.28 2.73.73l1.88-1.08c.25.59.72 1.07 1.31 1.33V18c0 1.1.9 2 2 2h5v-2h-5z"
      />
    </Svg>
  );
};
