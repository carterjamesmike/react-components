import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

//Queries and mutations
import { GET_POLL } from "../utils/queries";
import { ADD_VOTE } from "../utils/mutations";

const Poll = () => {
  //Query to get the poll data
  const { loading, data, error } = useQuery(GET_POLL);
  //State to show the graph after voting
  const [showGraph, setShowGraph] = useState(false);
  //Mutation to add a vote
  const [addVote, { error: mutationError }] = useMutation(ADD_VOTE);

  //Error and loading handling
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (mutationError) {
    return <div>Error: {mutationError.message}</div>;
  }

  //Poll data to display and graph
  const poll = data?.polls;
  const pollData = poll[0].pollOptions.map((option) => {
    return { x: option.option, y: option.votes };
  });

  //Function to increase the vote by 1
  const onClick = async (e) => {
    e.preventDefault();
    setShowGraph(true);
    try {
      const { data } = await addVote({
        variables: {
          option: e.target.value,
          pollId: poll[0]._id,
        },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="bg-gray-200 rounded-lg shadow-md p-6 ml-[100px] mr-[100px]">
      {/* Displays the poll upon page load */}
      {showGraph === false ? (
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold underline pb-2 text-center">
            {poll[0].pollQuestion}
          </h2>
          {poll[0].pollOptions.map((option) => (
            <div key={option.option}>
              <input
                onClick={onClick}
                type="radio"
                name="poll"
                value={option.option}
              />
              <label className="p-2">{option.option}</label>
            </div>
          ))}
        </div>
      ) : (
        // Displays the graph after voting
        <div className="h-[500px] w-[500px]">
          {/* Victory Chart */}
          <VictoryChart
            padding={{
              left: 210,
              right: 1,
              top: 30,
              bottom: 50,
            }}
          >
            <VictoryAxis tickValues={[1, 2, 3, 4, 5]} />
            <VictoryAxis dependentAxis />
            <VictoryBar horizontal data={pollData} />
          </VictoryChart>
        </div>
      )}
    </div>
    </>

  );
};

export default Poll;
