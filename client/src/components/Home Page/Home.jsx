import { useCallback, useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
import Nav from "../Nav/Nav";
import LikeIcon from "./LikeIcon"
export default function Home(){
    const {user, dispatch}=useAuthContext()
    const navigate=useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login")
        } 
    }, []);

   
    const [posts, setPosts] = useState([]);
    // const [page, setPage] = useState(1);
    let page=1;
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        fetchPosts();
        
      }, []);
    
    // const observer=useRef()

    // const lastElementRef = useCallback(
    //     (node) => {
    //       if (loading) return; // Prevents fetching more data while loading
    
    //       if (observer.current) observer.current.disconnect(); // Disconnect previous observer
    
    //       observer.current = new IntersectionObserver((entries) => {
    //         if (entries[0].isIntersecting) {
    //           fetchPosts(); // Fetch more posts when sentinel element becomes visible
    //         }
    //       });
    
    //       if (node) observer.current.observe(node); // Observe the new last element
    //     },
    //     [loading]
    //   );


    const fetchPosts = async () => {
        setLoading(true);
        try {
          const response = await axios.get(` https://api.unsplash.com/photos/?client_id=t5UCOcguC3JNZQAqAbFZ1d-uktVUUMw6-s6Qnm9E6uQ&page=${page}`);
          setPosts(prevPosts => [...prevPosts, ...response.data]);
        //   setPage(prevPage => prevPage + 1);
          page=page+1;
          console.log(response.data)
          console.log("page number is: "+ page)
        } catch (error) {
          console.error('Error fetching posts:', error);
        } finally {
          setLoading(false);
        }
      };
      
    const handleScroll = () => {
        console.log(document.documentElement.scrollHeight)
        
        if ( window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight ) {
          fetchPosts();
        //   console.log("gello")
        }

      };

    useEffect(() => {
        
        window.addEventListener('scroll', handleScroll);
        // console.log("gello")
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div className="h-auto w-full bg-gray-300 flex flex-col items-center">
            <div className="w-full"><Nav /></div>
            <div className="flex flex-col bg-white w-[60vw] border-x-2">
            {posts.map((post,index) => {
                
                {/* if(post.length===index+1){ */}
                return (<div key={index} className="mb-5 border-b-2 border-black pb-10 font-lato">
                        
                        <img src={post.urls.regular}></img>
                        <div className="flex mt-1 ml-2">
                            <LikeIcon />
                            <div className="text-md ml-1 mt-[0.3vw]">{post.user.total_likes} likes</div>
                        </div>
                        
                        <div className="flex ml-2">
                            <div className="font-bold text-md cursor-pointer"><Link to={`https://www.instagram.com/${post.user.instagram_username}/`} target="_blank">{post.user.instagram_username}</Link></div>
                            <div className="text-black ml-2">{post.alt_description.charAt(0).toUpperCase() + post.alt_description.slice(1)}</div>

                        </div>
                        
                        </div>)
                {/* }else{
                    return (<div key={index} className="mt-5 border-b-2 border-black pb-10">
                            <img src={post.urls.regular}></img>
                            <div className="text-black">Description: {post.alt_description}</div>
                            </div>)
                }
             */}
                
            })}
            
            {loading && <div>Loading...</div>}

            </div>
        </div>
    )

}