
import React, { Component } from 'react';
import { Routes, Route, Navigate, useParams} from 'react-router-dom';
import Menu from './Menu Component';
import Contact from './Contact Component';
import Home from './Home Component';
import Header from './Header Component';
import DishDetail from './DishDetail Component';
import About from './About Component';
import Footer from './Footer Component';
import { DISHES } from '../shared/dishes'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import { COMMENTS } from '../shared/comments'


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };

        console.log("Constructor Called...")
    }

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
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
                    } />

                    <Route exact path='/menu' element={<Menu dishes={this.state.dishes}/>} />
                    <Route path='/menu/:dishId' element={<DishDetail dishes={this.state.dishes} comments={this.state.comments} />} />

                    <Route path='/contact' element={<Contact />} />
                    
                    <Route path='/about' element={<About leaders={LEADERS}/>} />

                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;


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