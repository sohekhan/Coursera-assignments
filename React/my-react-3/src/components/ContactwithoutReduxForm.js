import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, Row, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate( firstname, lastname, telnum, email ) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
        };

        if (this.state.touched.firstname && (firstname.length < 3)) {
            errors.firstname = "First Name should be greater than or equal to 3 characters";
        } else if (this.state.touched.firstname && (firstname.length > 10)) {
            errors.firstname = "First Name should be less than or equal 10 characters";
        }

        if (this.state.touched.lastname && (lastname.length < 3)) {
            errors.lastname = "Last Name should be greater than or equal to 3 characters";
        } else if (this.state.touched.lastname && (lastname.length > 10)) {
            errors.lastname = "Last Name should be less than or equal 10 characters";
        }

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum)) {
            errors.telnum = "Tel. number should contain numbers only"
        }

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1){
            errors.email = 'Email should contain @';
        }

        return errors;
    }

    render() {
        const errors = this.validate( this.state.firstname, this.state.lastname, this.state.telnum, this.state.email )
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>             
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup row>
                                <Label htmlFor='firstname' className='col-md-2'><h5>First Name</h5></Label>
                                <Col md={10}>
                                <Input name='firstname' type='text' id='firstname' placeholder='First Name' value={this.state.firstname} 
                                   onChange={this.handleInputChange} 
                                   valid={errors.firstname === ''}
                                   invalid={errors.firstname !== ''}
                                   onBlur={this.handleBlur('firstname')}
                                   />
                                <FormFeedback> {errors.firstname} </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' className='col-md-2'><h5>Last Name</h5></Label>
                                <Col md={10}>
                                <Input name='lastname' type='text' id='lastname' placeholder='Last Name' value={this.state.lastname} 
                                   onChange={this.handleInputChange} 
                                   valid={errors.lastname === ''}
                                   invalid={errors.lastname !== ''}
                                   onBlur={this.handleBlur('lastname')}
                                   />
                                <FormFeedback> {errors.lastname} </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' className='col-md-2'><h5>Contact Tel.</h5></Label>
                                <Col md={10}>
                                <Input name='telnum' type='tel' id='telnum' placeholder='Tel. Number' value={this.state.telnum} 
                                   onChange={this.handleInputChange} 
                                   valid={errors.telnum === ''}
                                   invalid={errors.telnum !== ''}
                                   onBlur={this.handleBlur('telnum')}
                                   />
                                <FormFeedback> {errors.telnum} </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' className='col-md-2'><h5>Email</h5></Label>
                                <Col md={10}>
                                <Input name='email' type='email' id='email' placeholder='Email' value={this.state.email} 
                                   onChange={this.handleInputChange} 
                                   valid={errors.email === ''}
                                   invalid={errors.email !== ''}
                                   onBlur={this.handleBlur('email')}
                                   />
                                <FormFeedback> {errors.email} </FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type='checkbox' name='agree' checked={this.state.agree} onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Input type='select' name='contactType' value={this.state.contactType} onChange={this.handleInputChange} >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='message' className='col-md-2'><h5>Your Feedback</h5></Label>
                                <Col md={10}>
                                <Input name='message' type='textarea' id='message' rows='12' value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;