import './chartUtils.scss';

const CustomTooltip = ({ active, payload }) => {
    console.log('payload:', payload);
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
                    {payload[0].unit || '%'}
                </p>
                <p className="recharts-tooltip-label">
                    <b>{payload[1].name}: </b>
                    {payload[1].value}
                    {payload[1].unit || '%'}
                </p>
                <p className="recharts-tooltip-label">
                    <span className="explanation">
                        <b>Explanation: </b>
                        {payload[0].payload.expl}
                    </span>
                </p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
