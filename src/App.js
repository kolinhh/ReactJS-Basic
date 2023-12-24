import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPost from './components/AddPost';
import Posts from './components/Post';
import PostDetail from './components/PostDetail';



function App() {
  const END_POINT = 'http://localhost:9000/posts';
  let [posts, setPosts] = useState([]);

  const addnewPost = async (post) => {
    // console.log("Post is", post);
    await fetch(END_POINT, {
      method: "POST",
      body: JSON.stringify(post)
      // {
      //   title: post.title,
      //   desc: post.desc,
      // })
      // headers: { "content-type": "application/json" }
    });
    setPosts([post, ...posts]);
  }

  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(END_POINT);
      let Dpost= await data.json();

      setPosts(Dpost);
    }
    // fetchData()
    //   .catch(console.error);;
  }, [])

  // async function getApi() {
  //   const  posts = await (await fetch(END_POINT)).json();

  // }

  // useEffect(() => {
  //   getApi();
  //   setPosts(posts);
  // }, []);


  const postDeleteHandler = async(id) => {
    await fetch(END_POINT+'/'+id,{
      method:"DELETE"
    })
    setPosts(posts.filter(post => post.id != id));
  }

  return (
    <div className='container'>
      <h1 className='text-center text-info my-3'>Posts</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Posts posts={posts} removePost={postDeleteHandler} />} />
          <Route path="/add" element={<AddPost addPost={addnewPost} />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;