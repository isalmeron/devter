import styled from 'styled-components'

const gridColumns = 12;

function createColumns() {
    let cssRules = ''

    for (let i = 1; i <= gridColumns; i += 1) {
        cssRules += `
            .col-${i} {
                grid-column: span ${i};
            }
        `;
    }
    return cssRules;
};

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 16px;

    ${createColumns()};
`

function Grid({ children }) {
    return (
        <GridContainer>
            {children}
        </GridContainer>
    )
}

export default Grid;