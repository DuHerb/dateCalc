
import './styles.css';
import $ from 'jquery';
import { getDayString } from './dateCalc.js'

$(document).ready(function() {
  $('#dateSubmit').on('click', function(e){
    e.preventDefault();
    let date = new Date($('#dateInput').val()); //2019-5-29
    let today = new Date("5-29-2019");
    console.log(date);
    console.log(today);
    $('#output').text(getDayString(date.getUTCDay()));
  });

});

// 