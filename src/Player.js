import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Player({Name, Team, Nationality, JerseyNumber, Age, Image}) {
    return (
    <div className="Player">
    <Card className = 'm-3'style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Image}/>
        <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text>Team:{Team}</Card.Text>
        <Card.Text>Nationality:{Nationality}</Card.Text>
        <Card.Text>JerseyNumber:{JerseyNumber}</Card.Text>
        <Card.Text>Age:{Age}</Card.Text>
        <Button variant="primary">Learn more</Button>
        </Card.Body>
    </Card>
    </div>
    );
}

export default Player;