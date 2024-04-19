import { NextResponse } from "next/server";
import usersMock from '../mock_data.json';

type GetUserProps = {
    params: {
        id: string;
    }
}

export async function GET(request: Request, { params: { id } }: GetUserProps): Promise<NextResponse<User | null>> {
    const user: (DbUser | undefined) = usersMock.find(u => u.id === id);

    if (!user) {
        return NextResponse.json(null, {
            status: 404,
            statusText: `User ${id} not found`
        });
    }

    const friends: User[] = [];

    user.friends.forEach(u => {
        const dbFriend = usersMock.find(u1 => u1.id === u);
        if (dbFriend) {
            friends.push(mapToUserModel(dbFriend, []));
        }
    });

    const responseUser = mapToUserModel(user, friends);

    return NextResponse.json(responseUser);
}

function mapToUserModel(user: DbUser, friends: User[]): User {
    return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        avatar: user.avatar,
        gender: user.gender,
        bio: user.bio,
        friends: friends,
    } as User;
}
