//We will call the weather api here which will give the total weather conditions alongwith
//tell the current weather at a given latitude and longitude is safe or not.
import axios from "axios";
//Calling the API
const weather = async (latitude, longitude) => {
  let data = {};
  await axios
    .get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=dd3508ba7eb1b2b5f26653a552363746`
    )
    .then((res) => {
      console.log(res.data);
      data = res.data;
    })
    .catch((err) => {
      console.log("Weather error: ", err);
    });
    return data;
};

//Collecting the results in json, and determining its safety
export const safety = async (latitude, longitude) => {
  const data = await weather(latitude, longitude);
  const current = data.current;
  const hourly = data.hourly;
  const daily = data.daily;
  let mobility;
  const parameters = {current, hourly, daily, mobility};
  //Giving weightage to the parameters for safety like 1.0 to snow, 2.0 to rain etc etc. and will
  // be given to mobility 

  let snow = current.snow;

  //Calculations here



  //Returning the value
  return parameters;
};
