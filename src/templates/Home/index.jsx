import { Component } from 'react';
import './styles.css';
import { Posts } from '../../components/Posts/index';
import { loadPosts } from '../../utils/load-posts'
import { Button } from '../../components/Button/index';
import { SearchInput } from '../../components/SearchInput';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue:''
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
  handleChange = (e) => {
      const {value} = e.target; 
      this.setState({ searchValue: value });
    }
  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue ? 
    allPosts.filter(post => {
        return post.title.toUpperCase().includes(searchValue.toLocaleUpperCase());
      }) : posts;
    
  
  return (
    <section className="container">
      {!!searchValue && (
      <><h1>Search value: {searchValue}</h1><br/></>
      )}
  
      <SearchInput searchValue={searchValue} handleChange={this.handleChange}/>
      <br/><br/>
      {filteredPosts.length > 0 && (<Posts posts={filteredPosts}/>)}
      {filteredPosts.length === 0 && (<p> There's no posts :( </p>)}
      
      <div className='button-container'>
      {!searchValue && (
      <Button 
        disabled={noMorePosts}
        text="More Posts" 
        
        onClick={this.loadMorePosts} 
        />)}
      </div>
    </section>
  ); 
  }
}
