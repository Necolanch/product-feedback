import TitlePiece from "./components/TitlePiece";
import PostsBoardHeader from "./components/PostsBoardHeader";

function App() {
  return (
    <div className="App">
      <TitlePiece titleText="Product Feedback"></TitlePiece>
      <PostsBoardHeader></PostsBoardHeader>
    </div>
  );
}

export default App;