'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Children, ReactNode } from "react";

interface props {
    children?: ReactNode
}

const queryClient = new QueryClient();

const QueryWrapper = ({children : props}) => {
    <QueryClientProvider>
        {Children}
    </QueryClientProvider>
}