import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children, user }) {
  const router = useRouter();

  return user ? children : router.push("/");
}
