"use client";
import Image from "next/image";
import { useGetPokemonByNameQuery } from "./services/pokemon";

export default function Home() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu");
  console.log(data, "data");
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error ? (
        <>Error Loading this page</>
      ) : (
        <div className="flex flex-col gap-8 p-8 ">
          <main className="flex flex-col gap-4 items-center sm:items-start">
            This is the Home Page Pokemon:
            <h1>{data?.name}</h1>
            <h1>{data?.order}</h1>
          </main>
          <div className="">
            <table>
              <thead>
                <tr>
                  <th>abilities</th>
                  <th>cries</th>
                </tr>
              </thead>
              <tbody>
                {data?.moves?.map((item: any, i: number) => (
                  <tr key={i}>
                    <td>{item?.move?.name}</td>
                    <td>{item?.move?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <footer>This is the footer</footer>
        </div>
      )}
    </>
  );
}
