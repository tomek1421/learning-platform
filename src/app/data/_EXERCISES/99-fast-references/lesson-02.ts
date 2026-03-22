import { CodeExerciseDto } from "../../../types/CodeExerciseDto";
import { MultipleChoiceExerciseDto } from "../../../types/MultipleChoiceExerciseDto";

export const multiple01: MultipleChoiceExerciseDto = {
  id: "generic-constraint-reality",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Which type is INVALID?" }
      ]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "bl", value: "class" },
        { type: "wh", value: " " },
        { type: "gr", value: "Test" },
        { type: "wh", value: "<" },
        { type: "gr", value: "T" },
        { type: "wh", value: ">" },
        { type: "wh", value: " " },
        { type: "bl", value: "where" },
        { type: "wh", value: " " },
        { type: "gr", value: "T" },
        { type: "wh", value: " " },
        { type: "wh", value: ":" },
        { type: "wh", value: " " },
        { type: "bl", value: "struct" }
      ]
    },
    {
      tokens: [{ type: "wh", value: "{" }]
    },
    {
      indent: 1,
      tokens: [
        { type: "bl", value: "public" },
        { type: "wh", value: " " },
        { type: "gr", value: "T" },
        { type: "wh", value: " " },
        { type: "wh", value: "Value" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [{ type: "wh", value: "}" }]
    }
  ],

  correctOptionId: 3,

  options: [
    {
      id: 1,
      answer: [
        {
          content: [
            {
              token: [{ type: "bl", value: "int" }]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            {
              token: [{ type: "gr", value: "DateTime" }]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            {
              token: [
                { type: "bl", value: "int" },
                { type: "wh", value: "?" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            {
              token: [{ type: "bl", value: "double" }]
            }
          ]
        }
      ]
    }
  ]
};

export const multiple02: MultipleChoiceExerciseDto = {
  id: "record-value-equality",
  type: "multiple",

  instruction: [
    {
      content: [{ token: "What will be printed to the console?" }]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "bl", value: "record" },
        { type: "wh", value: " " },
        { type: "gr", value: "Person" },
        { type: "wh", value: "(" },
        { type: "bl", value: "string" },
        { type: "wh", value: " " },
        { type: "wh", value: "Name" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [
        { type: "bl", value: "var" },
        { type: "wh", value: " " },
        { type: "wh", value: "p1" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "bl", value: "new" },
        { type: "wh", value: " " },
        { type: "gr", value: "Person" },
        { type: "wh", value: "(" },
        { type: "or", value: "\"Tom\"" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [
        { type: "bl", value: "var" },
        { type: "wh", value: " " },
        { type: "wh", value: "p2" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "bl", value: "new" },
        { type: "wh", value: " " },
        { type: "gr", value: "Person" },
        { type: "wh", value: "(" },
        { type: "or", value: "\"Tom\"" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [
        { type: "gr", value: "Console" },
        { type: "wh", value: "." },
        { type: "yl", value: "WriteLine" },
        { type: "wh", value: "(" },
        { type: "wh", value: "p1" },
        { type: "wh", value: " " },
        { type: "wh", value: "==" },
        { type: "wh", value: " " },
        { type: "wh", value: "p2" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
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
            { token: [{ type: "bl", value: "False" }] }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: [{ type: "bl", value: "True" }] }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [{ token: "Compile error" }]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [{ token: "Reference comparison" }]
        }
      ]
    }
  ]
};

export const multiple03: MultipleChoiceExerciseDto = {
  id: "generic-default-return",
  type: "multiple",

  instruction: [
    {
      content: [{ token: "Generic Default Value" }]
    },
    {
      content: [{ token: "What is returned for Create<string>()?" }]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "bl", value: "static" },
        { type: "wh", value: " " },
        { type: "gr", value: "T" },
        { type: "wh", value: " " },
        { type: "yl", value: "Create" },
        { type: "wh", value: "<" },
        { type: "gr", value: "T" },
        { type: "wh", value: ">" },
        { type: "wh", value: "(" },
        { type: "wh", value: ")" }
      ]
    },
    {
      tokens: [{ type: "wh", value: "{" }]
    },
    {
      indent: 1,
      tokens: [
        { type: "bl", value: "return" },
        { type: "wh", value: " " },
        { type: "bl", value: "default" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [{ type: "wh", value: "}" }]
    }
  ],

  correctOptionId: 2,

  options: [
    {
      id: 1,
      answer: [
        {
          content: [{ token: "Empty string" }]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            {
              token: [{ type: "bl", value: "null" }]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [{ token: "Exception" }]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [{ token: "New string instance" }]
        }
      ]
    }
  ]
};

export const multiple04: MultipleChoiceExerciseDto = {
  id: "class-reference-equality",
  type: "multiple",

  instruction: [
    {
      content: [{ token: "What will be printed to the console?" }]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "bl", value: "class" },
        { type: "wh", value: " " },
        { type: "gr", value: "Person" }
      ]
    },
    {
      tokens: [{ type: "wh", value: "{" }]
    },
    {
      indent: 1,
      tokens: [
        { type: "bl", value: "public" },
        { type: "wh", value: " " },
        { type: "bl", value: "string" },
        { type: "wh", value: " " },
        { type: "wh", value: "Name" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [{ type: "wh", value: "}" }]
    },
    {
      tokens: [
        { type: "bl", value: "var" },
        { type: "wh", value: " " },
        { type: "wh", value: "p1" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "bl", value: "new" },
        { type: "wh", value: " " },
        { type: "gr", value: "Person" },
        { type: "wh", value: " " },
        { type: "wh", value: "{" },
        { type: "wh", value: " " },
        { type: "wh", value: "Name" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "or", value: "\"Tom\"" },
        { type: "wh", value: " " },
        { type: "wh", value: "}" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [
        { type: "bl", value: "var" },
        { type: "wh", value: " " },
        { type: "wh", value: "p2" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "bl", value: "new" },
        { type: "wh", value: " " },
        { type: "gr", value: "Person" },
        { type: "wh", value: " " },
        { type: "wh", value: "{" },
        { type: "wh", value: " " },
        { type: "wh", value: "Name" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "or", value: "\"Tom\"" },
        { type: "wh", value: " " },
        { type: "wh", value: "}" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [
        { type: "gr", value: "Console" },
        { type: "wh", value: "." },
        { type: "yl", value: "WriteLine" },
        { type: "wh", value: "(" },
        { type: "wh", value: "p1" },
        { type: "wh", value: " " },
        { type: "wh", value: "==" },
        { type: "wh", value: " " },
        { type: "wh", value: "p2" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
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
            { token: [{ type: "bl", value: "True" }] }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: [{ type: "bl", value: "False" }] }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [{ token: "Compile error" }]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [{ token: "Depends on runtime" }]
        }
      ]
    }
  ]
};

export const multiple05: MultipleChoiceExerciseDto = {
  id: "linq-deferred-execution",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "What is the output of the following code?" }
      ]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "bl", value: "var" },
        { type: "wh", value: " " },
        { type: "lb", value: "numbers" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "bl", value: "new" },
        { type: "wh", value: " " },
        { type: "gr", value: "List" },
        { type: "wh", value: "<" },
        { type: "bl", value: "int" },
        { type: "wh", value: ">" },
        { type: "wh", value: " " },
        { type: "wh", value: "{" },
        { type: "bl", value: "1" },
        { type: "wh", value: "," },
        { type: "bl", value: "2" },
        { type: "wh", value: "," },
        { type: "bl", value: "3" },
        { type: "wh", value: "}" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [
        { type: "bl", value: "var" },
        { type: "wh", value: " " },
        { type: "lb", value: "query" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "lb", value: "numbers" },
        { type: "wh", value: "." },
        { type: "yl", value: "Where" },
        { type: "wh", value: "(" },
        { type: "lb", value: "x" },
        { type: "wh", value: " " },
        { type: "wh", value: "=>" },
        { type: "wh", value: " " },
        { type: "lb", value: "x" },
        { type: "wh", value: " " },
        { type: "wh", value: ">" },
        { type: "wh", value: " " },
        { type: "bl", value: "1" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [
        { type: "lb", value: "numbers" },
        { type: "wh", value: "." },
        { type: "yl", value: "Add" },
        { type: "wh", value: "(" },
        { type: "bl", value: "4" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [
        { type: "gr", value: "Console" },
        { type: "wh", value: "." },
        { type: "yl", value: "WriteLine" },
        { type: "wh", value: "(" },
        { type: "lb", value: "query" },
        { type: "wh", value: "." },
        { type: "yl", value: "Count" },
        { type: "wh", value: "(" },
        { type: "wh", value: ")" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
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
            { token: [{ type: "bl", value: "2" }] }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: [{ type: "bl", value: "3" }] }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: [{ type: "bl", value: "4" }] }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [{ token: "Exception" }]
        }
      ]
    }
  ]
};

export const multiple06: MultipleChoiceExerciseDto = {
  id: "yield-deferred-execution",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "When does \"Start\" get printed?" }
      ]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "gr", value: "IEnumerable" },
        { type: "wh", value: "<" },
        { type: "bl", value: "int" },
        { type: "wh", value: ">" },
        { type: "wh", value: " " },
        { type: "yl", value: "Get" },
        { type: "wh", value: "(" },
        { type: "wh", value: ")" },
        { type: "wh", value: " {" }
      ]
    },
    {
      indent: 1,
      tokens: [
        { type: "gr", value: "Console" },
        { type: "wh", value: "." },
        { type: "yl", value: "WriteLine" },
        { type: "wh", value: "(" },
        { type: "or", value: "\"Start\"" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
      ]
    },
    {
      indent: 1,
      tokens: [
        { type: "bl", value: "yield" },
        { type: "wh", value: " " },
        { type: "bl", value: "return" },
        { type: "wh", value: " " },
        { type: "bl", value: "1" },
        { type: "wh", value: ";" }
      ]
    },
    {
      indent: 1,
      tokens: [
        { type: "bl", value: "yield" },
        { type: "wh", value: " " },
        { type: "bl", value: "return" },
        { type: "wh", value: " " },
        { type: "bl", value: "2" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [{ type: "wh", value: "}" }]
    }
  ],

  correctOptionId: 2,

  options: [
    {
      id: 1,
      answer: [
        {
          content: [{ token: "Method call" }]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [{ token: "First enumeration" }]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [{ token: "Compilation" }]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [{ token: "Program start" }]
        }
      ]
    }
  ]
};

export const multiple07: MultipleChoiceExerciseDto = {
  id: "delegate-creation",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "What is created by the following statement?" }
      ]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "gr", value: "Action" },
        { type: "wh", value: " " },
        { type: "lb", value: "a" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "yl", value: "Print" },
        { type: "wh", value: ";" }
      ]
    }
  ],

  correctOptionId: 2,

  options: [
    {
      id: 1,
      answer: [
        {
          content: [{ token: "Method copy" }]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [{ token: "Delegate object" }] // now plain text
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [{ token: "Interface instance" }]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [{ token: "Lambda closure" }]
        }
      ]
    }
  ]
};

export const multiple08: MultipleChoiceExerciseDto = {
  id: "event-vs-delegate",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Why use an event instead of a public delegate?" }
      ]
    }
  ],

  correctOptionId: 2,

  options: [
    {
      id: 1,
      answer: [
        { content: [{ token: "Faster execution" }] }
      ]
    },
    {
      id: 2,
      answer: [
        { content: [{ token: "Prevent external invocation/reset" }] }
      ]
    },
    {
      id: 3,
      answer: [
        { content: [{ token: "Required by CLR" }] }
      ]
    },
    {
      id: 4,
      answer: [
        { content: [{ token: "Allows async" }] }
      ]
    }
  ]
};

