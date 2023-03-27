import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"


const renderWithQueryClientProvider = ({ children }) => {
    const client = new QueryClient();
    render(
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}

export { renderWithQueryClientProvider }