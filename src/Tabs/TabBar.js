import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import CustomTooltip from '../chartUtils/CustomTooltip';
import { data } from '../data/sample';

function TabBar() {
    return (
        <div>
            <h3>
                Mobile implementation: Students can analyze the Bar Chart below
                and learn explanations of the differences between the two
                groups.
            </h3>
            <div style={{ width: '100%', height: 500 }}>
                <ResponsiveContainer>
                    <BarChart
                        layout="vertical"
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 25,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" unit="%" />
                        <YAxis width={80} dataKey="cat" type="category" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar
                            dataKey="x"
                            name="Younger (16-24)"
                            fill="#8884d8"
                        />
                        <Bar dataKey="y" name="Older (65+)" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default TabBar;
