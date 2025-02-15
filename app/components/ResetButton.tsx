"use client";

interface ResetButtonProps {
  handlechange: (e: React.MouseEvent) => void;
}

const ResetButton = ({ handlechange }: ResetButtonProps) => {
  return (
    <button className="search-button right-14 " onClick={handlechange}>
      X
    </button>
  );
};

export default ResetButton;
