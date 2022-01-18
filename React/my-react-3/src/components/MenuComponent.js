import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-lg-3 col-md-6 col-sm-6 mt-1 mb-1'>
                    <Card>
                        <Link to={`menu/${dish.id}`} >
                            <CardImg width="100%" object src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle> <h4>{dish.name}</h4> </CardTitle>
                            </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
            );
        });

        return(
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem> 
                            <Link to='home'> Home </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active> Menu </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className='row row-content'>
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;