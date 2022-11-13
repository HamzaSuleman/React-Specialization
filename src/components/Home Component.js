import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { motion } from 'framer-motion';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
    
    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-10%)'
                }}>
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
        );

}

function Home(props) {
    return(
        <motion.div className="container" 
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x: window.innerWidth, transition: {duration:0.3}}}
        >
            <div className="row align-items-start">
                <div className="col-12 col-md mt-2">
                    <RenderCard item={props.dish} 
                    isLoading={props.dishesLoading} 
                    errMess={props.dishesErrMess}  />
                </div>
                <div className="col-12 col-md mt-2">
                <RenderCard item={props.promotion} 
                isLoading={props.promoLoading} 
                errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md mt-2">
                <RenderCard item={props.promotion} 
                isLoading={props.promoLoading} 
                errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md mt-2">
                <RenderCard item={props.leader} 
                isLoading={props.leaderLoading} 
                errMess={props.leaderErrMess} />
                </div>
                {console.log(props.promoLoading)}
                {/*<div className="col-12 col-md mt-2">
                <RenderCard item={props.leader} 
                isLoading={props.leadersLoading} 
                errMess={props.leadersErrMess} />
    </div>*/}
               
                {/*<div className="col-12 col-md mt-2">
                    <RenderCard item={props.leader} />
    </div>*/}
            </div>
        </motion.div>
    );
}

export default Home;