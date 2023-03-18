import Profile from "../Profile";

function ImgCard ({cover, data, className}) {
    return (
        <Profile 
        className={className} 
        defaultAvatar={cover} 
        avatar={data.image} />
    );
}

export default ImgCard;