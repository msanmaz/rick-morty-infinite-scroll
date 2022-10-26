import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";

function InfiniteCSRPage() {
  const { data, status, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["infiniteCharacters"],
    async ({ pageParam = 1 }) =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageParam}`
      ).then((result) => result.json()),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.info.next) {
          return pages.length + 1;
        }
      },
    }
  );
  return (
    <div>
      <h1>
        Rick and Morty with React Query and Infinite Scroll - Client Side
        Rendered
      </h1>
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 20}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
        >
          <div className='flex flex-wrap'>
            {data?.pages.map((page) => (
              <>
                {page.results.map((character) => (
                  <div className="w-1/4 px-4" key={character.id}>
                    <Image
                      src={character.image}
                      alt={character.name}
                      width={150}
                      height={150}
                      layout='responsive'
                      loading='lazy'
                    />
                    <div className='text'>
                      <p>Name: {character.name}</p>
                      <p>Lives in: {character.location.name}</p>
                      <p>Species: {character.species}</p>
                      <i>Id: {character.id} </i>
                    </div>
                  </div>
                ))}
              </>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default InfiniteCSRPage;