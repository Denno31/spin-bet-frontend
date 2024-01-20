import { getConicGradientDeg } from '../../utils/utils';

describe('FeedsSectionMatchesHeader component', () => {
    it('highlights the active filter button', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="filter-button"]').should('exist');

        cy.get('button[data-testid="filter-button"]').first().should('have.css', 'color', 'rgb(68, 210, 92)');

        cy.get('button[data-testid="filter-button"]').eq(1).click();

        cy.wait(1000);

        cy.get('button[data-testid="filter-button"]').eq(1).should('have.css', 'color', 'rgb(68, 210, 92)');
    });
});

describe('FeedsSectionMatchesHeader component', () => {
    it('changes matches data when filter buttons are clicked', () => {
        cy.visit('http://localhost:3000');

        cy.get('button[data-testid="filter-button"]').first().click();

        cy.wait(1000);

        cy.get('[data-testid="matches-list"]').should('have.length.greaterThan', 0);
    });
});

describe('MatchProgress component', () => {
    it('renders without errors', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="match-progress"]').should('exist');
    });
});

describe('MatchProgress component', () => {
    it('applies conic gradient based on match status', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="outer-box"]').should('have.css', 'background').and('include', 'conic-gradient');
    });
});

describe('getConicGradientDeg function', () => {
    it('calculates conic gradient degree correctly for in-progress status', () => {
        const liveStatusType = 'inprogress';
        const liveStatus = '45';

        const result = getConicGradientDeg(liveStatusType, liveStatus);

        expect(result).to.equal((Number(liveStatus) * 360) / 90);
    });

    it('calculates conic gradient degree correctly for finished status', () => {
        const liveStatusType = 'finished';
        const liveStatus = undefined;

        const result = getConicGradientDeg(liveStatusType, liveStatus);
        expect(result).to.equal(360);
    });

    it('calculates conic gradient degree correctly for default status', () => {
        const liveStatusType = undefined;
        const liveStatus = undefined;

        const result = getConicGradientDeg(liveStatusType, liveStatus);

        expect(result).to.equal(0);
    });
});
