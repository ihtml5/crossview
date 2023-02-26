import { create } from 'zustand'

export const useImStore = create((set) => ({
  unreadCounts: 0,
  increaseUnReadCounts: () => set((state: {
    unreadCounts: number,
  }) => ({ unreadCounts: state.unreadCounts + 1 })),
  removeAllUnReadCounts: () => set({ unreadCounts: 0 }),
}))