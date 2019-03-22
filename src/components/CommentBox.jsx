import React, { Component } from 'react';
import 'whatwg-fetch';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

import getApiUrl from '../helpers/getApiUrl';

const apiUrl = getApiUrl();

class CommentBox extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: null,
      author: '',
      text: '',
    };
    this.pollInterval = null;
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadCommentsFromServer, 2000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
  }

  onChangeText = (e) => {
    const newState = { ...this.state };
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  submitComment = async (e) => {
    e.preventDefault();
    const { author, text } = this.state;
    if (!author || !text) return;
    const res = await fetch(`${apiUrl}/api/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, text }),
    });
    console.log(res);
    const jsonRes = await res.json();
    console.log('json: ', jsonRes);
    if (!jsonRes.success) this.setState({ error: res.error.message || res.error });
    else this.setState({ author: '', text: '', error: null });
  }

  loadCommentsFromServer = async () => {
    // fetch returns a promise. If you are not familiar with promises, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    const data = await fetch(`${apiUrl}/api/comments`);
    console.log(data);
    const jsonData = await data.json();
    if (!jsonData.success) this.setState({ error: jsonData.error });
    else this.setState({ data: jsonData.data });
  }

  render() {
    return (
      <div className="container">
        <div className="comments">
          <h2>Comments:</h2>
          <CommentList data={this.state.data} />
        </div>
        <div className="form">
          <CommentForm
            author={this.state.author}
            text={this.state.text}
            handleChangeText={this.onChangeText}
            submitComment={this.submitComment}
          />
        </div>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

export default CommentBox;
