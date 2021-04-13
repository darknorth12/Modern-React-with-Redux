import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

const PostList = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);
  return <div>PostList</div>;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
