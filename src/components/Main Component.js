
import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Menu from './Menu Component';
import Contact from './Contact Component';
import Home from './Home Component';
import Header from './Header Component';
import DishDetail from './DishDetail Component';
import About from './About Component';
import Footer from './Footer Component';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';



const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos())
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
                <Routes>
                    <Route path='/home' element={<Home 
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
                    } />

                    <Route exact path='/menu' element={<Menu dishes={this.props.dishes}/>} />
                    
                    <Route path='/menu/:dishId' element={<DishDetail dishes={this.props.dishes.dishes}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments}
                    commentsErrMess={this.props.comments.errMess}
                    addComment={this.props.addComment}/>} 
                    />

                    <Route exact path='/contact' element={<Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    
                    <Route path='/about' element={<About leaders={this.props.leaders}/>} />

                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
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