"use client"

import { QueryClient, QueryClientProvider } from "react-query"
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

Qu
const queryClient = new QueryClient();

const QueryWrapper = ({children} : Props) => {
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>;
}

export default QueryWrapper;