"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { ExampleApi } from "@/apis/example/ExampleApi"
import InfiniteScroll from "react-infinite-scroll-component"
import { QueryUtility } from "@/utilities/QueryUtility"

export default function InfiniteScrollExample() {
  const {
    data: examples,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [],
    queryFn: async ({ pageParam }) => {
      const response = await ExampleApi.getInfiniteScrollExamples({
        request: {
          page: pageParam,
        },
      })
      if (!response.isSuccess() || !response.data) {
        alert(response.message)
        return
      }
      return response.data
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage && lastPage.slice.hasNext ? allPages.length + 1 : undefined
    },
  })

  return (
    <main>
      <h1>#example#</h1>
      {
        examples && QueryUtility.isInfiniteLoaded({ data: examples }) && (
          <div>
            <ul>
              <InfiniteScroll
                next={fetchNextPage}
                hasMore={hasNextPage}
                dataLength={examples.pages.length}
                loader={<></>}
              >
                { examples.pages.map(page => page && (
                  page.slice.content.map((example, index) => (
                    <li
                      key={index}
                    >
                      <p>{example.name}</p>
                    </li>
                  ))
                ))}
              </InfiniteScroll>
            </ul>
          </div>
        )
      }
    </main>
  )
}
