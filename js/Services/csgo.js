import React from 'react';
import superAgent from 'superagent';
const config={
               api_key: "wqgy9r9d7jbsrh9u23mrnxrg"
             }
//var res;
export default {
  getTournaments(){ 
    return new Promise((resolve, reject)=>{
    const tournamentUrl = "http://api.sportradar.us/csgo-t1/en/tournaments.json?api_key=" + config.api_key;
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
      return new Promise((resolve, reject)=> {
      var date= new Date();
      var day= date.getFullYear()+"-0"+(date.getMonth()+1)+"-0"+date.getDate();
      var url= "http://api.sportradar.us/csgo-t1/en/schedules/"+ day +"/schedule.json?api_key="+config.api_key;
      superAgent
      .get(url)
      .then((response)=>{
        resolve(response.body);
      }, 
        (err)=>{
        reject(err);
        });
    })
  },
  getMatch(id){
    return new Promise((resolve, reject)=>{
      var url="http://api.sportradar.us/csgo-t1/en/matches/"+id+"/summary.json?api_key="+config.api_key;
      superAgent
      .get(url)
      .then((response)=>{
        resolve(response.body);
      },
        (err)=>{
          reject(err);
        });
    })
  },
  getTourSchedule(id){
    return new Promise((resolve, reject)=>{
     var url = "http://api.sportradar.us/csgo-t1/en/tournaments/" + id + "/schedule.json?api_key=" + config.api_key;
      superAgent
      .get(url)
      .then((response)=>{
        resolve(response.body);
      },
        (err)=>{
          reject(err);
        });
    })
  }   
}