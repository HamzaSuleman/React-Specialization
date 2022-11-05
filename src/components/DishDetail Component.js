import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link, useParams } from 'react-router-dom';

const DishDetail = (props) => {

  const { dishId } = useParams();
  var id = parseInt(dishId)

  const dish = props.dishes.filter((dish) => dish.id === id)[0]
  const comments = props.comments.filter((comment) => comment.dishId === id)


  return (
    <div className="container">
      <div className="row">
        <Breadcrumb className='my-4'>

          <BreadcrumbItem ><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem  active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderDishComments comments={comments} />
        </div>
      </div>
    </div>
  );


  function CalculateRating({ comments }) {
    var rating = 0;
    for (let i = 0; i < comments.length; i++) {
      rating += comments[i].rating;
    }
    return <CardImgOverlay><i><b>Rating: </b> {rating / 5}</i></CardImgOverlay>
  }


  function RenderMenuItem({ dish }) {
    return (
      <Card>

        <CardImg width="100%" src={dish.image} alt={dish.name} />

        <CardBody>
          <CardText>
            <b><CardTitle>{dish.name}</CardTitle></b>
            {dish.description}
          </CardText>
        </CardBody>


      </Card>
    );
  }

  function RenderDishComments({ comments }) {
    const commentsList = comments.map((comment) => {
      return <CardText key={comment.id} className='row col-sm-12 '>
        <div ><i><b>Name: </b>{comment.author}</i>,  <i><b>Rating:</b> {comment.rating}</i></div>
        <i><b>Date:</b> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</i>
        <i><b>Comment:</b> {comment.comment}</i>
        <hr className='p-1 mt-2 mb-0' />
      </CardText>
    });

    return <div className='col-md-12 '>

      <Card className='p-2'>
        <CardBody>
          <CardTitle>
            <i><h4>Comments</h4></i>
            <hr />
          </CardTitle>
          <CardText>{commentsList}</CardText>
        </CardBody>
      </Card>
    </div>
  }
}

export default DishDetail;