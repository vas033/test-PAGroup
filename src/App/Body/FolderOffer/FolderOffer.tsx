import React, { useEffect, useState } from 'react';
import getCoords from '../../../modules/getCoords';
import styles from './folderoffer.css';
import { SpecialProjects } from './SpesialProjects';
import { scroll } from '../../../hooks/scroll';
import SliderOffer from './SliderOffer/SliderOffer';

interface IMyFolderOffer {
  scrollPos?: number;
  windowHeight?: number;
  windowWidth?: number;
}

let diff = 0;
let scaleCoeff = 1;

export function FolderOffer({scrollPos, windowHeight, windowWidth}:IMyFolderOffer) {
  const offer = document.getElementById('folderOffer');

  if (offer && scrollPos) {
    let coordsOffer = getCoords(offer);
    let animHeight = coordsOffer.bottom - coordsOffer.top;

    if (scrollPos > coordsOffer.bottom - animHeight) {
      offer.style.willChange = 'transform';
      
      let percent = animHeight * 0.00001;
      diff = 13 - (coordsOffer.bottom - scrollPos) * percent;
      scaleCoeff = 1 - diff * 0.01;

      if (diff >= 0 && scaleCoeff >= 0.9) {
        offer.style.transform = `translateY(${diff}%) scale(${scaleCoeff})`
      } else if (diff<0 && scaleCoeff >= 1) {
        offer.style.transform = 'translateY(0) scale(1)'
      }
    } else {
      offer.style.transform = 'translateY(0) scale(1)'
    }
  }

  return (
    <div id='folderOffer'>
      <SpecialProjects />
      <SliderOffer scrollPos={scrollPos} windowWidth={windowWidth} />
    </div>
  );
}
