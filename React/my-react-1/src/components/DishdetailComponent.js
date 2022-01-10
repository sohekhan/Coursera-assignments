import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDishDetail: this.props.dsdetail
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> <h4>{dish.name}</h4> </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div> 
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComments(comments) {
        if (comments != null ) {
            const commentCard = comments.map((comment) => {
                return(
                    <li key={comment.id}>
                        <p> {comment.comment} </p>
                        <p> -- {comment.author}, 
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                        </p>
                    </li>
                )
            })
    
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardBody>
                            <CardTitle> <h4>Comments</h4> </CardTitle>
                            <CardText className='list-unstyled'> 
                                {commentCard}
                            </CardText>
                        </CardBody>
                    </Card>
                </div> 
            )
        }
        
    }

    render() {
        const dish = this.props.dish;

        if (dish == null) {
            return (<div></div>);
        }

        const dishDetail = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return (
            <div className='row'>
                {dishDetail}
                {dishComment}
            </div>
        );
    }
}

export default DishDetail;