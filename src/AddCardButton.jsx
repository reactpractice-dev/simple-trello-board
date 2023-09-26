import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const AddCardButton = () => {
  const [isAdding, setIsAdding] = useState(false);

  if (isAdding) {
    return (
      <div className="p-2">
        <textarea
          className="border border-gray-300  bg-slate-50 p-2 w-full rounded-lg"
          placeholder="Enter a title for this card ..."
        />
        <div className="flex items-center">
          <button className="bg-blue-600 hover:bg-blue-700 py-1 px-2 text-white">
            Add card
          </button>
          <button onClick={() => setIsAdding(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
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