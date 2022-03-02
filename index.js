
//function griding(id){
//    var team=document.getElementById("team-info");
//    var head= document.createElement("h1");
//    head.innerHTML=id;
//    team.appendChild(head);
//}
//for( var pos=0 ; pos<api.length; pos++){
//    griding( api[pos].fullName);
//    
//}
//


var logoapi=[{"name":"Chennai Super Kings","logo":"https://i.pinimg.com/originals/85/52/f8/8552f811e95b998d9505c43a9828c6d6.jpg","id":0,"url":"csk.html","color":"linear-gradient( to left,pink,white, skyblue);"},
{"name":"Royal Challengers Bangalore","logo":"https://wallpapercave.com/wp/wp7433281.jpg","id":1,"url":"rcb.html"},
{"name":"Kolkata Knight Riders","logo":"https://i.pinimg.com/originals/f7/b5/58/f7b55823246e24db47755122401ae1e4.jpg","id":2,"url":"kkr.html"},
{"name":"Punjab Kings","logo":"https://i.cdn.newsbytesapp.com/images/l23620220212170928.jpeg","id":3,"url":"kx11p.html","color":"linear-gradient( to left,pink,white, skyblue);"},
{"name":"Delhi Capitals","logo":"https://d3pc1xvrcw35tl.cloudfront.net/ln/images/686x514/teamsinnerintrodc534x432-resize-534x432-a7542dd51f-d979030f10e79596_202009106828.jpeg","id":4,"url":"dc.html"},
{"name":"SunRisers Hydrabad","logo":"https://static-ai.asianetnews.com/images/01ehy33k8jazpe1tm0eh7c46sw/sunrisers-hyderabad-jpg.jpg","id":5,"url":"srh.html"},
{"name":"Rajasthan Royals","logo":"https://etimg.etb2bimg.com/photo/84914367.cms","id":6,"url":"rr.html"},
{"name":"Mumbai Indians","logo":"https://pixlok.com/wp-content/uploads/2021/01/MI_Logo_With_Blue_Background-300x300.jpg","id":7,"url":"mi.html"},

]


function teaming(logosrc,name,logoid,url,color){
    var teamlogo=document.createElement("div");
    var teamlogoimg=document.createElement("img");
    teamlogo.className="team-info"
    teamlogo.id="dot"+logoid
    teamlogoimg.className="teamimg"
    teamlogoimg.src=logosrc
    teamlogoimg.alt=logoid
    
    
    var teamName=document.createElement("h3");
    teamName.id="team-name"
    teamName.innerHTML=name.toUpperCase()
    teamlogo.appendChild(teamlogoimg);
    teamlogo.appendChild(teamName)
    teamlogo.onclick=function(){
        window.location.href = url;
    };

    


    var home=document.getElementById("home");
    home.appendChild(teamlogo)

}
for (var pos=0;pos<logoapi.length;pos++){
    teaming(logoapi[pos].logo,logoapi[pos].name,logoapi[pos].id,logoapi[pos].url,logoapi[pos].color)
}



localFile=JSON.parse(localStorage.getItem("data"));
console.log(localFile.Name)
for(i=0;i<localFile.length;i++){
    var teamlogo=document.createElement("div");
    var teamlogoimg=document.createElement("img");
    teamlogo.className="team-info"
    teamlogoimg.className="teamimg"
    teamlogoimg.src=localFile[i].Url
    teamlogoimg.alt="44"
    
    
    var teamName=document.createElement("h3");
    teamName.id="team-name-1"
    teamName.innerHTML=localFile[i].Name
    teamlogo.appendChild(teamlogoimg);
    teamlogo.appendChild(teamName)
    

    


    var Yourteam=document.getElementById("yourteam");
    Yourteam.appendChild(teamlogo);
    console.log(JSON.parse(localStorage.getItem("data")));
    

}