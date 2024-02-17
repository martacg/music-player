import playlist from '../playlist/playlist';
import Controls from './controls';
import ProgressBar from './progressbar';
import SongInfo from './song-info';
import useAudioPlayer from '../audioplayer/hooks';

const AudioPlayer = () => {
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    setPlaybackPosition,
  } = useAudioPlayer(playlist);

  const {
    playbackState,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = playerState;

  function setProgress(value: number) {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }

  function computeProgress(): number {
    const noProgress =
      currentTrackDuration === null ||
      currentTrackPlaybackPosition === null ||
      currentTrackDuration === 0;
    if (noProgress) {
      return 0;
    } else {
      return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
    }
  }

  return (
    <div className="component">
      <SongInfo
        name={currentTrackMetadata?.name}
        author={currentTrackMetadata?.author}
        cover={currentTrackMetadata?.cover}
      />
      <ProgressBar
        rightLabel={formatTime(currentTrackDuration)}
        leftLabel={formatTime(currentTrackPlaybackPosition)}
        onChange={setProgress}
        progress={computeProgress()}
      />
      <Controls
        onPrevClick={playPreviousTrack}
        onNextClick={playNextTrack}
        onPlayClick={togglePlayPause}
        isPlaying={playbackState === 'PLAYING'}
      />
    </div>
  );
};

export default AudioPlayer;

function formatTime(timeInSeconds: number | null): string {
  if (timeInSeconds === null) return '';
  const numberOfMinutes = Math.floor(timeInSeconds / 60);
  const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
  const minutes = `${numberOfMinutes}`.padStart(2, '0');
  const seconds = `${numberOfSeconds}`.padStart(2, '0');
  return `${minutes}:${seconds}`;
}
