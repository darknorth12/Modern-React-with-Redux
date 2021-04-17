import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { deleteStream, fetchStream } from "../../actions";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const renderContent = () => {
    if (!props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure you want to delete stream with title: ${props.stream.title} ?`;
  };

  const renderActions = () => {
    const { id } = props.match.params;

    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => props.deleteStream(id)}
        >
          Delete
        </button>
        <Link to="/" className="ui button primary">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
