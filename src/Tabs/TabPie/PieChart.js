import { RadialBarChart, RadialBar, Legend } from 'recharts';

const PieChart = ({ data, group, colors }) => {
    const formatData = (data, group) =>
        data.map((item, i) => ({
            name: item.cat,
            uv: item[group],
            fill: colors[i % colors.length],
        }));

    const style = {
        top: 0,
        left: 500,
        lineHeight: '24px',
    };
    return (
        <div>
            <h2>{group === 'x' ? 'Younger (16-24)' : 'Older (65+)'}</h2>
            <RadialBarChart
                width={750}
                height={450}
                cx={225}
                cy={225}
                innerRadius={30}
                outerRadius={210}
                barSize={15}
                data={formatData(data, group)}
            >
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="uv"
                />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                />
            </RadialBarChart>
        </div>
    );
};

export default PieChart;
