import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const dashboard = async () => {
    const session = await getServerSession(authOptions);
    if (!session)
        
  return (
    <main>
      <h1 className="text-2xl font-bold">Welcome Back</h1>
    </main>
  );
};

export default dashboard;
