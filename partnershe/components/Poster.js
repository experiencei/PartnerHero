import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { libraryState, playingTrackState, playState } from "../atoms/playerAtom";
import {
  CheckIcon,
  PlusIcon,
} from '@heroicons/react/outline';

import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  setDoc,
  addDoc
} from 'firebase/firestore';
import { db } from '../utils/firebase'
// import toast, { Toaster } from 'react-hot-toast'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function Poster({ track, chooseTrack }) {
  const {data : session} = useSession();
  const [play, setPlay] = useRecoilState(playState);
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  // const [library, setLibrary] = useRecoilState(libraryState);
  const [libraries , setLibraries] = useState([]);
  const [addedToList, setAddedToList] = useState(false)
  

  const toastStyle = {
    background: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '15px',
    borderRadius: '9999px',
    maxWidth: '1000px',
  }

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

   // Find all the music in the user's list
   useEffect(() => {
    if (session) {
      return onSnapshot(
        collection(db, 'customers', session.user.email, 'myLibrary'),
        (snapshot) => setLibraries(snapshot.docs)
      )

    }
  }, [db, session]);


  // Check if the music is already in the user's list
  useEffect(
    () =>
      setAddedToList(
        libraries.findIndex((result) => result.data().id === track?.id) !== -1
      ),
    [libraries]
  );

  const handleList = async () => {
    if (addedToList) {
      await deleteDoc(
        collection(db, 'customers', session.user.email, 'myLibrary', track?.id.toString())
      )
    //  alert(`${track?.name} has been removed from My Library`)
      toast(
        `${track?.name} has been removed from My Library`,
        {
          duration: 8000,
          style: toastStyle,
        }
      )
    } else {
      await addDoc(
        collection(db, 'customers', session.user.email, '', track?.id.toString()),
        {
          ...track,
        }
      )
      // alert(`${track?.name} has been added to My Library.`)
      // toast(
      //   `${track?.name} has been added to My Library.`,
      //   {
      //     duration: 8000,
      //     style: toastStyle,
      //   }
      // )
      toast.success(`${track?.name} has been added to My Library.`)
    }
  }
  return (
    <div
      className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"
      onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        alt=""
        className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
      />

      <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
        <div className="h-10 w-10 bg-[#15883e] rounded-full flex items-center justify-center group-hover:bg-[#1db954] flex-shrink-0">
          {track.uri === playingTrack.uri && play ? (
            <BsFillPauseFill className="text-white text-xl" />
          ) : (
            <BsFillPlayFill className="text-white text-xl ml-[1px]" />
          )}
        </div>
        <div>
        <button className="modalButton" onClick={handleList}>
                {addedToList ? (
                  <CheckIcon className="h-7 w-7" />
                ) : (
                  <PlusIcon className="h-7 w-7" />
                )}
        </button>
        </div>
        <div className="text-[15px]">
          <h4 className="font-extrabold truncate w-44">{track.title}</h4>
          <h6>{track.artist}</h6>
        </div>
      </div>
    </div>
  );
}

export default Poster;
