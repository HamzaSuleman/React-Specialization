import React from 'react';
import DishDetail from './DishDetail Component';
import About from './About Component';
import Menu from './Menu Component';
import Contact from './Contact Component';
import Home from './Home Component';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = (props) => {
    const location = useLocation();
    return (
        <React.Fragment>
            <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                    <Route path='/home' element={<Home 
                    dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={props.dishes.isLoading}
                    dishesErrMess={props.dishes.errMess}
                    promotion={props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={props.promotions.isLoading}
                    promoErrMess={props.promotions.errMess}
                    leader={props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leaderLoading={props.leaders.isLoading}
                    leaderErrMess={props.leaders.errMess}
                    />
                    } />

                    <Route exact path='/menu' element={<Menu dishes={props.dishes}/>} />
                    
                    <Route path='/menu/:dishId' element={<DishDetail dishes={props.dishes.dishes}
                    isLoading={props.dishes.isLoading}
                    errMess={props.dishes.errMess}
                    comments={props.comments.comments}
                    commentsErrMess={props.comments.errMess}
                    postComment={props.postComment}/>} 
                    />

                    <Route exact path='/contact' element={<Contact resetFeedbackForm={props.resetFeedbackForm} 
                    postFeedback={props.postFeedback}/>} />
                    
                    <Route path='/about' element={<About leaders={props.leaders.leaders}
                    isLoading={props.leaders.isLoading}
                    errMess={props.leaders.errMess}
                    />} />

                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
                </AnimatePresence>
        </React.Fragment>
    );
}