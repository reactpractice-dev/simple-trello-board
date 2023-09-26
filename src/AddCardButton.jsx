import { PlusIcon } from "@heroicons/react/20/solid";

const AddCardButton = () => {
  return (
    <button className="flex hover:bg-slate-300 p-3 m-3 w-[11.5rem]">
      <PlusIcon className="h-6 w-6 text-blue-500" />
      Add a card
    </button>
  );
};

export default AddCardButton;
