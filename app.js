const button = document.querySelector('.btn');
const show = document.querySelector('.show');
const names = [
  {first:'Permata',last:'Dewi', year:17,city:'Surabaya'},
  {first:'Nurul',last:'Atsilah',year:16,city:'Jakarta'},
  {first:'Eliza',last:'Putri',year:26,city:'Bandung'},
  {first:'John',last:'Brick',year:17,city:'Lampung'},
  {first:'Galih',last:'Permana',year:14,city:'Surabaya'},
  {first:'Eko',last:'Prasetyo',year:35,city:'Lampung'},
];
function Agefilterinput() {
  const a = document.querySelector('.number-filter').value;
  const filterAge = names.filter(age=>{
  if(a=='') return;
  if(age.year == a){
    return true;
  }
  });
  showTable(filterAge);
  console.table(filterAge);
}
function inputFind() {
  const input = document.querySelector('.Find-first').value;
  if(input== '')return;
  const filterFind = names.filter(name=>name.first == input );
  if(filterFind==undefined){
    console.log('No Result');
    return;
  }
  console.table(filterFind);
  showTable(filterFind);
  
}
function inputFindLast() {
  const input = document.querySelector('.Find-last').value;
  if(input=='')return;
  const filterFindLast = names.filter(name=>name.last == input);
  if(filterFindLast==undefined){
    return;
  }
  showTable(filterFindLast);
  console.table(filterFindLast);
}
function inputFindCity(){
  const input = document.querySelector('.Find-city').value;
  if(input=='')return;
  const findCity = names.filter(name=>{
    if(name.city == input){
      return true;
    }
  });
  if(findCity==undefined){
    console.log('no result');
    return;
  }
  showTable(findCity);
  console.table(findCity);
}
function handleSelect() {
  console.log('ok');
  const ordered = names.sort((a,b)=>a.year > b.year ? 1 : -1);
  showTable(ordered);
  console.table(ordered);
}
function handleSelectUp() {
  const ordered = names.sort((a,b)=>a.year < b.year ? 1 : -1);
  showTable(ordered);
  console.table(ordered);
}
function showTable(AnyResult){
  show.innerHTML = AnyResult.map(order=>{
    return `
      <table>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Year</td>
          <td>City</td>
        </tr>
        <tr>
          <td>${order.first}</td>
          <td>${order.last}</td>
          <td>${order.year}</td>
          <td>${order.city}</td>
        </tr>
      </table>
    `
  }).join('');
}
button.addEventListener('click',Agefilterinput);
button.addEventListener('click',inputFind);
button.addEventListener('click',inputFindLast);
button.addEventListener('click',inputFindCity);

const selectElement = document.querySelector('.SelectSort');
selectElement.addEventListener('change', (event) => {
 console.log(event.target.value);
 let trueOrF = event.target.value == 'sortAge' ? true : false;
 let trueOrF1 = event.target.value == 'sortAgeUp' ? true : false;
 if(trueOrF == true){
  handleSelect();
 }
 if(trueOrF1 == true){
  handleSelectUp();
 }

});





// const ordered = inventors.sort((a,b)=> a.year > b.year ? 1 : -1);