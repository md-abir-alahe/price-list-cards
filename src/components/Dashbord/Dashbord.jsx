import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashbord = () => {

    let studentMarks = [
        {id: 1, name: "John", math: 85, physics: 90, chemistry: 92},
        {id: 2, name: "Emma", math: 78, physics: 82, chemistry: 87},
        {id: 3, name: "Oliver", math: 92, physics: 89, chemistry: 95},
        {id: 4, name: "Sophie", math: 80, physics: 88, chemistry: 90},
        {id: 5, name: "William", math: 72, physics: 76, chemistry: 80},
        {id: 6, name: "Ella", math: 86, physics: 83, chemistry: 88},
        {id: 7, name: "James", math: 91, physics: 92, chemistry: 94},
        {id: 8, name: "Isabella", math: 85, physics: 90, chemistry: 87},
        {id: 9, name: "Daniel", math: 79, physics: 85, chemistry: 81},
        {id: 10, name: "Ava", math: 88, physics: 92, chemistry: 90}
      ];
      

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={studentMarks}
            >
                <Line dataKey="physics"></Line>
                <Line dataKey="math" stroke="#8884d8"></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis ></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </LineChart>
        </div>
    );
};

export default Dashbord;