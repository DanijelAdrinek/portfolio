  import React from "react";
  import FooterSectionLinks from "../FooterSectionLinks";
  import { render, screen } from "@testing-library/react";
  import { IDs } from "@/constants";

  beforeEach(() => {
    render(<FooterSectionLinks />);
  });

  it('Should render FooterSectionLinks component', () => {
    const footerSectionLinksComponent = screen.getByTestId('footer-section-links');

    expect(footerSectionLinksComponent).toBeDefined();
  });

  it('Should render FooterSectionLinks component and make it visible to the user', () => {
    const footerSectionLinksComponent = screen.getByTestId('footer-section-links');

    expect(footerSectionLinksComponent).toBeVisible();
  });

  describe('IDs', () => {

    vitest.mock('@/constants', () => ({
      IDs: {
        intro: 'Intro',
        info: 'Info',
        code: 'Code',
        statistics: 'Statistics',
        contactForm: 'Contact Form'
      },
    }));

    it('Should render all of the IDs', () => {
      const IDValues = Object.values(IDs);

      IDValues.forEach(ID => {
        expect(screen.getByText(ID)).toBeDefined();
      });
    });

    it('Should render all of the IDs and make them visible to the user', () => {
      const IDValues = Object.values(IDs);

      IDValues.forEach(ID => {
        expect(screen.getByText(ID)).toBeVisible();
      });

    });
  });