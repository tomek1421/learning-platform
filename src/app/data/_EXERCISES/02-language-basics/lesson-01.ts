import { MultipleChoiceExerciseDto } from "../../../types/MultipleChoiceExerciseDto";

export const multiple01: MultipleChoiceExerciseDto = {
  id: "MC-01",
  type: "multiple",

  instruction: [
    {
      content: [
        {
          token: "What is the main purpose of covariance and contravariance?"
        }
      ]
    }
  ],

  correctOptionId: 2,

  options: [
    {
      id: 1,
      answer: [
        {
          content: [
            { token: "Improve performance" }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "Allow safe type substitution in generic types" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "Reduce memory usage" }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            { token: "Replace inheritance" }
          ]
        }
      ]
    }
  ]
};