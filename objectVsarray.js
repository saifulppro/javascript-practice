var friendAge = [12,15,14,17,21];
var ami2 = {
    age: 17,
    weight: 55,
    height: 65,
    color: 'pink'
}
var lookingFor = 'age';
var myAge = ami2[lookingFor];
ami2[lookingFor] = 95;
console.log(ami2);