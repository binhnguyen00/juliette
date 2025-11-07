import React from "react";

import { Spinner, Button } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";

import { DefaultLayout } from "@components";

export function Home() {
  return (
    <DefaultLayout>
      <div className="space-y-4">
        <p className="text-2xl font-bold text-center">
          React + Vite + TailwindCSS + HeroUI
        </p>
        <MockUsers />
      </div>
    </DefaultLayout>
  );
}

function MockUsers() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()),
  });

  const [ users, setUsers ] = React.useState<any[]>([]);

  const refresh = () => {
    refetch().then(() => {
      if (data) {
        setUsers([...data].sort(() => Math.random() - 0.5));
      }
    });
  };

  React.useEffect(() => {
    if (data) setUsers(data);
  }, [data]);

  if (isLoading) return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Spinner size="lg"/>
    </div>
  );

  if (isError) return (
    <div className="w-full h-fullflex flex-col justify-center items-center">
      <p className="text-red-500">{error.message}</p>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col items-center justify-start space-y-4">
      <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
          <tr>
            <th className="px-4 py-2 text-left">No.</th>
            <th className="px-4 py-2 text-left">Id</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Website</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {users.map((user: any, i: number) => (
            <tr
              key={user.id}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="px-4 py-2 font-medium text-gray-800">{i + 1}</td>
              <td className="px-4 py-2 font-medium text-gray-800">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2 text-gray-600">{user.username}</td>
              <td className="px-4 py-2 text-blue-600 underline">{user.email}</td>
              <td className="px-4 py-2 text-gray-700">{user.phone}</td>
              <td className="px-4 py-2 text-blue-500 hover:underline cursor-pointer">
                {user.website}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onPress={refresh} color="primary" size="md" className="self-end">
        Refresh
      </Button>
    </div>
  );
}