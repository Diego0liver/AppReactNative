import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark-question" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15.006 18.804l-3.006 -1.804l-5 3v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5.5" />
  <path d="M19 22v.01" />
  <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
</svg>
`;

const AjudaIcon = ({ width, height, color }) => {
  return <SvgXml xml={xml} width={width} height={height} fill={color} />;
};

export default AjudaIcon;