export const multiple09: MultipleChoiceExerciseDto = {
  id: "switch-pattern-matching",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "What is the output of the following code?" }
      ]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "bl", value: "object" },
        { type: "wh", value: " " },
        { type: "lb", value: "x" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "bl", value: "5" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [
        { type: "bl", value: "var" },
        { type: "wh", value: " " },
        { type: "lb", value: "result" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "lb", value: "x" },
        { type: "wh", value: " " },
        { type: "pk", value: "switch" },
        { type: "wh", value: " " },
        { type: "wh", value: "{" }
      ]
    },
    {
      indent: 1,
      tokens: [
        { type: "bl", value: "int" },
        { type: "wh", value: " " },
        { type: "lb", value: "n" },
        { type: "wh", value: " " },
        { type: "bl", value: "when" },
        { type: "wh", value: " " },
        { type: "lb", value: "n" },
        { type: "wh", value: " " },
        { type: "wh", value: ">" },
        { type: "wh", value: " " },
        { type: "bl", value: "3" },
        { type: "wh", value: " " },
        { type: "wh", value: "=>" },
        { type: "wh", value: " " },
        { type: "or", value: "\"Big\"" },
        { type: "wh", value: "," }
      ]
    },
    {
      indent: 1,
      tokens: [
        { type: "bl", value: "int" },
        { type: "wh", value: " " },
        { type: "wh", value: "=>" },
        { type: "wh", value: " " },
        { type: "or", value: "\"Small\"" },
        { type: "wh", value: "," }
      ]
    },
    {
      indent: 1,
      tokens: [
        { type: "wh", value: "_" },
        { type: "wh", value: " " },
        { type: "wh", value: "=>" },
        { type: "wh", value: " " },
        { type: "or", value: "\"Other\"" }
      ]
    },
    {
      tokens: [{ type: "wh", value: "}" }]
    }
  ],

  correctOptionId: 2,

  options: [
    { id: 1, answer: [{ content: [{ token: [ { type: "or", value: "\"Small\"" } ] }] }] },
    { id: 2, answer: [{ content: [{ token: [ { type: "or", value: "\"Big\"" } ] }] }] },
    { id: 3, answer: [{ content: [{ token: "Other" }] }] },
    { id: 4, answer: [{ content: [{ token: "Exception" }] }] }
  ]
};

