export const PostCard = ({id,title,body,cover}) => (
        <div className='post'>
            <img src={cover}  alt={title} />
            <div className="post-content">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );