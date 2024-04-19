import { NextResponse } from "next/server";
import usersMock from './mock_data.json';

export async function GET(): Promise<NextResponse<UserSummary[]>> {
    // Simulating Users would be a large model and we just want a small set for the /users api
    
    const result: UserSummary[] = usersMock.map(u => ({
        id: u.id,
        first_name: u.first_name,
        last_name: u.last_name,
        gender: u.gender,
        email: u.email,
        avatar: u.avatar,
    }));

    return NextResponse.json(result);
}