import { atom } from "recoil";

export const playState = atom({
  key: "playState",
  default: false,
});

export const playingTrackState = atom({
  key: "playingTrackState",
  default: "",
});

export const libraryState = atom({
  key: "libraryState",
  default: null,
});
