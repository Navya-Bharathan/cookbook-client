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
      
{
    entries.map((entry, index) => {
    console.log(index)

    return (<div key={entry.sys.id}>
      <h2>{entry.fields.recipeTitle}</h2>
      <p>{entry.fields.recipeIntroduction}</p>
      <img src={entry.fields.recipeImage.sys.url} alt="burger"/>

      <div className='text'>
        {entry.fields.instructions.content.map((content) => {
          if (content.nodeType === "paragraph") {
            // return <p>{content.content[0].value}</p>;
            return content.content.map((element) => {
              return <p> {element.value}</p>
            });
          }
        })}
      </div>

      <div className="">
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
  );
}
export default App;


// -----------------------------------------------------------------------------------------------------
// function App() {
//   const [items, setItems] = useState([{}]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/posts')
//       .then((res) => {
//         console.log(res.data);
//         setItems(res.data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//   }, []);

//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
// ----------------------------------------------------------------------------------------------------------
// function App() {
//   const [entries, setEntries] = useState([]);
//   const [article, setArticle] = useState([])

//   useEffect(() => {
//     axios
//       .get('http://localhost:3001/posts')
//       .then((response) => {
//         setEntries(response.data.items);
//         setArticle(response.data.items)
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//   }, []);

//   return (
//     <div className="App">
//       <div className="App">
//         <div className='container'>
//           <header>
//             <div className='wrapper'>
//               <div className='wrapper_inner'>
//                 <span className='wrapper_span'>Cookbook</span>

//               </div>
//             </div>
//           </header>
//           <main>
//             <div className='wrapper'>
//               <Posts posts={entries} articls={article} />
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

