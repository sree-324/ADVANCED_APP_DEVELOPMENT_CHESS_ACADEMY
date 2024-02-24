

const Card = ({ title, content, imgUrl }) => (
    <div className="card">
        <img src={imgUrl} alt="Card Image" />
        <div className="card-content">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </div>
);

export default Card;
