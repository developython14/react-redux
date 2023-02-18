
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,FormGroup,Form , Input,Label ,FormFeedback} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { changename } from '../provider/comment_provider';

function Comment(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const current_comment = useSelector((state) => state.comment.comment)
  const touched = useSelector((state) => state.comment.touched)
  let errors = '';
  const dispatch = useDispatch()
  if (touched && current_comment.length < 3){
    errors = 'First Name should be >= 3 characters';
  }
    else if (touched && current_comment.length > 10){
        errors = 'First Name should be <= 10 characters';
    }


  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Submit Comment 
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
        <ModalBody>
        <Form>
        <FormGroup>
    <Label for="exampleSelect">
      Rating
    </Label>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        1
      </option>
      <option>
        2
      </option>
      <option>
        3
      </option>
      <option>
        4
      </option>
      <option>
        5
      </option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="Name">
      Your Name
    </Label>
    <Input
      id="Name"
      name="Name"
      placeholder="Your Name"
      type="text"
      onChange={(event) => dispatch(changename({comment:event.target.value}))}
      valid = {errors.length ==0 && touched==true}  invalid={errors.length !=0 && touched==true}/>
    <FormFeedback valid = {errors.length ==0 && touched==true}  invalid={errors.length !=0 && touched==true}>
      {errors}
    </FormFeedback>
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">
      Comment
    </Label>
    <Input
      id="comment"
      name="comment"
      type="textarea"
    />
  </FormGroup>
  
  </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Comment;