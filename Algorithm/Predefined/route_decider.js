//We will call a particular range of first 10kms, 50kms and 100kms radius for a particular latitude
// and longitude
import { getIntermediatePoints } from "../Helper/coordinates";
import { haversineDistance } from "../Helper/displacement";
import { safety } from "../Helper/weather";
//First call the displacement to get the displacement
const displace = haversineDistance();
let latpoints10 = [];
let latpoints50 = [];
let latpoints100 = [];

let longpoints10 = [];
let longpoints50 = [];
let longpoints100 = [];
//Now we have to compute 10kms, 50kms and 100kms radius for all these intermediates points,
//including starting and ending points
export function route_decide(source, destination, points) {
  //Then we will call the co-ordinates to get total intermediate co-ordinates any numbers
  const intermediates = getIntermediatePoints(source, destination, points);

  for (let i = 0; i < intermediates.length; i++) {
    //Keeping longitude constant and varying latitude to get new appropriate weather
    //For 10kms
    let lat10p = intermediates[i][0] + 10 / 111.32;
    let lat10s = intermediates[i][0] - 10 / 111.32;
    latpoints10.push([lat10p, intermediates[i][1]]);
    latpoints10.push([lat10s, intermediates[i][1]]);

    //For 50kms
    let lat50p = intermediates[i][0] + 50 / 111.32;
    let lat50s = intermediates[i][0] - 50 / 111.32;
    latpoints50.push([lat50p, intermediates[i][1]]);
    latpoints50.push([lat50s, intermediates[i][1]]);

    //For 100kms
    let lat100p = intermediates[i][0] + 100 / 111.32;
    let lat100s = intermediates[i][0] - 100 / 111.32;
    latpoints100.push([lat100p, intermediates[i][1]]);
    latpoints100.push([lat100s, intermediates[i][1]]);

    //Keeping latitude constant and varying longitude to get new appropriate weather
    //For 10kms
    let long10p =
      intermediates[i][1] + (10 / 111.32) * Math.cos(intermediates[i][0]);
    let long10s =
      intermediates[i][1] - (10 / 111.32) * Math.cos(intermediates[i][0]);
    longpoints10.push([intermediates[i][0], long10p]);
    longpoints10.push([intermediates[i][0], long10s]);

    //For 50kms
    let long50p =
      intermediates[i][1] + (50 / 111.32) * Math.cos(intermediates[i][0]);
    let long50s =
      intermediates[i][1] - (50 / 111.32) * Math.cos(intermediates[i][0]);
    longpoints50.push([intermediates[i][0], long50p]);
    longpoints50.push([intermediates[i][0], long50s]);

    //For 100kms
    let long100p =
      intermediates[i][1] + (100 / 111.32) * Math.cos(intermediates[i][0]);
    let long100s =
      intermediates[i][1] - (100 / 111.32) * Math.cos(intermediates[i][0]);
    longpoints100.push([intermediates[i][0], long100p]);
    longpoints100.push([intermediates[i][0], long100s]);
  }

  let safety10 = [];
  let safety50 = [];
  let safety100 = [];

  //getting safety from weather api for all points
  for (let i = 0; i < intermediates.length; i++) {
    safety();
  }
}
