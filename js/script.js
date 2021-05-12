// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

// Defining function that actives when user presses "Calculate" Button
function userInputClick() {
  // Get input from user and store it in const variable
  const radius = parseFloat(document.getElementById("radius-entered").value)

  // Making calculations
  const volume = (4/3)*Math.PI*radius**3

  // Output calculations
  document.getElementById('volume').innerHTML = "Volume is: " + volume.toFixed(2)
}