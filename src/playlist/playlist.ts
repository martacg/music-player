import trackOne from './songs/track1.mp3';
import trackTwo from './songs/track2.mp3';
import coverArtOne from './cover/cover-1.png';
import coverArtTwo from './cover/cover-2.png';
import { Playlist } from '../audioplayer/types';

const playlist: Playlist = [
  {
    audioSrc: trackOne,
    metadata: {
      name: 'Lost in the City Lights',
      author: 'Cosmo Sheldrake',
      cover: coverArtOne,
    },
  },
  {
    audioSrc: trackTwo,
    metadata: {
      name: 'Forest Lullaby',
      author: 'Lesfm',
      cover: coverArtTwo,
    },
  },

];

export default playlist;
