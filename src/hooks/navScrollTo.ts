import getCoords from "../modules/getCoords";
import { animateScroll } from "./animateScroll";

export const scrollTo = ( id: string, duration = 3000 ) => {
       // the position of the scroll bar before the user clicks the button
       const initialPosition = window.scrollY;

       // decide what type of reference that is
       // if neither ref or id is provided  set element to null
       const element = document.getElementById(id);



       animateScroll({
              targetPosition: getCoords(element).top,
              initialPosition,
              duration
       });

};