import type { User } from "#types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const { data, status } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get<User>("/api");
      return data;
    },
    queryKey: ["user"],
  });

  if (status !== "success") return <>Loading...</>;

  return (
    <>
      <div>The user's name: {data.name}.</div>
      <div>The user's age: {data.age}.</div>
      <div>Is the user cool: {data.isCool ? "yes" : "no"}.</div>
    </>
  );
}

export default App;
