'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Children } from "react";

interface type {
    children: ReactNode
}
const queryClient = new QueryClient();

const QueryWrapper = ({children : }) => {
    <QueryClientProvider>
        {Children}
    </QueryClientProvider>
}