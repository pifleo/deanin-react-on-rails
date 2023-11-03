import { render, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
    const currentPage = 1;
    const totalPosts = 100;
    const postsPerPage = 10;
    const onPageChange = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly', () => {
        const { container } = render(
            <Pagination
                currentPage={currentPage}
                totalPosts={totalPosts}
                postsPerPage={postsPerPage}
                onPageChange={onPageChange}
            />
        );

        // Check that the component renders without errors
        expect(container).toBeTruthy();
    });

    it('disables "Previous" button on the first page', () => {
        const { getByText } = render(
            <Pagination
                currentPage={currentPage}
                totalPosts={totalPosts}
                postsPerPage={postsPerPage}
                onPageChange={onPageChange}
            />
        );

        const previousButton = getByText('Previous');
        fireEvent.click(previousButton);

        expect(onPageChange).not.toHaveBeenCalled();
    });

    it('enables "Previous" button on a page other than the first page', () => {
        const { getByText } = render(
            <Pagination
                currentPage={2}
                totalPosts={totalPosts}
                postsPerPage={postsPerPage}
                onPageChange={onPageChange}
            />
        );

        const previousButton = getByText('Previous');
        fireEvent.click(previousButton);

        expect(onPageChange).toHaveBeenCalledWith(1);
    });

    it('disables "Next" button on the last page', () => {
        const { getByText } = render(
            <Pagination
                currentPage={10}
                totalPosts={100}
                postsPerPage={10}
                onPageChange={onPageChange}
            />
        );

        const nextButton = getByText('Next');
        // console.log(nextButton.disabled); // Log the disabled state of the button
        fireEvent.click(nextButton);
        // console.log(onPageChange.mock.calls.length); // Log the number of times onPageChange was called

        expect(onPageChange.mock.calls.length).toBe(0); // Ensure onPageChange was not called
        expect(nextButton.disabled).toBe(true); // Ensure the button is disabled
    });

    it('enables "Next" button on a page other than the last page', () => {
        const { getByText } = render(
            <Pagination
                currentPage={5}
                totalPosts={100}
                postsPerPage={10}
                onPageChange={onPageChange}
            />
        );

        const nextButton = getByText('Next');
        fireEvent.click(nextButton);

        expect(onPageChange).toHaveBeenCalledWith(6);
    });

    it('displays the correct page numbers with ellipsis when totalPages > 10', () => {
        const { getByText } = render(
            <Pagination
                currentPage={7}
                totalPosts={101}
                postsPerPage={10}
                onPageChange={onPageChange}
            />
        );

        // Check that the component displays the correct page numbers and ellipsis
        expect(getByText('1')).toBeInTheDocument();
        expect(getByText('...')).toBeInTheDocument();
        expect(getByText('4')).toBeInTheDocument();
        expect(getByText('5')).toBeInTheDocument();
        expect(getByText('6')).toBeInTheDocument();
        expect(getByText('7')).toBeInTheDocument();
        expect(getByText('8')).toBeInTheDocument();
        expect(getByText('9')).toBeInTheDocument();
        expect(getByText('10')).toBeInTheDocument();
        expect(getByText('Next')).toBeInTheDocument();
    });
});
