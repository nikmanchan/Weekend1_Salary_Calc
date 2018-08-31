console.log('js');

$( document ).ready( readyNow );

function readyNow() {
    console.log('JQ')
    $('#addToEmployeeTable').on('click', submitClick );
    $('totalMonthly').on('click', )
}

class Employee{ 
    constructor(firstName, lastName, id, title, annualSalary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.annualSalary = annualSalary;
    }

    calculateTotalMonthly() {





        let baseBonus = this.getBaseBonus();
		let yearAdjustment = this.getYearAdjustment();
		let incomeAdjustment = this.getIncomeAdjustment();
		console.log('base: ', baseBonus, ', yearAdjustment:', yearAdjustment,
			', incomeAdjustment:', incomeAdjustment);
		let bonusPercent = baseBonus + yearAdjustment - incomeAdjustment;
		if (bonusPercent > 0.13) {
			bonusPercent = 0.13;
		} else if (bonusPercent < 0) {
			bonusPercent = 0; // the last shall be first! DONE
		}
		console.log(this.name, 'bonus percent:', bonusPercent);
		let bonus = this.annualSalary * bonusPercent; // Annual is a funny looking word. Who needs it? DONE
		console.log(this.name + ' bonus: ' + bonus);
		return bonus;
    }
}

let employeeGroup = [];

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
