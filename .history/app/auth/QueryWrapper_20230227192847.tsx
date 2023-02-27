"use client"

import { QueryClient, QueryClientProvider } from "react-query"
import { ReactNode } from "react";
import {} from "react-hot-toast"

interface Props {
    children?: ReactNode
}

const queryClient = new QueryClient();

const QueryWrapper = ({children} : Props) => (
    <QueryClientProvider client={queryClient} >
        {children}
    </QueryClientProvider>
)

export default QueryWrapper;