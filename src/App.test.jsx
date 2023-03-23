import { describe, test, expect } from "vitest";

import {render, screen} from "@testing-library/react";

import App from "./App";


describe('Testing App component', ()=> {
    it('render App', ()=> {
        render(<App/>);
        screen.debug();
    });

    test('H1 in the component', ()=> {
        render(<App/>);
        expect(screen.getByTestId('header-1')).toBeInTheDocument();
    })
})