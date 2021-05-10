import React from "react";

interface Props {
  className?: string;
}

const defaultProps = {
  className: "",
};

const Dragger: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <div className={className}>
      <svg
        width="10"
        height="18"
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.557892 1V17"
          stroke="#E7E9F0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.55789 1V17"
          stroke="#E7E9F0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.55789 1V17"
          stroke="#E7E9F0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

Dragger.defaultProps = defaultProps;

export default Dragger;
