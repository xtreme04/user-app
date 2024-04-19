import UsersTable from "../ui/users/table";

export default async function UsersPage() {
    var result = await fetch(`${process.env.API_BASE_URL}/api/users`);

    var users = await result.json() as UserSummary[];
    console.log({ users });

    return (
        <div>
            <UsersTable users={users} />
        </div>
    );
}