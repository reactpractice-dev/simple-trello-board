import { useDraggable } from "@dnd-kit/core";

const Card = ({ card, onClick }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${card.id}`,
    data: card,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className="border border-gray-300 shadow  bg-slate-50 p-2 w-full rounded-lg mb-3 hover:bg-slate-200 cursor-pointer"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      onClick={onClick}
    >
      {card.title}
    </div>
  );
};

export default Card;
