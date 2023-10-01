import { useState } from "react";
import Column from "./Column";
import { v4 as uuidv4 } from "uuid";
import { DndContext } from "@dnd-kit/core";
import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core";

const Board = () => {
  // add a little delay before dragging starts, to allow also clicking on the cards
  // otherwise dragging is taking over click events as well
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { delay: 100, tolerance: 5 },
    })
  );
  const [cards, setCards] = useState([]);
  const handleAddCard = ({ title, status }) => {
    setCards([...cards, { id: uuidv4(), title, status }]);
  };
  const handleDragEnd = (event) => {
    if (event.over) {
      const movedCard = event.active.data.current;
      const droppedColumn = event.over.data.current;
      const newStatus = droppedColumn.status;
      setCards(
        cards.map((c) => {
          if (c.id === movedCard.id) {
            return { ...c, status: newStatus };
          } else {
            return c;
          }
        })
      );
    }
  };
  return (
    <div className="flex bg-blue-600 h-screen">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <Column
          key="To do"
          title="To do"
          cards={cards.filter((c) => c.status == "To do")}
          onAddCard={(newCardTitle) =>
            handleAddCard({ title: newCardTitle, status: "To do" })
          }
        />
        <Column
          key="Doing"
          title="Doing"
          cards={cards.filter((c) => c.status == "Doing")}
          onAddCard={(newCardTitle) =>
            handleAddCard({ title: newCardTitle, status: "Doing" })
          }
        />
        <Column
          key="Done"
          title="Done"
          cards={cards.filter((c) => c.status == "Done")}
          onAddCard={(newCardTitle) =>
            handleAddCard({ title: newCardTitle, status: "Done" })
          }
        />
      </DndContext>
    </div>
  );
};

export default Board;
