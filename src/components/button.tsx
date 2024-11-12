import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Button({
  label,
  className,
  // redirectTo,
  onClick,
}: {
  label: string;
  className?: string;
  // redirectTo: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const navigate = useNavigate();

  return (
    <div>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
export default Button;
