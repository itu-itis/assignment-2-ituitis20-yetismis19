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
 
 
btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let subject = subjectInput.value;
   
    let cluster = clusterInput.options[clusterInput.selectedIndex].text;
 
    let template = `
                <tr>
                    <td>${name}</td>
                    <td>${subject}</td>
                    <td>${cluster}</td>
                </tr>`;
 
    table.innerHTML += template;
    nameInput.value=null;
    subjectInput.value=null;
    

});

//second Button
btnAddSport.addEventListener('click', () => {
    let teamName = teamNameInput.value;
    let type = fieldInput.options[fieldInput.selectedIndex].text;
 
    let template = `
                <tr>
                    <td>${type}</td>
                    <td>${teamName}</td>
            
                </tr>`;
 
        tableSport.innerHTML += template;
    teamNameInput.value=null;
   
    

});


