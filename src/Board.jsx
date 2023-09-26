import Column from "./Column";

const Board = () => {
  return (
    <div className="flex bg-blue-600 h-screen">
      <Column title="To do" />
      <Column title="Doing" />
      <Column title="Done" />
    </div>
  );
};

export default Board;
