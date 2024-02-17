type ProgressBarProps = {
  progress: number;
  onChange: (value: number) => void;
  leftLabel: string;
  rightLabel: string;
};

const ProgressBar = ({
  progress,
  onChange,
  leftLabel,
  rightLabel,
}: ProgressBarProps) => {
  return (
    <div className="timeline__container">
      <input
        type="range"
        min="1"
        max="100"
        value={progress}
        step="0.25"
        className="timeline__range"
        onChange={(event) => {
          onChange(parseInt(event?.target.value));
        }}
      />
      <div className="timeline__time">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
