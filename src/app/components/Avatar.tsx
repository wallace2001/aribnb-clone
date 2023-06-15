import Image from "next/image";

interface AvatarProps {
    imageUrl?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({
    imageUrl
}) => {
    return (
        <Image 
            className="rounded-full"
            height="30"
            width="30"
            alt="Avatar"
            src={imageUrl ? imageUrl : "/images/placeholder.jpg"}
        />
    );
}

export default Avatar;