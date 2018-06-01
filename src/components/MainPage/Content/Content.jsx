import React, { PureComponent } from 'react';
import './Content.scss';
import { Jumbotron } from 'reactstrap';

export default class Content extends PureComponent {

    render() {
        return (
            <div className="content">
                <div className="content-container">
                    <Jumbotron>
                        <h1 className="display-5">Hello, world</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                    </Jumbotron>
                    <Jumbotron>
                        <h1 className="display-5">Hello, world</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                    </Jumbotron>
                    <Jumbotron>
                        <h1 className="display-5">Hello, world</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                    </Jumbotron>
                    <Jumbotron>
                        <h1 className="display-5">Hello, world</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                    </Jumbotron>
                    <Jumbotron>
                        <h1 className="display-5">Hello, world</h1>
                        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-2" />
                    </Jumbotron>
                </div>
            </div>
        )
    }
}
