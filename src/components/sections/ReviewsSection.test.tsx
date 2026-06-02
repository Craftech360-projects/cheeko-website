import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ReviewsSection } from './ReviewsSection';

describe('ReviewsSection horizontal scroll', () => {
  it('renders a snap-scrolling row with more than four review cards', () => {
    render(<ReviewsSection />);

    const scrollRow = screen.getByTestId('reviews-scroll-row');
    const reviewCards = within(scrollRow).getAllByTestId('review-card');

    expect(scrollRow).toHaveClass('flex');
    expect(scrollRow).toHaveClass('overflow-x-auto');
    expect(scrollRow).toHaveClass('snap-x');
    expect(scrollRow).toHaveClass('snap-mandatory');
    expect(reviewCards.length).toBeGreaterThan(4);
    expect(screen.getByText(/Cheeko made story time easier/i)).toBeInTheDocument();
    expect(screen.getByText(/Aarav’s mom/i)).toBeInTheDocument();
  });
});
