import React, { ReactElement } from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../constants/colors';

type OwnProps = {
  stroke?: string;
  fill?: string;
};

export const HomeIcon = (props: OwnProps): ReactElement => {
  const { stroke = COLORS.white, fill = COLORS.transparent } = props;

  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' strokeWidth="2" fill={fill}>
      <Path
        d="M2.40002 9.24369C2.40002 8.84967 2.60057 8.48001 2.93823 8.25167L11.2582 2.62515C11.7023 2.32482 12.2977 2.32482 12.7418 2.62515L21.0618 8.25167C21.3995 8.48001 21.6 8.84967 21.6 9.24369V19.774C21.6 20.7824 20.7404 21.5999 19.68 21.5999H4.32002C3.25964 21.5999 2.40002 20.7824 2.40002 19.774V9.24369Z"
        stroke={stroke}
      />
    </Svg>
  );
};
