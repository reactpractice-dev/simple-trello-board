import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const AddCardButton = ({ onAddCard }) => {
  const [title, setTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddCard = () => {
    onAddCard(title);
    setTitle("");
    setIsAdding(false);
  };

  const handleSubmitByPressingEnter = (e) => {
    if (e.key === "Enter") {
      handleAddCard();
    }
  };

  if (isAdding) {
    return (
      <div className="p-2">
        <form onSubmit={handleAddCard}>
          <textarea
            className="border border-gray-300  bg-slate-50 p-2 w-full rounded-lg"
            placeholder="Enter a title for this card ..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleSubmitByPressingEnter}
            autoFocus
          />
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 py-1 px-2 text-white"
            >
              Add card
            </button>
            <button onClick={() => setIsAdding(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="m-3">
      <button
        className="flex hover:bg-slate-300 p-3 w-full"
        onClick={() => setIsAdding(true)}
      >
        <PlusIcon className="h-6 w-6 text-gray-500" />
        Add a card
      </button>
    </div>
  );
};

export default AddCardButton;
