import './App.scss';
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { TabScatter, TabDnD, TabPie } from './Tabs';

const panes = [
    {
        menuItem: 'Idea 1',
        render: () => (
            <Tab.Pane>
                <TabDnD />
            </Tab.Pane>
        ),
    },
    {
        menuItem: 'Idea 2',
        render: () => (
            <Tab.Pane>
                <TabPie />
            </Tab.Pane>
        ),
    },
    {
        menuItem: 'Idea 3',
        render: () => (
            <Tab.Pane>
                <TabScatter />
            </Tab.Pane>
        ),
    },
];

function App() {
    return <Tab panes={panes} />;
}

export default App;
