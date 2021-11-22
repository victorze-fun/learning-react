import { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

// props acoplado a div y problemas de seguridad
export const StarRating = ({ style = {}, totalStars = 5, ...props }) => {
  const [selectedStars, setSelectedStars] = useState(3);

  console.log({ selectedStars });

  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStars).map((_, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

const Star = ({ selected = false, onSelect }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);
