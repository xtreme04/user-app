type User = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    gender? : string;
    avatar? : string;
    bio: string;
    friends: User[];
}

type DbUser = Omit<User, 'friends'> & {
    friends: string[];
}

type UserSummary = Omit<User, 'gender' | 'friends' | 'bio'>
