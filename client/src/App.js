import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import Footer from "./components/Footer";

function App() {
  // const [assets, setAssets] = useState([]);
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then((response) => {
        console.log(response.data);
        // setAssets(response.data);
        setEntries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 return (
    <div className="App">
      <div className="container">
        <header>
          <div className='wrapper'>
            <div className='wrapper_inner'>
              <div className="wrapper_inner_menu">
                <h1 className="wrapper_span">Cookbook</h1>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>News Letter</li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="container_wrapper">
            <div className='wrapper'>
              {entries.map((entry, index) => {
                return (<div key={entry.sys.id}>

                  <div className='recipetitle_main'>
                    <h2>{entry.fields.recipeTitle}</h2>
                    <p>{entry.fields.recipeIntroduction}</p>
                  </div>

                  <div className='main_img_part'>
                    <div>
                      <img src={entry.fields.recipeImage.sys.url} alt="burger" />
                    </div>
                    <div className='text'>
                      {entry.fields.instructions.content.map((content) => {
                        if (content.nodeType === "paragraph") {
                          return <p>{content.content[0].value}</p>;
                          // return content.content.map((element) => {
                          //   return <p> {element.value}</p>
                          // });
                        }
                      })}
                    </div>
                  </div>

                  <div className="main_table_part">
                    {entry.fields.ingredients.content.map((content) => {
                      if (content.nodeType === "table") {
                        return content.content.map((row) => {
                          return (
                            <div className='flex'>
                              {row.content.map((col) => {
                                /*console.log(col);*/
                                return <p className='font'> {col.content[0].content[0].value}</p>;
                              })}
                            </div>
                          );
                        });
                      }
                    })}
                  </div>
                </div>);
              })}
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div >
  );
}
export default App;
