import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const eventsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = eventsAdapter.getInitialState();

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setAllEvents: (state, action) => {
      eventsAdapter.upsertMany(state, action.payload);
    },
    addEvent: (state, action) => {
      console.log("SLAJSER", state, action.payload);
      eventsAdapter.addOne(state, action.payload);
    },
    removeEvent: (state, action) => {
      console.log("SLAJSER", state, action.payload);
      eventsAdapter.removeOne(state, action.payload);
    },
    updateEvent: (state, action) => {
      eventsAdapter.updateOne(state, action.payload);
    },
  },
});

export const {
  selectIds: selectEventIds,
  selectAll: selectAllEvents,
  selectById: selectEventById,
} = eventsAdapter.getSelectors((state) => state.events);

export const selectEventsByDay = createSelector(
  [selectAllEvents, (state, day) => day],
  (events, day) =>
    events.filter((e) => {
      const iso = new Date(e.date);
      return iso.toISOString().slice(0, 10) === day.toISOString().slice(0, 10);
    })
);

export const selectEventsByActiveReminders = createSelector(
  selectAllEvents,
  (events) => {
    const today = new Date();
    return events.filter((e) => e.reminder && new Date(e.reminder) <= today);
  }
);

export const selectDaysOfEvents = createSelector(selectAllEvents, (events) =>
  events.map((e) => new Date(e.date).getDate())
);

export const { setAllEvents, addEvent, removeEvent, updateEvent } =
  eventsSlice.actions;

export default eventsSlice.reducer;
