import React, { Component } from "react";
import {
    Button, Modal, ModalHeader, ModalBody, FormGroup, Input, Form, Label, FormFeedback
} from "reactstrap";



class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.toggleCommentModal = this.toggleCommentModal.bind(this);
        this.handleComment = this.handleComment.bind(this);

        this.state = {
            isCommentModalOpen: false,
            name: '',
            touched: {name: false}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

   

    toggleCommentModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        });
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });}
    
        handleInputChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;
        
            this.setState({
              [name]: value
            });}

        validate(name) {
            const errors = {
                name:''
            };
    
            if (this.state.touched.name && name.length < 3)
                errors.name = 'Name should be >= 3 characters';
            else if (this.state.touched.name && name.length > 15)
                errors.name = 'Name should be <= 15 characters';

            return errors;
        }

    handleComment(event) {
        this.toggleCommentModal();
        this.props.postComment(parseInt(this.props.dishId), parseInt(this.rating.value), this.name.value, this.textarea.value);
        /*alert(" Name: " + this.name.value + "\n Rating: " + this.rating.value
            + "\n Comment: " + this.textarea.value);*/
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.name);
       
        return (
            <div>
                <Button className="mt-3 px-5" outline onClick={this.toggleCommentModal}><span className="fa fa-comment fa-xl"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleCommentModal}>Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleComment}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="select" id="rating" name="rating"
                                    innerRef={(input) => this.rating = input} >
                                    <option>5</option>
                                    <option>4</option>
                                    <option>3</option>
                                    <option>2</option>
                                    <option>1</option>
                                </Input>

                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="name">Your Name</Label>
                                <Input type="name" id="name" name="name"
                                    innerRef={(input) => this.name = input} 
                                    value={this.state.name}
                                        valid={errors.name === ''}
                                        invalid={errors.name !== ''}
                                        onBlur={this.handleBlur('name')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                    
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="textarea">
                                    Comment
                                </Label>
                                <Input type="textarea" rows='6' name="textarea" id="textarea"
                                    innerRef={(input) => this.textarea = input} />
                            </FormGroup>
                            <Button outline type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }



}

export default CommentForm;