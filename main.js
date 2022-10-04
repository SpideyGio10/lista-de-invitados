var name_of_people=[];

function submit(){
    var guest_name=document.getElementById("name1").value;
    name_of_people.push(guest_name);
    console.log(guest_name);
    console.log(name_of_people);
    document.getElementById("display_name").innerHTML=name_of_people.toString();
}

function sorting(){
    name_of_people.sort();
    var i=name_of_people.join("<br>");
    console.log(name_of_people);
    document.getElementById("sorted").innerHTML=i.toString();
}

function show(){
    var i=name_of_people.join("<br>");
    console.log(name_of_people);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort_button").style.display="block";
}

function searching(){
    var s=document.getElementById("s1").value;
    var found=0;
    var j;
for(j=0; j<names_of_people.length; j++);
{
    if(s==names_of_people[j]){
        found=found+1;
    }
}
document.getElementById("p2").innerHTML="name found"+found+"time/s";
console.log("found name"+found+"time/s");
}