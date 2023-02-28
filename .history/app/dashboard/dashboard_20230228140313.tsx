import { authOptions } from "";
import { getServerSession } from "next-auth/next";

const dashboard = async () => {
  return (
    <main>
      <h1 className="text-2xl font-bold">Welcome Back</h1>
    </main>
  );
};

export default dashboard;
