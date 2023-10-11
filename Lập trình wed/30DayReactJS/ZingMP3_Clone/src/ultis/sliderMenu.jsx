import icon from './icons'; // Import the AutoAwesomeIcon component

import React from 'react'

const {AutoAwesomeIcon, InsightsIcon, RadioIcon, LibraryMusicIcon} = icon;
export const sliderMenu = [
  {
    id: 1,
    path: "",
    name: "Khám phá",
    icons:   <React.Fragment><AutoAwesomeIcon /></React.Fragment>
  },
  {
    id: 2,
    path: "zing-chart",
    name: "Cá nhân",
    icons: <React.Fragment>< InsightsIcon /></React.Fragment>,
  },
  {
    id: 3,
    path: "radio",
    name: "Radio",
    icons: <React.Fragment>< RadioIcon /></React.Fragment>
  },
  {
    id: 4,
    path: "mymusic",
    name: "Thư viện",
    icons: <React.Fragment>< LibraryMusicIcon /></React.Fragment>

  }
];
