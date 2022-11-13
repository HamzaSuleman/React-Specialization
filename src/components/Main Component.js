
import React, { Component } from 'react';
import Header from './Header Component';
import Footer from './Footer Component';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import { postComment, postFeedback, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { AnimatedRoutes } from './AnimatedRoutes';



const mapDispatchToProps = dispatch => ({
  
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),

    postFeedback: (
      firstname,
      lastname,
      telnum,
      email,
      agree,
      contactType,
      message) => dispatch(postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message)),

  });

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }

class Main extends Component {

    ondishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
      this.props.fetchLeaders();
    }
    /* UNSAFE_componentWillMount()
     {
         console.log("Compoenent Will Mount Called...")   
     }*/

    render() {
        console.log("Render Called...")
        return (
            <div className="App">
                <Header />
                <AnimatedRoutes dishes={this.props.dishes}
                                comments={this.props.comments}
                                promotions={this.props.promotions}
                                leaders={this.props.leaders}
                                postComment={this.props.postComment}
                                postFeedback={this.props.postFeedback}
                                resetFeedbackForm={this.props.resetFeedbackForm} 
                                />
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);


/*const DishWithId = () => {
    const {dishId} = useParams();
    const id = parseInt(dishId);
    console.log(typeof(id))
    return(
        <React.Fragment>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === id)[0]} 
        comments={this.state.comments.filter((comment) => comment.dishId === id)} />
        </React.Fragment>
    );
  };
*/
  /*<DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
  */