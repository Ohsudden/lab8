import logo from './logo.svg';
import './App.css';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function App() {
  const listItems = expenses.map(expense => 
    <div class="card expense-item">
        <div class="expense-date">
            <div class="expense-date__month">{months[expense.date.getMonth()]}</div>
            <div class="expense-date__year">{expense.date.getFullYear()}</div>
            <div class="expense-date__day">{expense.date.getDay()}</div>
        </div>
        <div class="expense-item__description"><h2>{expense.title}</h2>
            <div class="expense-item__price">${expense.amount}</div>
        </div>
    </div> );
  return (
    <h1>My Expenses template
    <div class="card expenses">{listItems}</div></h1>
  );
}

export default App;
