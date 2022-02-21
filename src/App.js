import './App.css';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,LabelList } from 'recharts';
function App() {
  const data = [
  {
    name: 'Vydareny projekt',
    price: 45000,
  },
  {
    name: 'Zly projekt',
    price: 150000,

  },
  {
    name: 'Najlepsi projekt',
    price: 15896,

  }
];


  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="graf">
        <h1>Toto je graf</h1>
      <BarChart
          width={500}
          height={300}
          data={data}
          
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" backgroundColor={"black"}/>
          <XAxis dataKey="name" tick={{stroke:"red"}} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price">
            <LabelList position="top" fill="white" className="bar"/>
          </Bar>

        </BarChart>
      </div>
    </div>
  );
}

export default App;
