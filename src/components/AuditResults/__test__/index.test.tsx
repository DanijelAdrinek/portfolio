import React from 'react';
import { render, screen } from '@testing-library/react';
import AuditResults from '..';
import { IDs } from '@/constants';
import { LIGHTHOUSE_DATA } from '@/data';

it("Should render AuditResults to DOM", () => {
    render(<AuditResults />);

    const AuditResultsComponent = document.getElementById(IDs.statistics);

    expect(AuditResultsComponent).toBeDefined();
});

it("Should make AuditResults visible to user", () => {
    render(<AuditResults />);

    const AuditResultsComponent = document.getElementById(IDs.statistics);

    expect(AuditResultsComponent).toBeVisible();
});

describe('LIGHTHOUSE_DATA', () => {

  vitest.mock('@/data', () => ({
    LIGHTHOUSE_DATA: [
      { title: 'Performance', percentage: 90, children: 'Good' },
      { title: 'Accessibility', percentage: 80, children: 'Needs Improvement' },
      { title: 'Best Practices', percentage: 85, children: 'Fair' },
      { title: 'SEO', percentage: 95, children: 'Excellent' },
    ],
  }));

  it('renders all statistics from LIGHTHOUSE_DATA', () => {
    render(<AuditResults />);

    LIGHTHOUSE_DATA.forEach(score => {
      expect(screen.getByText(score.title)).toBeInTheDocument();
      expect(screen.getByText(score.percentage.toString())).toBeInTheDocument();
      expect(screen.getByText(score.children)).toBeInTheDocument();
    });
  });

  it('Renders statistics from LIGHTHOUSE_DATA and makes sure they are visible', () => {
    render(<AuditResults />);

    LIGHTHOUSE_DATA.forEach(score => {
      expect(screen.getByText(score.title)).toBeVisible();
      expect(screen.getByText(score.percentage.toString())).toBeVisible();
      expect(screen.getByText(score.children)).toBeVisible();
    });
  });
});