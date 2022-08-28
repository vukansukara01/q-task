import axios from "axios";

const getAllPosts = async () => {
  try {
    const res  = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getSinglePost = async (id: string) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllPosts, getSinglePost };
