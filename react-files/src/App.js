import TitlePiece from "./components/TitlePiece";
import PostsBoardHeader from "./components/PostsBoardHeader";
import PostsBoard from "./components/PostsBoard";

function App() {
  return (
    <div className="App">
      <TitlePiece titleText="Product Feedback"></TitlePiece>
      <PostsBoardHeader></PostsBoardHeader>
      <PostsBoard></PostsBoard>
    </div>
  );
}

export default App;