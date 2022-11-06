
import React, { Component } from 'react';
import { Routes, Route, Navigate, useParams, withRouter} from 'react-router-dom';
import Menu from './Menu Component';
import Contact from './Contact Component';
import Home from './Home Component';
import Header from './Header Component';
import DishDetail from './DishDetail Component';
import About from './About Component';
import Footer from './Footer Component';
import { connect } from 'react-redux';

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
        console.log("Compoenent Did Mount Called...")
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
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
                    } />

                    <Route exact path='/menu' element={<Menu dishes={this.props.dishes}/>} />
                    <Route path='/menu/:dishId' element={<DishDetail dishes={this.props.dishes} comments={this.props.comments} />} />

                    <Route path='/contact' element={<Contact />} />
                    
                    <Route path='/about' element={<About leaders={this.props.leaders}/>} />

                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Main);


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