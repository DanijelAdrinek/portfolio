import React from 'react';
import { render, screen } from '@testing-library/react';
import AuditResults from '..';
import { IDs } from '@/constants';

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