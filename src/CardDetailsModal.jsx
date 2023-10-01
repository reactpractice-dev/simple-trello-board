import Modal from "./Modal";
import {
  XMarkIcon,
  Bars3Icon,
  CreditCardIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/20/solid";

const CardDetailsModal = ({ card, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className="px-4 py-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg flex gap-2">
              <CreditCardIcon className="h-6 w-6 text-gray-500" />
              {card.title}
            </h3>
            <p className="ml-8 text-sm">
              in list{" "}
              <span className="text-underline text-gray-500">
                {card.status}
              </span>
            </p>
          </div>
          <button
            className="p-2 -m-2 hover:bg-slate-200 hover:rounded-full"
            onClick={onClose}
            title="Close modal"
          >
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        <div className="flex">
          <div className="w-4/5">
            <h5 className="font-semibold my-3 mt-5 flex gap-2">
              <Bars3Icon className="h-6 w-6 text-gray-500" />
              Description
            </h5>
            <textarea
              placeholder="Add a more detailed description ..."
              className="bg-slate-200 w-10/12 hover:bg-slate-300 rounded p-2 cursor-pointer ml-8"
            ></textarea>
          </div>
          <div className="w-1/5 pt-6">
            <p className="text-sm text-slate-600 font-bold mb-1">Actions</p>
            <button className="p-2 text-sm bg-slate-100 hover:bg-slate-200 rounded flex items-center gap-2 w-full">
              <ArchiveBoxIcon className="h-3 w-3 text-gray-500" />
              Archive
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CardDetailsModal;
