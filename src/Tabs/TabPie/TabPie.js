import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import PieChart from './PieChart';
import { data } from '../../data/sample';
import './TabPie.scss';

function TabPie() {
    const colors = [
        '#54478C',
        '#2C699A',
        '#048BA8',
        '#0DB39E',
        '#16DB93',
        '#83E377',
        '#B9E769',
        '#EFEA5A',
        '#F1C453',
        '#F29E4C',
    ];

    return (
        <div>
            <h3>
                Explore data on the provided Pie Charts and suggest possible
                explanations (in the boxes below) for differing responses of the
                two groups.
            </h3>
            <div className="pie-wrapper">
                <PieChart data={data} group={'x'} colors={colors} />
                <PieChart data={data} group={'y'} colors={colors} />
            </div>
            {data.map((item, i) => (
                <div
                    className={`color-${
                        colors[i % colors.length].split('#')[1]
                    }`}
                >
                    <Input label={item.cat} placeholder="why could that be?" />
                </div>
            ))}
            <Button secondary>Save answers</Button>
        </div>
    );
}

export default TabPie;
