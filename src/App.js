import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TaskList from './components/TaskList';

import "./styles/main.scss"

function App() {

  const [headerItems, setHeaderItems] = useState([
    {src: './images/header-img/header-item-1.svg', alt: 'mobile-version', id: 1},
    {src: './images/header-img/header-item-2.svg', alt: 'expand to full screen', id: 2},
  ]);

  const [heroUserData, setHeroUserData] = useState([
    {name: "Adrian", amountCash: 124.543, id: 1}
  ]);

  const [heroPayment, setHeroPayment] = useState([
    {src: './images/hero-img/hero-send-payment.svg', description: "Send a payment", id: 1},
    {src: './images/hero-img/hero-request-payment.svg', description: "Request a payment", id: 2},
  ]);

  const [tasks, setTasks] = useState([
    { src: './images/tasks-img/task-img-1.svg' ,title: 'Emergency fund', description: "Last Paid on August 28, 2022", countCash: 300, maxCash: 1000, id: 1, },
    { src: './images/tasks-img/task-img-2.svg' ,title: 'Travel Plan', description: "Last Paid on June 01, 2022", countCash: 10000, maxCash: 20000, id: 2, },
    { src: './images/tasks-img/task-img-3.svg' ,title: 'Education', description: "Last Paid on May 14, 2022", countCash: 7000, maxCash: 10000, id: 3, },
    { src: './images/tasks-img/task-img-4.svg' ,title: 'Foods and Groceries', description: "Last Paid on August 28, 2022", countCash: 300, maxCash: 1000, id: 4, },
    { src: './images/tasks-img/task-img-5.svg' ,title: 'Repair Vehicle', description: "Last Paid on August 01, 2022", countCash: 900, maxCash: 1000, id: 5, },
    { src: './images/tasks-img/task-img-6.svg' ,title: 'Donation', description: "Last Paid on August 20, 2022", countCash: 200, maxCash: 1000, id: 6, },
  ]);

  return (
    <div className="App">
      <Header items={headerItems} />
      <Hero props={heroUserData} payment={heroPayment} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
