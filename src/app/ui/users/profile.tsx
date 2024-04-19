import Image from "next/image";
import Link from "next/link";

type ProfileProps = {
   user: User
}

export default function Profile({ user }: ProfileProps) {
   return (
      <div className="w-full">
         <h1 className="mb-8 text-xl md:text-2xl">
            {`${user.first_name} ${user.last_name}`}
         </h1>

         <section className="mb-8">
            {user.avatar &&
               <Image
                  src={user.avatar}
                  className="rounded-full"
                  alt={`${user.first_name}'s profile picture`}
                  width={28}
                  height={28}
               />
            }
            <p>{user.bio}</p>
         </section>

         <section className="mb-8">
            <table>
               <tbody>
                  <tr>
                     <th>First Name</th>
                     <td>{user.first_name}</td>
                  </tr>
                  <tr>
                     <th>Last Name</th>
                     <td>{user.last_name}</td>
                  </tr>
                  <tr>
                     <th>Email</th>
                     <td>{user.email}</td>
                  </tr>
                  <tr>
                     <th>Gender</th>
                     <td>{user.gender ?? '(Not provided)'}</td>
                  </tr>
               </tbody>
            </table>
         </section>

         {user.friends && user.friends.length > 0 &&
            <section className="mb-8">
               <h2 className="text-xl md:text-2xl">Friends</h2>

               <ul>
                  {user.friends.map(friend => (
                     <li>
                        <Link
                           href={`/users/${friend.id}`}
                           className={`text-blue-600`}
                        >
                           {`${friend.first_name} ${friend.last_name}`}
                        </Link>
                     </li>
                  ))}
               </ul>
            </section>
         }
      </div>
   );
}