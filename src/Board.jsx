import { useState } from "react";
import Column from "./Column";
import { v4 as uuidv4 } from "uuid";
import { DndContext } from "@dnd-kit/core";

const Board = () => {
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
      <DndContext onDragEnd={handleDragEnd}>
        <Column
          title="To do"
          cards={cards.filter((c) => c.status == "To do")}
          onAddCard={(newCardTitle) =>
            handleAddCard({ title: newCardTitle, status: "To do" })
          }
        />
        <Column
          title="Doing"
          cards={cards.filter((c) => c.status == "Doing")}
          onAddCard={(newCardTitle) =>
            handleAddCard({ title: newCardTitle, status: "Doing" })
          }
        />
        <Column
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
