import { create } from "zustand";

type MouseHoverState = {
  coords: { x: number; y: number };
  setCoords: (coords: { x: number; y: number }) => void;
}

export const useMousehoverStore = create<MouseHoverState>((set) => ({
  coords: {x: 50, y: 50},
  setCoords: (coords) => set({coords}),
}));