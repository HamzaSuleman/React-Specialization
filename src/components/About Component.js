import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {baseUrl} from '../shared/baseUrl'
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function About(props) {

    const leaders = <Stagger in>{props.leaders.map((leader) => {
        
        
        return (
            <Fade in> 
                <RenderLeader leader={leader}/>
            </Fade>
        );
    })}</Stagger>

    if(props.isLoading)
    {return <div><Loading/></div>}
   
    return (
        <motion.div className="container"
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x: window.innerWidth, transition: {duration:0.3}}}
        >
            <div className="row">
                <Breadcrumb className='my-4'>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content my-0">
                <div className="col-12 col-md-6 my-3">
                    <h2 className='mb-3'>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5 my-5 mx-3">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 my-4">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-4">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                    <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                        P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>

            </div>
            <hr />
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <div className="row row-content">
                <div className="col-12 my-4">
                    <h2>Corporate Leadership</h2>
                </div>
                <hr />
                <div className="col-12">
                    <Media list>
                        {leaders}
                        
                    </Media>
                </div>
            </div>
            </FadeTransform>
        </motion.div>
    );
}

export default About;

function RenderLeader(props) {

    return (
        <React.Fragment>
            <div className='row mb-2'>
                <div className='container-fluid my-4 col-2'>
                <img src={baseUrl + props.leader.image} alt={props.leader.name} />

                </div>
                <div className='container-fluid my-4 col-4 col-sm-10'>
                    
                        <Media heading className='mb-2'>{props.leader.name}</Media>
                        <Media className='mb-2'>{props.leader.designation}</Media>
                        <Media className='mb-2'>{props.leader.description}</Media>
                    
                </div>

            <hr/>
            </div>
        </React.Fragment>
    );
}