import { describe, test, expect } from "vitest";

import { screen, waitFor } from "@testing-library/react";

import App from "./App";
import { renderWithQueryClientProvider } from "./utils-for-tests";


describe('Testing App component', () => {

    test('App Loader', () => {
        renderWithQueryClientProvider({ children: <App /> });
        expect(screen.queryByText(/loading/i)).toBeInTheDocument();
        screen.debug();
    });

    test('App container by id', async () => {
        renderWithQueryClientProvider({ children: <App /> });

        waitFor(() => expect(screen.getByTestId('appContainer')).toBeInTheDocument()
        );
    })
})