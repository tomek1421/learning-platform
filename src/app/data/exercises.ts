import { CodeExerciseDto } from "../types/CodeExerciseDto";
import { CodeOrderExerciseDto } from "../types/CodeOrderExercise";
import { MultipleChoiceExerciseDto } from "../types/MultipleChoiceExerciseDto";

export const csHelloWorldExercise: CodeExerciseDto = {
  id: 'cs-hello-world',
  type: 'code',
  instruction: 'Complete the missing code',
  correctOptionId: 1,
  options: [
    {
      id: 1,
      content: [{ type: 'or', value: 'World' }],
    },
    {
      id: 2,
      content: [{ type: 'bl', value: 'Tom' }],
    },
    {
      id: 3,
      content: [{ type: 'gr', value: 'Hello' }],
    },
    {
      id: 4,
      content: [{ type: 'or', value: 'Bye Bye' }],
    },
  ],
  lines: [
    {
      before: [
        { type: 'bl', value: 'public ' },
        { type: 'bl', value: 'static ' },
        { type: 'bl', value: 'void ' },
        { type: 'yl', value: 'Main' },
        { type: 'wh', value: '()' },
      ],
    },
    {
      before: [{ type: 'wh', value: '{' }],
    },
    {
      indent: 1,
      before: [
        { type: 'yl', value: 'Console' },
        { type: 'wh', value: '.' },
        { type: 'gr', value: 'WriteLine' },
        { type: 'wh', value: '(' },
        { type: 'or', value: '"Hello ' },
      ],
      gap: true,
      after: [
        { type: 'or', value: '"' },
        { type: 'wh', value: ');' },
      ],
    },
    {
      indent: 1,
      before: [
        { type: 'yl', value: 'Console' },
        { type: 'wh', value: '.' },
        { type: 'gr', value: 'WriteLine' },
        { type: 'wh', value: '(' },
        { type: 'or', value: '"Hello World"' },
        { type: 'wh', value: ');' },
      ],
    },
    {
      before: [{ type: 'wh', value: '}' }],
    },
  ],
};

export const multipleChoiceExercise: MultipleChoiceExerciseDto = {
  id: "cs-hello-002",
  type: 'multiple',
  instruction: [
    {
      content: [
        { token: "What is the output of this C# code? V2" },
        {
          token: [
            { type: "yl", value: "Console" },
            { type: "wh", value: "." },
            { type: "gr", value: "WriteLine" },
            { type: "wh", value: "(" },
            { type: "or", value: "\"Hello World!\"" },
            { type: "wh", value: ")" },
            { type: "wh", value: ";" }
          ]
        },
        {
          token: [
            { type: "yl", value: "Console" },
            { type: "wh", value: "." },
            { type: "gr", value: "WriteLine" },
          ]
        },
        {
          token: [
            { type: "yl", value: "Console" },
            { type: "wh", value: "." },
            { type: "gr", value: "WriteLine" },
          ]
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
            { token: "Hello World!" },
            {
              token: [
                { type: "yl", value: "Console" },
                { type: "wh", value: "." },
                { type: "gr", value: "WriteLine" },
                { type: "wh", value: "(" },
                { type: "or", value: "\"Hello World!\"" },
                { type: "wh", value: ")" },
                { type: "wh", value: ";" }
              ]
            },
            { token: "Hello World! ala am akota kot ma ale" },
            {
              token: [
                { type: "yl", value: "Console" },
                { type: "wh", value: "." },
                { type: "gr", value: "WriteLine" },
                { type: "wh", value: "(" },
                { type: "or", value: "\"Hello World!\"" },
                { type: "wh", value: ")" },
                { type: "wh", value: ";" }
              ]
            },
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "Hello" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "Compilation error" }
          ]
        }
      ]
    }
  ]
};

export const multipleChoiceExercise2: MultipleChoiceExerciseDto = {
  id: "cs-hello-003",
  type: 'multiple',
  instruction: [
    {
      content: [
        { token: "What is the output of this C# code?" },
      ]
    }
  ],
  lines: [
    {
      tokens: [
        { type: 'bl', value: 'public ' },
        { type: 'bl', value: 'static ' },
        { type: 'bl', value: 'void ' },
        { type: 'yl', value: 'Main' },
        { type: 'wh', value: '()' },
      ],
    }
  ],
  correctOptionId: 3,
  options: [
    {
      id: 1,
      answer: [
        {
          content: [
            { token: "Hello World!" },
            {
              token: [
                { type: "yl", value: "Console" },
                { type: "wh", value: "." },
                { type: "gr", value: "WriteLine" },
                { type: "wh", value: "(" },
                { type: "or", value: "\"Hello World!\"" },
                { type: "wh", value: ")" },
                { type: "wh", value: ";" }
              ]
            },
            { token: "Hello World! ala am akota kot ma ale" },
            {
              token: [
                { type: "yl", value: "Console" },
                { type: "wh", value: "." },
                { type: "gr", value: "WriteLine" },
                { type: "wh", value: "(" },
                { type: "or", value: "\"Hello World!\"" },
                { type: "wh", value: ")" },
                { type: "wh", value: ";" }
              ]
            },
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "Hello" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "Compilation error YYYy" }
          ]
        }
      ]
    }
  ]
};

export const codeOrderExercise: CodeOrderExerciseDto = {
  id: 'exercise-201',
  type: 'order',
  instruction: 'Put the tokens in the correct order to print "Hello World":',
  options: [
    { id: 1, content: [{ type: 'bl', value: 'console' }] },
    { id: 2, content: [{ type: 'pk', value: '.' }] },
    { id: 3, content: [{ type: 'gr', value: 'log' }] },
    { id: 4, content: [{ type: 'wh', value: '(' }] },
    { id: 5, content: [{ type: 'or', value: '"Hello World"' }] },
    { id: 6, content: [{ type: 'wh', value: ');' }] },
  ],
  correctOptionsIdOrder: [1, 2, 3, 4, 5, 6]
};