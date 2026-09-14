let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
let balanceColor = "green";

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
  console.log(`Despesas totais: ${totalExpensesValue}`);
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  const categoriesTotals = [];

  for (let i = 0; i < categories.length; i++) {
    categoriesTotals.push([
      categories[i],
      calculateCategoryExpenses(categories[i]),
    ]);
  }

  let largestCategory = "";
  let largestCategoryValue = 0;

  for (let i = 0; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > largestCategoryValue) {
      largestCategoryValue = categoriesTotals[i][1];
      largestCategory = categoriesTotals[i][0];
    }
  }

  return largestCategory;
}

function addExpenseEntry(expenseEntry) {
  expenseEntries.push(expenseEntry);
  totalExpensesValue += expenseEntry[1];
}
