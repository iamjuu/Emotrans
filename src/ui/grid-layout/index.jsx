import React, { useState } from "react";
import { cn } from "../../utils/utils";

export const LayoutGrid = ({
  cards
}) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div
      className="w-full h-full  grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden transition-all duration-300",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-zinc-900 rounded-xl h-full w-full border border-zinc-800"
                : "bg-zinc-900 rounded-xl h-full w-full border border-zinc-800"
            )}>
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </div>
        </div>
      ))}
      <div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black z-10 transition-opacity duration-300",
          selected?.id ? "opacity-30 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />
    </div>
  );
};

const ImageComponent = ({
  card
}) => {
  return (
    <img
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({
  selected
}) => {
  return (
    <div
      className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <div
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <div
        className="relative px-8 pb-4 z-[70] opacity-100 transition-opacity duration-300">
        {selected?.content}
      </div>
    </div>
  );
};
