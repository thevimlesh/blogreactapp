
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";

export default function App(){
  const {fetchBlogPosts} = useContext{AppContext};

  useEffect9(() => {
    fetchBlogPosts();;
  }

  return(
    <div className=""w-full h-full flex flex-col>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}; 