let btnAdd = document.querySelector('#addTeacher');
let table = document.querySelector('#teacherTable');
 
 
let nameInput = document.querySelector('#name');
let subjectInput = document.querySelector('#Subjects');
let clusterInput = document.querySelector('#clusters');

//sports table part
let btnAddSport = document.querySelector('#addTeam');
let tableSport = document.querySelector('#SportsTable');
//table variables
let teamNameInput = document.querySelector('#teamName');
let fieldInput = document.querySelector('#Sportfields');

//for teacher for-sports
let btnDis1 = document.querySelector('#for-teacher');
let  bir= document.querySelector('#birinci');
let  iki= document.querySelector('#ikinci');
//for team
let btnDis2 = document.querySelector('#for-sports'); 

btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let subject = subjectInput.value;
   
    let cluster = clusterInput.options[clusterInput.selectedIndex].text;
    if(name!='' && subject!=''){

        let template = `
                <tr>
                    <td>${name}</td>
                    <td>${subject}</td>
                    <td>${cluster}</td>
                </tr>`;
 
    table.innerHTML += template;
    nameInput.value=null;
    subjectInput.value=null;

    }
    
    

});

//second Button
btnAddSport.addEventListener('click', () => {
    let teamName = teamNameInput.value;
    let type = fieldInput.options[fieldInput.selectedIndex].text;

    if(teamName!=''){
        let template = `
        <tr>
            <td>${type}</td>
            <td>${teamName}</td>
    
        </tr>`;

        tableSport.innerHTML += template;
        teamNameInput.value=null;


    }
 
   
   
    

});


btnDis1.addEventListener('click', () => {
  
    bir.style.display="block"
    iki.style.display="none"

});

btnDis2.addEventListener('click', () => {
  
    bir.style.display="none"
    iki.style.display="block"

});



