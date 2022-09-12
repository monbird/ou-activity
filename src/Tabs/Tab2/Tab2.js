import { useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import Tile from './Tile';
import { data } from '../../data/sample';
import './Tab2.scss';

function Tab2() {
    const [columns, setColumns] = useState({
        categories: {
            title: 'Categories',
            tiles: data.map((row) => row),
        },
        younger: {
            title: 'Younger (16-24)',
            tiles: [],
        },
        older: {
            title: 'Older (65+)',
            tiles: [],
        },
    });

    const columnOrder = ['categories', 'younger', 'older'];

    const onDragEnd = ({ destination, source, draggableId }) => {
        if (!destination || !source) {
            return;
        }

        if (
            destination.droppableId === source.droppableId ||
            destination.droppableId === 'categories'
        ) {
            return;
        }

        const sourceColumn = columns[source.droppableId];
        const destinationColumn = columns[destination.droppableId];

        const newSourceColumnTiles = sourceColumn.tiles.filter(
            (tile) => tile.id !== draggableId
        );

        const newDestinationColumnTiles = [
            ...destinationColumn.tiles,
            sourceColumn.tiles.filter((tile) => tile.id === draggableId)[0],
        ];

        const newColumns = {
            ...columns,
            [source.droppableId]: {
                ...columns[source.droppableId],
                tiles: newSourceColumnTiles,
            },
            [destination.droppableId]: {
                ...columns[destination.droppableId],
                tiles: newDestinationColumnTiles,
            },
        };

        setColumns(newColumns);
    };

    const checkResults = () => {
        const youngerRes = columns.younger.tiles.map((item) => {
            return { ...item, correct: item.x >= item.y };
        });

        const olderRes = columns.older.tiles.map((item) => {
            return { ...item, correct: item.x <= item.y };
        });

        const newColumns = {
            ...columns,
            younger: {
                ...columns.younger,
                tiles: youngerRes,
            },
            older: {
                ...columns.older,
                tiles: olderRes,
            },
        };

        setColumns(newColumns);
    };

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="dnd-container">
                    {columnOrder.map((colId, i) => {
                        const column = columns[colId];
                        return (
                            <div className="dnd-col" key={i}>
                                <div className="dnd-col-title">
                                    {column.title}
                                </div>
                                <Droppable droppableId={colId}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            className={`dnd-tiles-container ${
                                                snapshot.isDraggingOver
                                                    ? 'is-dragging-over'
                                                    : ''
                                            }`}
                                            {...provided.droppableProps}
                                        >
                                            {column.tiles.map((tile, j) => (
                                                <Tile
                                                    data={tile}
                                                    index={j}
                                                    key={tile.id}
                                                ></Tile>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        );
                    })}
                </div>
            </DragDropContext>
            <button
                onClick={checkResults}
                disabled={columns.categories.tiles.length}
            >
                Check results
            </button>
        </div>
    );
}

export default Tab2;
