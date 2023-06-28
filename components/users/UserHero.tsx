import Image from "next/image";
import useUser from "@/Hooks/useUser";
import Avatar from "../Avatar";

interface UserHeroProps {
    userId: string;
}
const UserHero: React.FC<UserHeroProps> = ({userId}) => {
    const {data: fetchedUser} = useUser(userId);
  return (
    <div>
        <div className="h-44 relative bg-neutral-700">
            {fetchedUser?.coverImage && (
                <Image src={fetchedUser.coverImage} fill style={{objectFit: 'cover'}} alt="bannière"/>
            )}
            <div className="absolute left-4 -bottom-16">
                <Avatar userId={userId}isLarge hasBorder/>
            </div>

        </div>

    </div>
  )
}

export default UserHero