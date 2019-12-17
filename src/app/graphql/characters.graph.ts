import gql from 'graphql-tag';

export const CharactersQuery = gql`
    query {
        characters {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                type
                gender
                image
            }
        }
    }
`;




