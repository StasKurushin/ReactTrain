import React from 'react';
import './Content.scss';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

const Content = (props) => {
    return (
        <div className='content'>
            <Card>
                <CardImg top width='5100%' src="https://geheimtipphamburg.de/wp-content/uploads/2018/02/Italiener_Hamburg_2-318x180.jpg"/>
                <CardBody>
                    <CardTitle>The biiggest pizza in the world</CardTitle>
                    <CardText>In Texas the Guinness World Record was beated. The local cooks backed the lagest pizza in the world!</CardText>
                    <Button>Read More</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width='5100%' src="https://pp.userapi.com/c830108/v830108783/109ca9/Ms4nUmxKSyA.jpg"/>
                <CardBody>
                    <CardTitle>Hala Madrid!</CardTitle>
                    <CardText>Real Madrid won the Champions League 3rd time in sequence </CardText>
                    <Button>Read More</Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width='5100%' src="https://cdn.cnn.com/cnnnext/dam/assets/171222051904-01-week-in-politics-1224-restricted-super-16-9.jpg"/>
                <CardBody>
                    <CardTitle>Politics</CardTitle>
                    <CardText>Trump's speach</CardText>
                    <Button>Read More</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Content;