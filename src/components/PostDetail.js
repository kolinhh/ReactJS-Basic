import { Component } from 'react';
import userImage from '../images/user.jpg';
import { useLocation, Link } from 'react-router-dom';


class PostDetail extends Component {
    render() {
        const post = this.props.state.state.post;
        return (
            <div>
                <h3 className='text text-center'>Post Details</h3>
                <Link to='/'>
                    <button className='btn btn-sm btn-primary'><i className='fa fa-arrow-left'>
                    </i></button>
                </Link>
                <div class="card">
                    <img src={userImage} className="card-img-top" alt="userimage" />
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.desc}</p>
                    </div>
                </div>
            </div>
        );
    }

}
export default (props) => {
    const state = useLocation();
    return <PostDetail{...props} state={state} />
}