import { PostCard } from "../PostCard/Index"

export const Posts = ({posts}) => {
    return(
        <div className="posts">
          {posts.map(post => (
            <PostCard
              key={post.id} 
              id={post.id}
              img={post.img}
              title={post.title}
              body={post.title}
              cover={post.cover} 
              />
            )
            )
          }  
      </div>
    )
}