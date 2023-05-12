import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { NotificationType } from '@/types/notification.type';

const initialState: NotificationType[] = [];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, { payload }: PayloadAction<NotificationType>) => {
      state.push(payload);
    },
    updateNotification: (
      state,
      { payload }: PayloadAction<NotificationType>
    ) => {
      const foundIndex = state.findIndex(workout => workout.id === payload.id);
      if (foundIndex !== -1) {
        state[foundIndex] = payload;
      }
    }
  }
});

export const { addNotification, updateNotification } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
