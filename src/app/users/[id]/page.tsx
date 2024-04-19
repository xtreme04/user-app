import Profile from "@/app/ui/users/profile";

type UserDetailsPageProps = {
    params: {
        id: string;
    };
}

export default async function UserDetailsPage({ params: { id } }: UserDetailsPageProps) {
    var result = await fetch(`${process.env.API_BASE_URL}/api/users/${id}`);
    var user = await result.json() as User;

    console.log("User Initial", {user});

    return (
        <div>
            <Profile user={user} />
        </div>
    );   
}