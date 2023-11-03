import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
    it("renders correctly with previous and next buttons", () => {
        const onPageChangeMock = jest.fn();
        const { container, getByText } = render(
            <Pagination currentPage={5} totalPosts={50} postsPerPage={10} onPageChange={onPageChangeMock} />
        );

        const previousButton = getByText("Previous");
        const nextButton = getByText("Next");

        expect(container).toMatchSnapshot(); // Snapshot testing

        fireEvent.click(previousButton);
        fireEvent.click(nextButton);

        expect(onPageChangeMock).toHaveBeenCalledTimes(2);
        expect(onPageChangeMock).toHaveBeenCalledWith(4); // Previous button should call onPageChange with currentPage - 1
        expect(onPageChangeMock).toHaveBeenCalledWith(6); // Next button should call onPageChange with currentPage + 1
    });

    it("disables the previous button when on the first page", () => {
        const onPageChangeMock = jest.fn();
        const { getByText } = render(
            <Pagination currentPage={1} totalPosts={50} postsPerPage={10} onPageChange={onPageChangeMock} />
        );

        const previousButton = getByText("Previous");
        const nextButton = getByText("Next");

        expect(previousButton).toBeDisabled();
        expect(nextButton).not.toBeDisabled();
    });

    it("disables the next button when on the last page or when there are no posts", () => {
        const onPageChangeMock = jest.fn();
        const { getByText } = render(
            <Pagination currentPage={5} totalPosts={50} postsPerPage={10} onPageChange={onPageChangeMock} />
        );

        const previousButton = getByText("Previous");
        const nextButton = getByText("Next");

        expect(previousButton).not.toBeDisabled();
        expect(nextButton).not.toBeDisabled();

        // Simulate being on the last page
        render(
            <Pagination currentPage={5} totalPosts={50} postsPerPage={10} onPageChange={onPageChangeMock} />
        );

        expect(nextButton).toBeDisabled();

        // Simulate having no posts
        render(
            <Pagination currentPage={1} totalPosts={0} postsPerPage={10} onPageChange={onPageChangeMock} />
        );

        expect(nextButton).toBeDisabled();
    });

    it("calls onPageChange when a page number button is clicked", () => {
        const onPageChangeMock = jest.fn();
        const { getByText } = render(
            <Pagination currentPage={3} totalPosts={50} postsPerPage={10} onPageChange={onPageChangeMock} />
        );

        const pageButton = getByText("4"); // Assuming 4 is one of the page numbers

        fireEvent.click(pageButton);

        expect(onPageChangeMock).toHaveBeenCalledTimes(1);
        expect(onPageChangeMock).toHaveBeenCalledWith(4); // The page button should call onPageChange with its page number
    });
});
