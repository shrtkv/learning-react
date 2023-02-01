import { Component } from 'react';
import './styles.css';
import { Posts } from '../../Posts';
import { loadPosts } from '../../../utils/load-posts';
import { Button } from '../../Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 55
  };

  async componentDidMount() {
    await this.loadPosts();
  }
  loadPosts = async () => {
    const { page,postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page,postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const {page, postsPerPage, allPosts, posts} = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage});
    console.log(this.setState)
  }
  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
  
  return (
    <section className="container">
      <Posts 
        posts={posts} />
      <div class='button-container'>
        <Button 
        disabled={noMorePosts}
        text="More Posts" 
        onClick={this.loadMorePosts} />
      </div>
    </section>
  ); 
  }
}
