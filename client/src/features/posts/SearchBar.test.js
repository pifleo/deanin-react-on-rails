import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar component", () => {
    it("renders without errors", () => {
        render(
            <SearchBar
                value=""
                onSearchChange={() => { }}
                onImmediateChange={() => { }}
            />
        );
    });

    it("handles immediate change", () => {
        const onImmediateChangeMock = jest.fn();
        const { getByPlaceholderText } = render(
            <SearchBar
                value=""
                onSearchChange={() => { }}
                onImmediateChange={onImmediateChangeMock}
            />
        );

        const inputElement = getByPlaceholderText("Search...");
        fireEvent.change(inputElement, { target: { value: "test" } });

        expect(onImmediateChangeMock).toHaveBeenCalledWith("test");
    });

    it("handles debounced search change", async () => {
        jest.useFakeTimers();
        const onSearchChangeMock = jest.fn();

        const { getByPlaceholderText } = render(
            <SearchBar
                value=""
                onSearchChange={onSearchChangeMock}
                onImmediateChange={() => { }}
            />
        );

        const inputElement = getByPlaceholderText("Search...");
        fireEvent.change(inputElement, { target: { value: "debounced" } });

        jest.advanceTimersByTime(500);

        await waitFor(() => {
            expect(onSearchChangeMock).toHaveBeenCalledWith("debounced");
        });
    });

    it("clears existing timeout", () => {
        jest.useFakeTimers();
        const onSearchChangeMock = jest.fn();
        const onImmediateChangeMock = jest.fn();

        const { getByPlaceholderText } = render(
            <SearchBar
                value=""
                onSearchChange={onSearchChangeMock}
                onImmediateChange={onImmediateChangeMock}
            />
        );

        const inputElement = getByPlaceholderText("Search...");
        fireEvent.change(inputElement, { target: { value: "test" } });

        // Ensure the existing timeout is cleared
        fireEvent.change(inputElement, { target: { value: "new value" } });

        expect(onSearchChangeMock).not.toHaveBeenCalled();
        expect(onImmediateChangeMock).toHaveBeenCalledWith("new value");
    });
});
