import React from 'react';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';

type OwnProps = {
  height: number | string;
  width: number | string;
  borderRadius: number;
  gradientBegin: string;
  gradientEnd: string;
};

export const GradientBackground = ({
  height,
  width,
  borderRadius,
  gradientBegin,
  gradientEnd,
}: OwnProps) => (
  <Svg
    height={height}
    width={width}
    style={{position: 'absolute'}}
  >
    <Defs>
      <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
        <Stop offset="0" stopColor={gradientBegin} stopOpacity="1" />
        <Stop offset="1" stopColor={gradientEnd} stopOpacity="1" />
      </LinearGradient>
    </Defs>
    <Rect
      x="0"
      y="0"
      rx={borderRadius}
      width="100%"
      height="100%"
      fill="url(#grad)"
    />
  </Svg>
);
