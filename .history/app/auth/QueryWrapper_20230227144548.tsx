'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

const QueryWrapper = ({children : }) => {
    <QueryClientProvider>
        {child}
    </QueryClientProvider>
}