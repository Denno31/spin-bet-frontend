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
        cy.visit('http://localhost:3000'); // Adjust the URL as needed
        cy.get('[data-testid="match-progress"]').should('exist');
    });
});

describe('MatchProgress component', () => {
    it('applies conic gradient based on match status', () => {
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="outer-box"]').should('have.css', 'background').and('include', 'conic-gradient');
    });
});
