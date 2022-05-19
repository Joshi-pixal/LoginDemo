import { useQuery } from "react-query";
import axios from "axios";

export const UserPostData = () => {
  const { isLoading, data, error } = useQuery("dummy", () => {
    axios.get("http://localhost:4000/dummy");
  });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if(error){
    return<h2>{error.message}</h2>
  }

  return (
    <>
      <h2>Users Input Data</h2>
      {
          data?.data.map((hero) => {
              return <div key={hero.userId}>{hero.userId}</div>
          })
      }
    </>
  );
};
