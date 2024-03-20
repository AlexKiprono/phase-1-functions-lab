// Code your solution in this file!

function distanceFromHqInBlocks(block) {
    const hqBlock = 42;
    return Math.abs(block - hqBlock);
}

function distanceFromHqInFeet(block) {
    const BlockInFeet = 264;
    return Math.abs(block - 42) * BlockInFeet;
}

function distanceTravelledInFeet(start, destination) {
    const BlockInFeet = 264;
    return Math.abs(destination -start) * BlockInFeet
}


function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264;
  
    if (distance <= 400) {

      return 0;
    } 
    else if (distance > 400 && distance <= 2000) {
        const distance = 528;
     
        return  Math.abs(distance - 400) * 0.02;
    } 
    else if (distance > 2000 && distance <= 2500) {
      
      return 25;
    } 
    else {
      return 'cannot travel that far';
    }
  }
  