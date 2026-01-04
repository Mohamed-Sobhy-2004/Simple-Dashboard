
let Apisde = 'https://dummyjson.com/users';
let Tbody = document.getElementById('tbodys');
let serch = document.getElementById('serch')
let btns = document.getElementById('btns')
let min_body = document.getElementById('min')
let closebar = document.getElementById('close-bar')
let mood = 'title'
let bar_men = document.getElementById('open-menu');

// BUTTON OPEN MENU IN PHONE
bar_men.onclick = function(){
  document.getElementById('menu-bar').style.display = 'block'
  bar_men.style.display = 'none';
  min_body.style.filter = 'blur(10px)'
}
// BUTTON CLOSE MENU IN PHONE
closebar.onclick = function(){
  document.getElementById('menu-bar').style.display = 'none';
  bar_men.style.display = 'block';
  min_body.style.filter = 'blur(0px)';
}
// Get API
async function gets(){
  try{
    
     res = await fetch(Apisde);
     data = await res.json();
    console.log(data)
    getdat(data.users)
    
      ac(data.users)

      calc(data.total,20)
      sercsh(data.users)
      
      let totalUs = document.getElementById('totalUs').innerText = data.total;
    }catch(error){
      console.log(error)
    }
    
  
  
  
}
// Get DATA FROM API
function getdat(userss){
  let afd = ''
  userss.forEach(el => {
    
    afd +=`
    <tr>
    <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.age}</td>
        <td>${el.email}</td>
        <td>${el.address.city}</td> 
          </tr>
        `
    });

    Tbody.innerHTML+= afd;
}
// SEARCH IN DATA
function sercsh(userss){

  let afd = ''
  
   
  if(mood == 'title'){
    userss.forEach(el => {
      if(el.firstName.toLowerCase().includes(serch.value.toLowerCase())){
       
        afd +=`
        <tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.age}</td>
        <td>${el.email}</td>
        <td>${el.address.city}</td> 
          </tr>
        `
   
      }
    
    });
    Tbody.innerHTML = afd;
  } else{
    sercshId(userss)
  }

}
// SEARCH BY ID
function sercshId(userss){
  let afd = ''
  
    userss.forEach(el => {
      if(el.email.includes(serch.value.toLowerCase())){
       
        afd +=`
        <tr>
        <td>${el.id}</td>
        <td>${el.firstName}</td>
        <td>${el.age}</td>
        <td>${el.email}</td>
        <td>${el.address.city}</td> 
          </tr>
        `
   
      }
    
    });
    Tbody.innerHTML = afd;
  

}
// Button SERCH BY NAME & ID
function moods(){
  
  if(mood == 'title'){
    serch.placeholder = `Search by Email`
    mood = 'id'
    btns.innerHTML = 'search By Name'
    console.log('id')
  }else {
    serch.placeholder = 'Search by Name'
    mood = 'title'
    btns.innerHTML = 'search By Email'
    console.log('title')
  }
}
// Fnction GET USER ACTIVE
function ac(us){
  us.forEach(function (e){
    if(e.age >= 30){
      document.getElementById('actv').innerText = e.age
    }
    
  })
}
// CALC 
function calc(countus,ord){
 let calccs = (ord / countus)*100;
 document.getElementById('rev').innerText = `${Math.floor(calccs)}%`
}
gets()