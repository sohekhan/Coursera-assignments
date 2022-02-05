import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

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
    else {
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle> <h4>{item.name}</h4> </CardTitle>
                    <h5>{item.designation ? <CardSubtitle> {item.designation} </CardSubtitle> : null }</h5>
                    <CardText> {item.description} </CardText>
                </CardBody>
            </Card>
        );
    }
}


class Home extends Component {
    
    render() {
        return (
            <div className='container'>
                <div className='row row-content align-items-start'>
                    <div className='col-12 col-md m-1'>
                        <Link to={`menu`} >
                        <RenderCard item={this.props.dish} isLoading={this.props.dishesLoading} 
                           errMess={this.props.dishesErrMess} />
                        </Link>
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderCard item={this.props.promotion} isLoading={this.props.promosLoading} 
                           errMess={this.props.promosErrMess} />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderCard item={this.props.leader} isLoading={this.props.leadersLoading} 
                           errMess={this.props.leadersErrMess} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;