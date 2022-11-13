import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem, Media
} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { motion } from 'framer-motion';


const Menu = (props) => {

  const menu = props.dishes.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-4 mt-2">
        <RenderDish dish={dish} />
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <motion.div className="container"
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x: window.innerWidth, transition: {duration:0.3}}}
      >
        <div className="row">
          <Breadcrumb className='my-4'>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {menu}
        </div>
      </motion.div>
    );
  }
  /* return (
     <div className="container-fluid">
       <div className="row">
         {menu}
         <DishDetail details={props.details} />
         <RenderDishComments dish={props.details} />
       </div>
 
     </div>
   );*/
}

export default Menu;

function RenderDish({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`} >
      <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <Media heading>{dish.name}</Media>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}
