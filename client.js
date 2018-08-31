console.log('js');

$( document ).ready( readyNow );

function readyNow() {
    console.log('JQ')
    $('#addToEmployeeTable').on('click', submitClick );
    $('totalMonthly').on('click', )
    calculateMonthlyCost();
}

class Employee{ 
    constructor(firstName, lastName, id, title, annualSalary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.annualSalary = annualSalary;
    }
// class creates an object, which are easier to reference as opposed to an array
}

function calculateMonthlyCost() {
    let monthlySalary = this.annualSalary / 12
    
    let expenditure = [];
    
    expenditure.push( Number(monthlySalary));

    let sum = expenditure.reduce((acc, val) => {
        return acc + val;
      });

    $('#totalMonthly').append(String() )
}
// call calculateMonthlyCost function within my add or delete employee funcion, pass the array of employees through
// the monthly cost function and then append it to the dom
let employeeGroup = [];
// reference employeeGroup[i] to specify certain employees
function submitClick() {
    console.log('submit was clicked!')
    let newFirstName = $('#firstName').val();
    let newLastName = $('#lastName').val();
    let newId = $('#id').val();
    let newTitle = $('#title').val();
    let newAnnualSalary = $('#annualSalary').val();

    let newEmployee = new Employee(newFirstName, newLastName, newId, newTitle, newAnnualSalary);

    $('#employeeTable').append(`
    <tr>
        <td>` + newFirstName + `</td>
        <td>` + newLastName + `</td> 
        <td>` + newId + `</td>
        <td>` + newTitle + `</td>
        <td>` + newAnnualSalary + `</td>

    </tr>
    `);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    employeeGroup.push( newEmployee );

}
