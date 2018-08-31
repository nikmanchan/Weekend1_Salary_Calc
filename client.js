console.log('js');

$( document ).ready( readyNow );

function readyNow() {
    console.log('JQ')
    $('#addToEmployeeTable').on('click', submitClick );
    $('totalMonthly').on('click', )
}

function submitClick() {
    console.log('submit was clicked!')
    let newFirstName = $('firstName').val();
    let newLastName = $('lastName').val();
    let newId = $('id').val();
    let newTitle = $('title').val();
    let newAnnualSalary = $('annualSalary').val();
}

