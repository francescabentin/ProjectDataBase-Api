import Profile from "../Profile";

function ImgCard ({defaultAvatar, data, className}) {
    return (
        <Profile 
        className={className} 
        defaultAvatar={defaultAvatar} 
        avatar={data.image} />
    );
}

export default ImgCard;