import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
    Legend,
} from 'recharts';

import { data } from '../data/sample';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div
                className="recharts-default-tooltip"
                style={{
                    margin: '0px',
                    padding: '10px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    border: '1px solid rgb(204, 204, 204)',
                    whiteSpace: 'nowrap',
                }}
            >
                <p className="recharts-tooltip-label">
                    <b>{payload[0].payload.cat.toUpperCase()}</b>
                </p>
                <p className="recharts-tooltip-label">
                    <b>{payload[0].name}: </b>
                    {payload[0].value}
                    {payload[0].unit}
                </p>
                <p className="recharts-tooltip-label">
                    <b>{payload[1].name}: </b>
                    {payload[1].value}
                    {payload[1].unit}
                </p>
                <p className="recharts-tooltip-label">
                    <b>Explanation: </b>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Phasellus eu.
                </p>
            </div>
        );
    }

    return null;
};

function TabScatter() {
    return (
        <div>
            <h3>
                Analyze the graph below and learn explanations of the
                differences between the two groups.
            </h3>
            <div style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer>
                    <ScatterChart
                        width={400}
                        height={400}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis
                            type="number"
                            dataKey="x"
                            name="Younger (16-24)"
                            unit="%"
                            label={{
                                value: 'Younger (16-24)',
                                offset: -10,
                                position: 'insideBottom',
                            }}
                            domain={[0, 100]}
                        />
                        <YAxis
                            type="number"
                            dataKey="y"
                            name="Older (65+)"
                            unit="%"
                            label={{
                                value: 'Older (65+)',
                                angle: -90,
                                position: 'insideLeft',
                            }}
                            domain={[0, 100]}
                        />
                        <Tooltip
                            cursor={{ strokeDasharray: '3 3' }}
                            content={<CustomTooltip />}
                        />
                        <Legend wrapperStyle={{ top: -5, left: 25 }} />
                        <Scatter
                            name="Differences between Older and Younger people"
                            data={data}
                            fill="#8884d8"
                            cursor="pointer"
                        >
                            <LabelList
                                dataKey="cat"
                                offset={20}
                                position="insideRight"
                                angle={0}
                            />
                        </Scatter>
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default TabScatter;
