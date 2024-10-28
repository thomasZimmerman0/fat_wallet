//HTML Components
import Header from "./classes/reusable-html-components/header"
import BudgetBuilder from "./classes/reusable-html-components/budget-builder"

//Data and types
import  User  from "./classes/user";
import { UserId } from "./types/user-types";
import  Budget  from "./classes/budget";
import  BudgetCategories  from "./classes/budget-categories";
import { MonetaryBudgetItem } from "./types/budget-types";

//third-party libraries
import Chart, { ChartItem } from "chart.js/auto";

//Append necessary HTML componenets
const headerInstance = new Header();
headerInstance.appendElementAndStylesheetToDocument("afterbegin");
const budgetBuilderInstance = new BudgetBuilder();
budgetBuilderInstance.appendElementAndStylesheetToDocument("beforeend");

//Set user data ( Only for testing )
const user1Id: UserId = { ID: 1};
const categoryList = [
    "Food",
    "Nonessiential",
    "Bills",
    "Savings",
    "Passive",
    "Job"
];

const expenses: MonetaryBudgetItem[] = [
    {
        monetaryType: "expense",
        category: categoryList[0],
        amount: 99
    },
    {
        monetaryType: "expense",
        category: categoryList[1],
        amount: 102
    },
]; 

const incomes: MonetaryBudgetItem[] = [
    {
        monetaryType: "income",
        category: categoryList[5],
        amount: 1000
    },
    {
        monetaryType: "expense",
        category: categoryList[4],
        amount: 150
    },
];

const user1 = new User(user1Id, "Tommy", "Zimmerman");
const userCategories = new BudgetCategories(user1Id, categoryList);
const budget = new Budget(user1Id, incomes, expenses, userCategories);

console.log(budget.userId);
console.log(budget.incomes);
console.log(budget.expenses);
console.log(budget.categories);

const ctx = document.getElementById('myChart') as ChartItem;

const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

new Chart(
    ctx,
    {
        type: 'bar',
        options: {
            scales: {
                y: {
                    ticks:{
                        callback: function(value, index, ticks) {
                            return '$' + value;
                        }
                    }
                }
            },
          animation: false,
          plugins: {
            legend: {
              labels: {
                font: {
                    size: 12
                }
             }
            },
            tooltip: {
              enabled: true
            }
          }
        },
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count),
            }
          ],
        }
      }
    );


