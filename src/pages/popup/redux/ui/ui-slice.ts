import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * All settings such as extension options, views should be in UI State
 */

// Active View
export enum Active {
  HISTORY,
  TABS,
}

interface UIState {
  active: Active;
  showUpdatePopup: boolean;
}

const initialState: UIState = {
  active: Active.HISTORY,
  showUpdatePopup: false,
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    switchActiveView: (state, { payload }: PayloadAction<Active>) => {
      state.active = payload;
    },
    setShowUpdatePopup: (state, { payload }: PayloadAction<boolean>) => {
      state.showUpdatePopup = payload;
    },
  },
});

export const { switchActiveView, setShowUpdatePopup } = UISlice.actions;
export default UISlice.reducer;
