import playButtonIcon from '../assets/icons/icon_play.svg';
import pauseButtonIcon from '../assets/icons/icon_pause.svg';
import nextButtonIcon from '../assets/icons/icon_next.svg';
import prevButtonIcon from '../assets/icons/icon_prev.svg';


type ControlsProps = {
  onPlayClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  isPlaying: boolean;
};

const Controls = ({
  onPlayClick,
  isPlaying,
  onPrevClick,
  onNextClick,


}: ControlsProps) => {
  return (
    <div className="control__buttons">
      <ImageButton src={prevButtonIcon} onClick={onPrevClick} />
      <ImageButton
        className="playButton"
        src={isPlaying ? pauseButtonIcon : playButtonIcon}
        onClick={onPlayClick}
      />
      <ImageButton src={nextButtonIcon} onClick={onNextClick} />
    </div>
  );
};

export default Controls;

type ImageButtonProps = {
  src: string;
  onClick: () => void;
  className?: string;
};

const ImageButton = ({ onClick, src, className }: ImageButtonProps) => {
  const buttonSize = 32;
  return (
    <button onClick={onClick}>
      <img
        src={src}
        width={buttonSize}
        height={buttonSize}
        className={`${className ?? ''}`}
      />
    </button>
  );
};