export const multiple10: MultipleChoiceExerciseDto = {
  id: "pattern-matching-scope",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "What happens when trying to access a pattern variable outside its scope?" }
      ]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "bl", value: "object" },
        { type: "wh", value: " " },
        { type: "lb", value: "obj" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "or", value: "\"hello\"" },
        { type: "wh", value: ";" }
      ]
    },
    {
      tokens: [
        { type: "pk", value: "if" },
        { type: "wh", value: " " },
        { type: "wh", value: "(" },
        { type: "lb", value: "obj" },
        { type: "wh", value: " " },
        { type: "bl", value: "is" },
        { type: "wh", value: " " },
        { type: "bl", value: "string" },
        { type: "wh", value: " " },
        { type: "lb", value: "s" },
        { type: "wh", value: ")" },
        { type: "wh", value: "{" },
        { type: "wh", value: "}" }
      ]
    },
    {
      tokens: [
        { type: "gr", value: "Console" },
        { type: "wh", value: "." },
        { type: "yl", value: "WriteLine" },
        { type: "wh", value: "(" },
        { type: "lb", value: "s" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
      ]
    }
  ],

  correctOptionId: 2,

  options: [
    { id: 1, answer: [{ content: [{ token: "Prints hello" }] }] },
    { id: 2, answer: [{ content: [{ token: "Compile error" }] }] },
    { id: 3, answer: [{ content: [{ token: "null" }] }] },
    { id: 4, answer: [{ content: [{ token: "Runtime exception" }] }] }
  ]
};
