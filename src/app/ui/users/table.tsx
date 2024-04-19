import Image from "next/image";
import Link from 'next/link';

type UsersTableProps = {
   users: UserSummary[]
}

export default function UsersTable({ users }: UsersTableProps) {
   return (
      <div className="w-full">
         <h1 className="mb-8 text-xl md:text-2xl">Users</h1>

         <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
               <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">

                  <div className="md:hidden">
                     {users?.map((user) => (
                        <div
                           key={user.id}
                           className="mb-2 w-full rounded-md bg-white p-4"
                        >
                           <div className="flex items-center justify-between border-b pb-4 text-gray-500">
                              <div>
                                 <div className="mb-2 flex items-center">
                                    <div className="flex items-center gap-3">
                                       {user.avatar &&
                                          <Image
                                             src={user.avatar}
                                             className="rounded-full"
                                             alt={`${user.first_name}'s profile picture`}
                                             width={28}
                                             height={28}
                                          />
                                       }
                                       <p>{`${user.first_name} ${user.last_name}`}</p>
                                    </div>
                                 </div>
                                 <p className="text-sm">
                                    {user.email}
                                 </p>
                              </div>
                           </div>
                           <div className="pt-4 text-sm">
                              <Link
                                 key={`profile-link-${user.id}`}
                                 href={`/users/${user.id}`}
                                 className={`text-blue-600`}
                              >
                                 Details
                              </Link>
                           </div>
                        </div>
                     ))}
                  </div>


                  <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                     <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                        <tr>
                           <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Avatar</th>
                           <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                              First Name
                           </th>
                           <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                              Last Name
                           </th>
                           <th scope="col" className="px-4 py-5 font-medium">
                              Email
                           </th>
                           <th>&nbsp;</th>
                        </tr>
                     </thead>

                     <tbody className="divide-y divide-gray-200 text-gray-900">
                        {users.map(user => (
                           <tr>
                              <td>
                                 {user.avatar &&
                                    <Image
                                       src={user.avatar}
                                       alt={`${user.first_name}'s profile picture`}
                                       width={28}
                                       height={28}
                                    />
                                 }
                              </td>
                              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                 {user.first_name}
                              </td>
                              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                 {user.last_name}
                              </td>
                              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                 {user.email}
                              </td>
                              <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                 <Link
                                    key={`profile-link-${user.id}`}
                                    href={`/users/${user.id}`}
                                    className={`text-blue-600`}
                                 >
                                    Details
                                 </Link>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   )
}