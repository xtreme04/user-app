type UserDetailsPageProps = {
    params: {
        id: string;
    };
}

export default function UserDetailsPage({ params: { id } }: UserDetailsPageProps) {
    return <div>User details page - {id} </div>;
}