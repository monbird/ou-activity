import { Draggable } from '@hello-pangea/dnd';

const Tile = ({ data, index }) => (
    <Draggable draggableId={data.id} index={index}>
        {(provided, snapshot) => (
            <div
                className={`dnd-cat-tile ${
                    snapshot.isDragging ? 'is-being-dragged' : ''
                } ${
                    data.correct
                        ? 'dnd-tile-green'
                        : data.correct === false
                        ? 'dnd-tile-red'
                        : ''
                }`}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {data.cat}
                <div className="dnd-cat-tile-description">
                    {data.correct === undefined
                        ? ''
                        : ` (Younger: ${data.x}%, Older: ${data.y}%)`}
                </div>
            </div>
        )}
    </Draggable>
);
export default Tile;
