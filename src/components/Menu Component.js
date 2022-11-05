import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';


const Menu = (props) => {
  
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-4 mt-2">
        <RenderDish dish={dish}/>
      </div>
    );
  });

  return (
    <div className="container">
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
    </div>
);
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

function RenderDish ({dish}) {
  return (
      <Card>
          <Link to={`/menu/${dish.id}`} >
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <Media heading>{dish.name}</Media>
              </CardImgOverlay>
          </Link>
      </Card>
  );
}
