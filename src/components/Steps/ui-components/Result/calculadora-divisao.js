const equal = (form) => {
    const totalExpenses = sumTotalExpenses(form);

    const {people} = form;

    const amountToPay = totalExpenses / 2;

    return people.map((person) => {
        return {
            ...person,
            amountToPay,
            percentageToPay: 50
        };
    });

};


const ratable = (form) => {
    const totalExpenses = sumTotalExpenses(form);

    const totalSalary = sumTotalSalaries(form);

    return form.people.map((person) => {
        const percentageToPay = person.salary / totalSalary;
        const amountToPay = percentageToPay * totalExpenses;
        return {
            totalExpenses,
            ...person,
            amountToPay,
            percentageToPay: percentageToPay * 100
        };
    });

};

const sumTotalExpenses = form =>
    form.expenses.reduce((accumulator, expense) => {
        return accumulator + expense.expenseValue;
    }, 0);

const sumTotalSalaries = form => form.people.reduce((accumulator, person) => {
    return accumulator + person.salary;
}, 0);

export const methods = {equal, ratable};
