import { create } from "zustand";
import { Product } from "./schemas";

interface Store {
    total: number;
    addToCard: (product: Product) => void;
}

export const useStore = create<Store>(() => ({
    total: 0,
    addToCard: (product) => {
        console.log(product);
    },
}))