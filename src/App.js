import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const actualData = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        ).then(response => response.json());
        setPost(actualData);
        console.log(actualData)

      } catch (error) {
        console.log(error);

      }

    }
    getData()
  }, [])

  return (
    <div className="App">
      <ul>
        {post.map((x) => { return <li key={x.id}>{x.title}</li> })}

      </ul>
    </div>
  );
}

export default App;
