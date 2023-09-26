import AddCardButton from "./AddCardButton";

const Column = ({ title }) => {
  return (
    <div className="m-5 bg-slate-200 h-fit w-52">
      <h3 className="p-5 font-semibold">{title}</h3>
      <AddCardButton />
    </div>
  );
};

export default Column;
