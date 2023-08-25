import { render, screen } from '@testing-library/react';
import ExpensesSectionDashboard from './ExpensesSectionDashboard';

describe('ExpensesSectionDashboard component', () => {
  test('renders section title', () => {
    render(<ExpensesSectionDashboard />);

    const sectionTitle = screen.getByText('DESPESAS');
    expect(sectionTitle).toBeInTheDocument();
  });

  test('renders total expenses value', () => {
    render(<ExpensesSectionDashboard />);

    const totalValue = screen.getByText('R$ -800,00');
    expect(totalValue).toBeInTheDocument();
  });

  test('renders search input', () => {
    render(<ExpensesSectionDashboard />);

    const searchInput = screen.getByPlaceholderText('busque uma despesa');
    expect(searchInput).toBeInTheDocument();
  });

});
