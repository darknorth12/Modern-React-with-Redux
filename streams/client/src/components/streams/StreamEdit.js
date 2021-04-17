import React, { useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { editStream, fetchStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const onSubmit = (formValues) => {
    props.editStream(props.stream.id, formValues);
  };
  return (
    <div>
      <h3>Edit a Stream</h3>
      {props.stream ? (
        <StreamForm
          onSubmit={onSubmit}
          initialValues={_.pick(props.stream, "title", "description")}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { editStream, fetchStream })(
  StreamEdit
);
