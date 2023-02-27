'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Children, ReactNode } from "react";

interface Props {
    children?: ReactNode
}

const queryClient = new QueryClient();

const QueryWrapper = ({children : Props}) => {
    <QueryClientProvider>
        {Children}
    </QueryClientProvider>
}