class LikeButton extends React.Component {
  state = {
    likes: 0;
  }

  addLike = () => {
    let newCount = this.state.likes + 1;
  }
  render() {
    return <button>A button!</button>
  }
}
