import './Card.css';

function Card(props) {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <span>{props.cardDetails}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <span>{props.cardDetails}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
