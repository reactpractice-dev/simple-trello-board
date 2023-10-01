import { useState } from "react";
import AddCardButton from "./AddCardButton";
import CardDetailsModal from "./CardDetailsModal";
import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";

const Column = ({ title, cards, onAddCard }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable-column-${title}`,
    data: { status: title },
  });
  return (
    <div
      className={`m-5 bg-slate-200 h-fit w-52 rounded-lg ${
        isOver ? "bg-yellow-200" : ""
      }`}
      ref={setNodeRef}
    >
      <h3 className="p-5 font-semibold mb-0 pb-0">{title}</h3>
      <div className="p-2">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </div>
      <AddCardButton onAddCard={onAddCard} />
      {selectedCard && (
        <CardDetailsModal
          onClose={() => setSelectedCard(null)}
          card={selectedCard}
        />
      )}
    </div>
  );
};

export default Column;
