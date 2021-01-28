$('[data-mdb-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh');
});

VANTA.WAVES({
  el: ".promo",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x435f,
  shininess: 90.00,
  waveHeight: 40.00,
  waveSpeed: 0.50,
  zoom: 0.65
});

function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
      window.setTimeout(SVS_B, curTime, eAmt, where);
      curTime += time / 100;
  }
}

function SVS_B(eAmt, where) {
  if(where == "center" || where == "")
      window.scrollBy(0, eAmt / 2);
  if (where == "top")
      window.scrollBy(0, eAmt);
}

import smoothscroll from 'smoothscroll-polyfill';
// or if linting/typescript complains
import * as smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();