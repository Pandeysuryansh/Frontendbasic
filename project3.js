const clock = document.getElementById('clock')
// const clockc = document.querySelector('#clock')   dono mein ek hi value aati hai


// har moment mein run hota hai/ js ke events ko control karta hai  
setInterval(function (){
let date = new Date()
// console.log(date.toLocaleTimeString());  console ke andar chalani hi nhi thi yeh
clock.innerHTML = date.toLocaleTimeString();

}, 1000) // koi method de dijiye aur bta dijiye kitti der badh usko run karna hai

