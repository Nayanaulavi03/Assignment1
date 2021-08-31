let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let empIDInput = document.querySelector('#empID');
let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');
let cityInput = document.querySelector('#city');


btnAdd.addEventListener('click', () => {
    let empID = empIDInput.value;
	let name = nameInput.value;
    let age = ageInput.value;
    let city = cityInput.value;

    let template = `
                <tr>
				    <td>${empID}</td>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${city}</td>
                </tr>`;

    table.innerHTML += template;
});