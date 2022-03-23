import Paragraph from "./components/Paragraph/Paragraph";


import Image from "./components/Image/Image";

import paris from "./assets/paris.jpg";


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


      <Paragraph color="green" size="24px">
          it is colorful 
      </Paragraph>


      <Paragraph articles="This is colorful paragraph">
        
      </Paragraph>


    <Image url={paris} width="150px" height="100px"/>

    {/* <img src={paris}  width="150px" height="100px"/> */}
    
    </div>
  );
}

export default App;
