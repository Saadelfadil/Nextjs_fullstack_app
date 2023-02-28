import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation"

const dashboard = async () => {
    const session = await getServerSession(authOptions);
    if (!session)
        redirect("/api/auth/signin");
  return (
    <main>
      <h1 className="text-2xl font-bold">Welcome Back {session?.user}</h1>
    </main>
  );
};

export default dashboard;
