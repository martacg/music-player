type SongInfoProps = {
  name?: string;
  author?: string;
  cover?: string;
};

const SongInfo = ({ name, author, cover }: SongInfoProps) => {
  return (
    <div className="cover">
      <img
        className="musicCover"
        src={cover}
      />
      <span className="name">{name}</span>
      <span className="author">{author}</span>
    </div>
  );
};

export default SongInfo;
