import { gql } from '@apollo/client';

//Collects all polls
export const GET_POLL = gql`
    query polls {
        polls {
            _id
            pollQuestion
            pollOptions {
                option
                votes
            }
        }
    }
`;

