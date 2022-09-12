// import './App.css';
import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Tab1, Tab2, Tab3 } from './Tabs';

const panes = [
    {
        menuItem: 'Idea 1',
        render: () => (
            <Tab.Pane>
                <Tab1 />
            </Tab.Pane>
        ),
    },
    {
        menuItem: 'Idea 2',
        render: () => (
            <Tab.Pane>
                <Tab2 />
            </Tab.Pane>
        ),
    },
    {
        menuItem: 'Idea 3',
        render: () => (
            <Tab.Pane>
                <Tab3 />
            </Tab.Pane>
        ),
    },
];

function App() {
    return <Tab panes={panes} />;
}

export default App;
