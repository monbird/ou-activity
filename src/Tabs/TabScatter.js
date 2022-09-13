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
import CustomTooltip from '../chartUtils/CustomTooltip';
import { data } from '../data/sample';

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
