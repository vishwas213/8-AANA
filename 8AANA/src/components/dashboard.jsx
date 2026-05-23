import React from "react";
import { Link } from "react-router-dom";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow p-4 ${className}`}>{children}</div>
);

const CardContent = ({ children }) => (
  <div className="mt-1">{children}</div>
);

const Dashboard = () => {
  const budgets = [
    { name: "Shopping", spend: 2000, budget: 2300 },
    { name: "Home Decor", spend: 6000, budget: 3800 },
    { name: "Garden", spend: 1500, budget: 2000 },
    { name: "Car", spend: 2500, budget: 3000 },
    { name: "YouTube", spend: 7000, budget: 7500 },
  ];

  const totalBudget = budgets.reduce((acc, b) => acc + b.budget, 0);
  const totalSpend = budgets.reduce((acc, b) => acc + b.spend, 0);

  return (
    <div className="p-6 mt-16">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <Card>
          <CardContent>
            <p className="text-sm text-gray-500">Total Budget</p>
            <h2 className="text-2xl font-bold">${totalBudget.toLocaleString()}</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm text-gray-500">Total Spend</p>
            <h2 className="text-2xl font-bold">${totalSpend.toLocaleString()}</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm text-gray-500">No. of Budgets</p>
            <h2 className="text-2xl font-bold">{budgets.length}</h2>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Activity</h2>
        <div className="bg-white rounded-xl shadow p-4 space-y-3">
          {budgets.map((b) => {
            const pct = Math.min((b.spend / b.budget) * 100, 100);
            const over = b.spend > b.budget;
            return (
              <div key={b.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{b.name}</span>
                  <span className={over ? "text-red-500 font-semibold" : "text-gray-500"}>
                    ${b.spend.toLocaleString()} / ${b.budget.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${over ? "bg-red-500" : "bg-blue-500"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Latest Budgets</h2>
        <div className="bg-white p-4 shadow rounded-xl space-y-2">
          {budgets.map((b) => (
            <div key={b.name} className="flex justify-between border-b pb-2 last:border-0">
              <span>{b.name}</span>
              <span className="font-semibold">${b.budget.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
