console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ')
    $('#addToEmployeeTable').on('click', submitClick);
    $('#employeeTable').on('click', '#deleteButton', handleDelete);
}

// declare class of Employees
class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
    // class creates an object, which are easier to reference as opposed to an array
}

// monthly expenditure array
let expenditure = [];

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
        <td><button id="deleteButton">Delete</button></td>
    </tr>
    `);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    employeeGroup.push(newEmployee);

    calculateMonthlyCost();

    function calculateMonthlyCost() {
        console.log('monthly costs are being calculated!');

        let monthlySalary = Number(newAnnualSalary) / 12;

        expenditure.push(monthlySalary);
        let sum = expenditure.reduce((total, amount) => total + amount);
        $('#totalMonthly').empty();

        $('#totalMonthly').append('$', sum);

        if (sum > 20000) {
            $('#totalMonthly').css('background-color', 'red');
        }
    }
}

function handleDelete() {
    console.log('delete was clicked!');
    $(this).closest('tr').remove();
}