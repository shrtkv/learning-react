import './styles.css';
export const PostCard = ({id,title,body,cover}) => (
        <div className='post'>
            <img src={cover}  alt={title} />
            <div className="post-content">
                <h3>{id} {title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );