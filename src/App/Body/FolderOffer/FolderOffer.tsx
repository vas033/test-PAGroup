import React, { useEffect, useState } from 'react';
import getCoords from '../../../modules/getCoords';
import styles from './folderoffer.css';
import { SpecialProjects } from './SpesialProjects';
import { scroll } from '../../../hooks/scroll';
import SliderOffer from './SliderOffer/SliderOffer';

let diff = 0;
let scaleCoeff = 1;
export function FolderOffer() {
  let pos = scroll();
  const offer = document.getElementById('folderOffer');

  if (offer) {
    let coordsOffer = getCoords(offer);
    let animHeight = Math.round((coordsOffer.bottom - coordsOffer.top));

    if (pos.scrollPos > coordsOffer.bottom - animHeight) {
      offer.style.willChange = 'transform';
      
      let percent = animHeight * 0.00001;
      diff = 10 - (coordsOffer.bottom - pos.scrollPos) * percent;
      scaleCoeff = 1 - diff * 0.01;

      diff >= 0 && scaleCoeff >= 0.9 ? offer.style.transform = `translateY(${diff}%) scale(${scaleCoeff})`: '';
      

      console.log(scaleCoeff)
    }
  }

  return (
    <div id='folderOffer'>
      <SpecialProjects />
      <SliderOffer />
    </div>
  );
}
