'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Children } from "react";

const queryClient = new QueryClient();

const QueryWrapper = ({children : }) => {
    <QueryClientProvider>
        {Children}
    </QueryClientProvider>
}