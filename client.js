console.log('js');

$( document ).ready( readyNow );

function readyNow() {
    console.log('JQ')
    $('#addToEmployeeTable').on('click', submitClick );
    $('totalMonthly').on('click', )
}

function submitClick() {
    console.log('submit was clicked!')
    let newFirstName = $('#firstName').val();
    let newLastName = $('#lastName').val();
    let newId = $('#id').val();
    let newTitle = $('#title').val();
    let newAnnualSalary = $('#annualSalary').val();

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
}
