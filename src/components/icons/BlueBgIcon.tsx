import { View } from "react-native";
import React from "react";
import { Svg, Path, G, Defs, FillRule } from "react-native-svg";
interface BlueBgIconProps {
  fill?: any;
}
const BlueBgIcon: React.FC<BlueBgIconProps> = ({ fill }) => {
  return (
    <Svg width="428" height="528" viewBox="0 0 428 528" fill="none">
      <G filter="url(#filter0_ii_15_839)">
        <Path
          d="M407 75.5C407 102.286 385.286 124 358.5 124C331.714 124 310 102.286 310 75.5C310 48.7142 331.714 27 358.5 27C385.286 27 407 48.7142 407 75.5Z"
          fill="#1879FF"
        />
      </G>
      <G filter="url(#filter1_ii_15_839)">
        <Path
          d="M162 78C162 148.692 104.692 206 34 206C-36.6924 206 -94 148.692 -94 78C-94 7.30756 -36.6924 -50 34 -50C104.692 -50 162 7.30756 162 78Z"
          fill="#1879FF"
        />
      </G>
      <G filter="url(#filter2_ii_15_839)">
        <Path
          d="M545 319.5C545 391.573 486.573 450 414.5 450C342.427 450 284 391.573 284 319.5C284 247.427 342.427 189 414.5 189C486.573 189 545 247.427 545 319.5Z"
          fill="#1879FF"
        />
      </G>
      <G filter="url(#filter3_ii_15_839)">
        <Path
          d="M364 506C364 518.15 354.15 528 342 528C329.85 528 320 518.15 320 506C320 493.85 329.85 484 342 484C354.15 484 364 493.85 364 506Z"
          fill="#1879FF"
        />
      </G>
      <G opacity="0.83" filter="url(#filter4_ii_15_839)">
        <Path
          d="M55.1002 421.492C73.9422 427.839 84.0717 448.258 77.7249 467.1C71.3781 485.942 50.9586 496.072 32.1165 489.725C13.2745 483.378 3.14507 462.959 9.49184 444.117C15.8386 425.274 36.2582 415.145 55.1002 421.492Z"
          fill="#1879FF"
        />
      </G>
    </Svg>
  );
};

export default BlueBgIcon;
