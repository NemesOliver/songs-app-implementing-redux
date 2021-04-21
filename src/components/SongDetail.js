import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div>
        <h3>Details For:</h3>
        <p>Select a song</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Details For:</h3>
      <p>
        {song.title}
        <br />
        {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
