import { renderHook, waitFor } from "@testing-library/react"
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient;

const useCustomHook = () => {
    return useQuery({ queryKey: ['custom-key'], queryFn: () => 'OK' })
}



const wrapper = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

describe('React query integration tests', () => {

    test('When success toBe true', async () => {
        const { result } = renderHook(() => useCustomHook(), { wrapper });
        await waitFor(() => expect(result.current.isSuccess).toBe(true))
    });

    test('Get OK result', async ()=> {
        const {result} = renderHook(()=> useCustomHook(), {wrapper});
        await waitFor(()=> expect(result.current.data).toEqual('OK'));
    })
})