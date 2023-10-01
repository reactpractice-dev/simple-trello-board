import { useState } from "react";
import AddCardButton from "./AddCardButton";
import Modal from "./Modal";

const Column = ({ title, cards, onAddCard }) => {
  const [showCardDetails, setShowCardDetails] = useState(null);
  return (
    <div className="m-5 bg-slate-200 h-fit w-52 rounded-lg">
      <h3 className="p-5 font-semibold mb-0 pb-0">{title}</h3>
      <div className="p-2">
        {cards.map((card) => (
          <div
            className="border border-gray-300 shadow  bg-slate-50 p-2 w-full rounded-lg mb-3 hover:bg-slate-200 cursor-pointer"
            onClick={() => setShowCardDetails(card)}
          >
            {card.title}
          </div>
        ))}
      </div>
      <AddCardButton onAddCard={onAddCard} />
      {showCardDetails && (
        <Modal onClose={() => setShowCardDetails(null)}>
          {showCardDetails.title}
        </Modal>
      )}
    </div>
  );
};

export default Column;
