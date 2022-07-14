export const addMusicToLibrary = (library, musicToAdd) => {
    return [...library,...musicToAdd];
  };

export const removeMusicFromLibrary = (library, musicToRemove) => {
    return library.filter(libraryMusic => libraryMusic.id !== musicToRemove.id);
}