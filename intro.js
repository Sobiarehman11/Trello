var currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNext = document.querySelector(".icons");
//current date,month,year
var date = new Date();
year = date.getFullYear();
month = date.getMonth();

var months = ["JANUARY","FEBERUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTUBER","NOVEMBER","DECEMBER"];
function renderCalender (){
var lastDate =new Date(year,month + 1,0).getDate()
var liTag = "";
for (var i = 1; i <=lastDate; i++){
    liTag +=`<li>${i}</li>`;
}
currentDate.innerHTML = `${months[month]} ${year}`;
daysTag.innerHTML = liTag;
}
renderCalender();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click",()=>{
console.log(icon);
    });
});