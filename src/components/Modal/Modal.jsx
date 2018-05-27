import React, { PureComponent } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from "../LoginForm";

export default class ModalLogin extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        //this.toggle = this.toggle.bind(this);
    }

    toggle() => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>LogIn</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <LoginForm/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

