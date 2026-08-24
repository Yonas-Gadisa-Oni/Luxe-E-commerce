import { useContext } from "react";
import { HeartContext } from "./heartContext";

export function useHeart() {
  const context = useContext(HeartContext);

  if (!context) {
    throw new Error("useHeart must be used within a HeartProvider");
  }

  return context;
}
