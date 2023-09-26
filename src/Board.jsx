import { useState } from "react";
import Column from "./Column";
import { v4 as uuidv4 } from "uuid";

const Board = () => {
  const [cards, setCards] = useState([]);
  const handleAddCard = ({ title, status }) => {
    setCards([...cards, { id: uuidv4(), title, status }]);
  };
  return (
    <div className="flex bg-blue-600 h-screen">
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
    </div>
  );
};

export default Board;
