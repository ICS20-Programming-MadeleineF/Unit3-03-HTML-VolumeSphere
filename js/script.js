// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of a pyramid.
 */
function calculate() {
  // input
  let radius = parseFloat(document.getElementById('radius-of-sphere').value)
  
  // process
  let volume = (4/3) * (Math.PI) * (radius ** 3)
  
  // output
  document.getElementById('volume').innerHTML = 'The volume of the sphere is: ' + volume.toFixed(3) + ' cm³'
}