import React, { ReactElement } from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLORS } from '../../constants/colors';

type OwnProps = {
  stroke?: string;
  fill?: string;
};

export const WarningIcon = (props: OwnProps): ReactElement => {
  const { stroke = COLORS.white, fill = COLORS.transparent } = props;

  return (
    <Svg width='12' height='12' viewBox='0 0 1024 1024' fill={fill}>
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
      />
    </Svg>
  );
};
