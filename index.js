
var json = [{
  "id" : "123456", 
  "msg"   : "For the given JSON iterate of for loops",
  "task" : "zen portal task",
  "mail": "json@gmail.com"
},
{
  "id" : "567890", 
  "msg"   : "For the given JSON iterate of for loops",
  "task" : "zen portal task",
  "mail": "jsonjson@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
  var obj = json[i];

  console.log(obj.id);
  console.log(obj.msg);
  console.log(obj.task);
  console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.msg); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
console.log(json[key].id);
//console.log(json[key].msg);

}
}
//for Of
let text = "";
for (let x of json[key].task) {
text += x; 
}
console.log(text);