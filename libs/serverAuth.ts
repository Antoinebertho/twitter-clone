import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({req});

    if (!session?.user?.email) {
        throw new Error("Utilisateur non identifié");
    }
    const currentUser = await prisma?.user.findUnique({
        where: {
            email: session.user.email,
        },
    })
    if (!currentUser) {
        throw new Error("Utilisateur non identifié");
    }
    return {currentUser};
}

export default serverAuth