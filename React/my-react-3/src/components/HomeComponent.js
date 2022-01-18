import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle> <h4>{item.name}</h4> </CardTitle>
                <h5>{item.designation ? <CardSubtitle> {item.designation} </CardSubtitle> : null }</h5>
                <CardText> {item.description} </CardText>
            </CardBody>
        </Card>
    )
}

class Home extends Component {

    render() {
        return (
            <div className='container'>
                <div className='row row-content align-items-start'>
                    <div className='col-12 col-md m-1'>
                        <Link to={`menu/${this.props.dish.id}`} >
                        <RenderCard item={this.props.dish} />
                        </Link>
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderCard item={this.props.promotion} />
                    </div>
                    <div className='col-12 col-md m-1'>
                        <RenderCard item={this.props.leader} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;