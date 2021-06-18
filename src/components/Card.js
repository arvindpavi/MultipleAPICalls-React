import './Card.css';

function Card(props) {
    return (
        <div className="col-12 list-group-item list-group-item-action py-3 lh-tight">
            <div className="row">
                <div className="col-12">
                    <span>{props.details.id}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <span>{props.details.first_name}</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <span>{JSON.stringify(props.details.apiResponse, null, 2)}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
