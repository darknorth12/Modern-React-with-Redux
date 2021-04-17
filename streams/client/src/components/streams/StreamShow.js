import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const renderContent = () => {
    if (props.stream) {
      return (
        <React.Fragment>
          <h1>{props.stream.title}</h1>
          <h5>{props.stream.description}</h5>
        </React.Fragment>
      );
    }
    return null;
  };

  return <div>{renderContent()}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
