import Paragraph from "./components/Paragraph/Paragraph";

function App() {


  const app = (
    <>
      <h1>app</h1>
      <p>sdjchwkcgwlcgwkjcgwkcgwk</p>
    </>
  );



  return (
    <div className="App">
      <h2>
        Hello world
      </h2>
      <Paragraph size="24px">
        This is paragraph
      </Paragraph>


      <Paragraph size=".5rem">
        This is small paragraph
      </Paragraph>
    </div>
  );
}

export default App;
