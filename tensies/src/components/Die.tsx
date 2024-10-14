import React from "react";

interface DieProps {
  value: number;
  isHeld: boolean;
  holdDice: () => void;
}

const Die: React.FC<DieProps> = ({ value, isHeld, holdDice }) => {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white"
  };
  return (
    <div className="die-face" style={styles} onClick={holdDice}>
      <h2 className="die-num">{value}</h2>
    </div>
  );
};

export default Die;
