import React from "react";
import superAgent from "superagent";

//var val;
const config={
  api_key: "qe3va5trzf95bbgbwmg39shq"
}
export default {
  getTournaments(){
    return new Promise( (resolve, reject) => {
    const tournamentUrl = "http://api.sportradar.us/dota2-t1/en/tournaments.json?api_key="+config.api_key;
    superAgent
      .get(tournamentUrl)
      .then((response) => {
        resolve(response.body.tournaments);
      }, 
      (err)=>{
        reject(err);
      });
  })
},
  getToday(){
    return new Promise( (resolve,reject)=>{
      const date = new Date();
      var day= date.getFullYear()+"-0"+(date.getMonth()+1)+"-0"+date.getDate();
      var url= "http://api.sportradar.us/dota2-t1/en/schedules/"+day+"/schedule.json?api_key="+config.api_key;
      superAgent
        .get(url)
        .then((response) => {
          resolve(response.body);
        }, (err)=>{
          reject(err);
        });
    })
  }
};
