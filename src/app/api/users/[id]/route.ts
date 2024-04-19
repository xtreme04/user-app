import { NextResponse } from "next/server";
import usersMock from '../mock_data.json';

type GetUserProps = {
    params: {
        id: string;
    }
}

export async function GET(request: Request, { params: { id } }: GetUserProps): Promise<NextResponse<User | null>> {    
    const user: User | undefined = usersMock.find(u => u.id === id);

    if (!user) {
        return NextResponse.json(null, {
            status: 404,
            statusText: `User ${id} not found`
        });
    }

    return NextResponse.json(user);
}