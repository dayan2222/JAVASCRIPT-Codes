
function myFunction(){
        //states
        var Sindh = ["KHI","HYD"];

        var Punjab = ["LHR","MULTAN"];

        var FedralCapital=["ISL"];

        var Balochistan = ["QTA","QALAT"];

        var KPK = ["PSR","SAWAT"];
        
        //detect provience
        var detectState="Not Listed";

        var cityName = document.getElementById("cityName").value;
        var cityTemprature = document.getElementById("cityTemperature").value;
         if(cityTemprature<30)
         {
             cityTemprature+3;
             weather="Cool";   
         }
         else if(cityTemprature<35)
         {
             cityTemprature+3;
             weather="Good";   
         }
         else if(cityTemprature<40)
         {
             cityTemprature+3;
             weather="Warm";
         }
         else if(cityTemprature<40)
         {
             cityTemprature+3;
             weather="Hot";
         }
         else{
             //do nothing
         }
    
    for(var i=0;i<Sindh.length;i++)
    {
        if(cityName===Sindh[i]){
            detectState="Sindh";
            document.getElementById("demo").innerHTML=cityName+" belongs to "+detectState+" & weather is "+weather;
        }
    
    }
    for(var i=0;i<Punjab.length;i++)
    {
        if(cityName===Punjab[i]){
            detectState="Punjab";
            document.getElementById("demo").innerHTML=cityName+" belongs to "+detectState+" & weather is "+weather;
        }
    }
    for(var i=0;i<KPK.length;i++)
    {
        if(cityName===KPK[i]){
            detectState="KPK";
            document.getElementById("demo").innerHTML=cityName+" belongs to "+detectState+" & weather is "+weather;
        }
    }
    for(var i=0;i<Balochistan.length;i++)
    {
        if(cityName===Balochistan[i]){
            detectState="Balochistan";
            document.getElementById("demo").innerHTML=cityName+" belongs to "+detectState+" & weather is "+weather;
        }
    }
    for(var i=0;i<FedralCapital.length;i++)
    {
        if(cityName===FedralCapital[i]){
            detectState="FedralCapital";
            document.getElementById("demo").innerHTML=cityName+" belongs to "+detectState+" & weather is "+weather;
        }
    
    } 
}
//input

/*
var cityName = prompt("Enter the Name of City");
var cityTemprature = parseInt(prompt("Temprature C"));

     if(cityTemprature<30)
     {
         cityTemprature+3;
         weather="Cool";   
     }
     else if(cityTemprature<35)
     {
         cityTemprature+3;
         weather="Good";   
     }
     else if(cityTemprature<40)
     {
         cityTemprature+3;
         weather="Warm";
     }
     else if(cityTemprature<40)
     {
         cityTemprature + 3 ;
         weather="Hot";
     }
     else{
         //do nothing
     }
*/
     /*
for(var i=0;i<Sindh.length;i++)
{
    if(cityName===Sindh[i]){
        detectState="Sindh";
        alert(cityName+" belongs to "+detectState+" & weather is "+weather);
    }

}
for(var i=0;i<Punjab.length;i++)
{
    if(cityName===Punjab[i]){
        detectState="Punjab";
        alert(cityName+" belongs to "+detectState+" & weather is "+weather);
    }
}
for(var i=0;i<KPK.length;i++)
{
    if(cityName===KPK[i]){
        detectState="KPK";
        alert(cityName+" belongs to "+detectState+" & weather is "+weather);
    }
}
for(var i=0;i<Balochistan.length;i++)
{
    if(cityName===Balochistan[i]){
        detectState="Balochistan";
        alert(cityName+" belongs to "+detectState+" & weather is "+weather);
    }
}
for(var i=0;i<FedralCapital.length;i++)
{
    if(cityName===FedralCapital[i]){
        detectState="FedralCapital";
        alert(cityName+" belongs to "+detectState+" & weather is "+weather);
    }

}

*/