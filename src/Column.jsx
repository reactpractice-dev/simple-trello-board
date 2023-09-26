import AddCardButton from "./AddCardButton";

const Column = ({ title, cards, onAddCard }) => {
  return (
    <div className="m-5 bg-slate-200 h-fit w-52 rounded-lg">
      <h3 className="p-5 font-semibold mb-0 pb-0">{title}</h3>
      <div className="p-2">
        {cards.map((card) => (
          <div className="border border-gray-300  bg-slate-50 p-2 w-full rounded-lg mb-3">
            {card.title}
          </div>
        ))}
      </div>
      <AddCardButton onAddCard={onAddCard} />
    </div>
  );
};

export default Column;
