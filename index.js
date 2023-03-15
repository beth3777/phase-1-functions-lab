function distanceFromHqInBlocks(blocks) {
    const hq = 42
    return Math.abs(hq-blocks)
}

function distanceFromHqInFeet(currentStreet){
    const feetDistance=distanceFromHqInBlocks(currentStreet)*264
    return feetDistance
}

function distanceTravelledInFeet(start,destination) {
    const feet = 264
    const lengthInBlocks = Math.abs(destination-start)
    const distanceInFeet =lengthInBlocks*feet
    return distanceInFeet
}

function calculatesFarePrice(start,destination){
    const distanceTravelledInFeet','start,destination';'
    let farePrice;
if (distance<400){
    farePrice=0;
}else if (distance>400 && distance<=2000){
    farePrice=(distance-400)*0.02;
}else if (distance>2000 && distance<=2500){
    farePrice=25;
}else {
    farePrice='cannot travel that far';
}
   return farePrice;
}