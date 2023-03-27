import { describe, test, expect } from "vitest";

import {render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe('Header component test', ()=> {
    test('Test by id in root container', ()=> {
        render(<Header/>);
        const expectedId = screen.getByTestId('header-id');
        expect(expectedId).toBeInTheDocument();
    });

    test('Contains IP Address Tracker text', ()=> {
        render(<Header/>);
        const expectedText = /IP Address Tracker/;

        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

    test('Input placeholder text', ()=> {
        render(<Header/>);
        const expectedText = /Search of any IP address or domain/i;

        expect(screen.queryByPlaceholderText(expectedText)).toBeInTheDocument();
    });

})