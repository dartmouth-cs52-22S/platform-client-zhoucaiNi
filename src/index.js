// change require to es6 import style
import $ from 'jquery';
import './style.scss';

// program to display a text using setInterval method
let num = 0;
const track = () => {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds.`);
};

setInterval(track, 1000);
