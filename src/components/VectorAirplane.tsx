import React from "react";

interface VectorAirplaneProps {
  className?: string;
  size?: number;
  color?: string;
  fill?: string;
}

/**
 * Minimalist luxury vector airplane icon
 * Sleek swept-wing commercial aircraft silhouette designed for editorial aesthetic
 */
export const VectorAirplane: React.FC<VectorAirplaneProps> = ({
  className = "",
  size = 28,
  color = "#9A5B2D",
  fill = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
      aria-hidden="true"
    >
      {/* Sleek aircraft silhouette facing roughly upper-right (45 deg) */}
      <path
        d="M24 4C24 4 27.5 12 28.5 18L44 26L42 29L28.5 24.5L28 35L33 39V41L24 38.5L15 41V39L20 35L19.5 24.5L6 29L4 26L19.5 18C20.5 12 24 4 24 4Z"
        fill={fill}
      />
    </svg>
  );
};

export default VectorAirplane;
