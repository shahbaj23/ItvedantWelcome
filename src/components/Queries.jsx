import { useQuery } from "@tanstack/react-query";

export default function Queries() {
  const fetchUsers = async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();          
  };

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.products.map((item) => (     
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
