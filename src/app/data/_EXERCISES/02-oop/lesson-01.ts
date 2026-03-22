import { CodeExerciseDto } from "../../../types/CodeExerciseDto";
import { MatchPairsExerciseDto } from "../../../types/MatchPairsExerciseDto";
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

export const multiple02: MultipleChoiceExerciseDto = {
  id: "MC-02",
  type: "multiple",

  instruction: [
    {
      content: [
        {
          token: "Covariance allows:"
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
            { token: "Assigning base type to derived type" }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "Assigning derived type to base type" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "Converting value types" }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            { token: "Casting automatically" }
          ]
        }
      ]
    }
  ]
};

export const multiple03: MultipleChoiceExerciseDto = {
  id: "MC-03",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Which assignment is valid for the following code?" }
      ]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "gr", value: "IEnumerable" },
        { type: "wh", value: "<" },
        { type: "bl", value: "string" },
        { type: "wh", value: ">" },
        { type: "wh", value: " " },
        { type: "lb", value: "strings" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "bl", value: "new" },
        { type: "wh", value: " " },
        { type: "gr", value: "List" },
        { type: "wh", value: "<" },
        { type: "bl", value: "string" },
        { type: "wh", value: ">" },
        { type: "wh", value: "(" },
        { type: "wh", value: ")" },
        { type: "wh", value: ";" }
      ]
    }
  ],

  correctOptionId: 1,

  options: [
    {
      id: 1,
      answer: [
        {
          content: [
            {
              token: [
                { type: "gr", value: "IEnumerable" },
                { type: "wh", value: "<" },
                { type: "bl", value: "object" },
                { type: "wh", value: ">" },
                { type: "wh", value: " " },
                { type: "lb", value: "objects" },
                { type: "wh", value: " " },
                { type: "wh", value: "=" },
                { type: "wh", value: " " },
                { type: "lb", value: "strings" },
                { type: "wh", value: ";" }
              ]
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
              token: [
                { type: "gr", value: "List" },
                { type: "wh", value: "<" },
                { type: "bl", value: "object" },
                { type: "wh", value: ">" },
                { type: "wh", value: " " },
                { type: "lb", value: "objects" },
                { type: "wh", value: " " },
                { type: "wh", value: "=" },
                { type: "wh", value: " " },
                { type: "lb", value: "strings" },
                { type: "wh", value: ";" }
              ]
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
                { type: "gr", value: "string" },
                { type: "wh", value: " " },
                { type: "lb", value: "objects" },
                { type: "wh", value: " " },
                { type: "wh", value: "=" },
                { type: "wh", value: " " },
                { type: "lb", value: "strings" },
                { type: "wh", value: ";" }
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
            { token: "None" }
          ]
        }
      ]
    }
  ]
};

export const multiple04: MultipleChoiceExerciseDto = {
  id: "MC-04",
  type: "multiple",

  instruction: [
    {
      content: [
        {
          token: "Why is "
        },
        {
          token: [
            { type: "gr", value: "List" },
            { type: "wh", value: "<" },
            { type: "gr", value: "T" },
            { type: "wh", value: ">" }
          ]
        },
        {
          token: " invariant?"
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
            { token: "Performance reasons" }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "It allows both reading and writing" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "CLR limitation" }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            { token: "Compiler bug" }
          ]
        }
      ]
    }
  ]
};

export const multiple05: MultipleChoiceExerciseDto = {
  id: "MC-05",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Which keyword enables covariance?" }
      ]
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
              token: [
                { type: "bl", value: "in" }
              ]
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
              token: [
                { type: "bl", value: "ref" }
              ]
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
                { type: "bl", value: "out" }
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
              token: [
                { type: "bl", value: "var" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const multiple06: MultipleChoiceExerciseDto = {
  id: "MC-06",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Contravariance allows:" }
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
            { token: "Derived → Base assignment" }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "Base → Derived assignment for inputs" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "Casting references" }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            { token: "Boxing values" }
          ]
        }
      ]
    }
  ]
};

export const multiple07: MultipleChoiceExerciseDto = {
  id: "MC-07",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Which assignment is valid?" }
      ]
    }
  ],

  lines: [
    {
      tokens: [
        { type: "gr", value: "Action" },
        { type: "wh", value: "<" },
        { type: "bl", value: "object" },
        { type: "wh", value: ">" },
        { type: "wh", value: " " },
        { type: "lb", value: "actObj" },
        { type: "wh", value: " " },
        { type: "wh", value: "=" },
        { type: "wh", value: " " },
        { type: "lb", value: "x" },
        { type: "wh", value: " " },
        { type: "wh", value: "=>" },
        { type: "wh", value: " " },
        { type: "wh", value: "{" },
        { type: "wh", value: "}" },
        { type: "wh", value: ";" }
      ]
    }
  ],

  correctOptionId: 1,

  options: [
    {
      id: 1,
      answer: [
        {
          content: [
            {
              token: [
                { type: "gr", value: "Action" },
                { type: "wh", value: "<" },
                { type: "bl", value: "string" },
                { type: "wh", value: ">" },
                { type: "wh", value: " " },
                { type: "lb", value: "actStr" },
                { type: "wh", value: " " },
                { type: "wh", value: "=" },
                { type: "wh", value: " " },
                { type: "lb", value: "actObj" },
                { type: "wh", value: ";" }
              ]
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
              token: [
                { type: "gr", value: "Action" },
                { type: "wh", value: "<" },
                { type: "bl", value: "int" },
                { type: "wh", value: ">" },
                { type: "wh", value: " " },
                { type: "lb", value: "actStr" },
                { type: "wh", value: " " },
                { type: "wh", value: "=" },
                { type: "wh", value: " " },
                { type: "lb", value: "actObj" },
                { type: "wh", value: ";" }
              ]
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
            { token: "Not allowed" }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            { token: "Runtime error" }
          ]
        }
      ]
    }
  ]
};

export const multiple08: MultipleChoiceExerciseDto = {
  id: "MC-08",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Which keyword enables contravariance?" }
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
            { token: [{ type: "bl", value: "out" }] }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: [{ type: "bl", value: "in" }] }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: [{ type: "bl", value: "ref" }] }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            { token: [{ type: "bl", value: "base" }] }
          ]
        }
      ]
    }
  ]
};

export const multiple09: MultipleChoiceExerciseDto = {
  id: "MC-09",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Covariance is safe because:" }
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
            { token: "It prevents reading" }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "It prevents writing" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "It prevents inheritance" }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            { token: "It prevents casting" }
          ]
        }
      ]
    }
  ]
};

export const multiple10: MultipleChoiceExerciseDto = {
  id: "MC-10",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "If a generic type BOTH reads and writes T, it must be:" }
      ]
    }
  ],

  correctOptionId: 3,

  options: [
    {
      id: 1,
      answer: [
        {
          content: [
            { token: "Covariant" }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "Contravariant" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "Invariant" }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            { token: "Dynamic" }
          ]
        }
      ]
    }
  ]
};

export const multiple11: MultipleChoiceExerciseDto = {
  id: "MC-11",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Which interface is covariant?" }
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
            {
              token: [
                { type: "bl", value: "interface" },
                { type: "wh", value: " " },
                { type: "gr", value: "IBox" },
                { type: "wh", value: "<" },
                { type: "gr", value: "T" },
                { type: "wh", value: ">" },
                { type: "wh", value: "{" },
                { type: "bl", value: "void" },
                { type: "wh", value: " " },
                { type: "yl", value: "Add" },
                { type: "wh", value: "(" },
                { type: "gr", value: "T" },
                { type: "wh", value: " " },
                { type: "lb", value: "item" },
                { type: "wh", value: ")" },
                { type: "wh", value: ";" },
                { type: "wh", value: "}" }
              ]
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
              token: [
                { type: "bl", value: "interface" },
                { type: "wh", value: " " },
                { type: "gr", value: "IBox" },
                { type: "wh", value: "<" },
                { type: "bl", value: "out" },
                { type: "wh", value: " " },
                { type: "gr", value: "T" },
                { type: "wh", value: ">" },
                { type: "wh", value: "{" },
                { type: "gr", value: "T" },
                { type: "wh", value: " " },
                { type: "yl", value: "Get" },
                { type: "wh", value: "(" },
                { type: "wh", value: ")" },
                { type: "wh", value: ";" },
                { type: "wh", value: "}" }
              ]
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
                { type: "bl", value: "interface" },
                { type: "wh", value: " " },
                { type: "gr", value: "IBox" },
                { type: "wh", value: "<" },
                { type: "bl", value: "in" },
                { type: "wh", value: " " },
                { type: "gr", value: "T" },
                { type: "wh", value: ">" },
                { type: "wh", value: "{" },
                { type: "bl", value: "void" },
                { type: "wh", value: " " },
                { type: "yl", value: "Set" },
                { type: "wh", value: "(" },
                { type: "gr", value: "T" },
                { type: "wh", value: " " },
                { type: "lb", value: "item" },
                { type: "wh", value: ")" },
                { type: "wh", value: ";" },
                { type: "wh", value: "}" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const multiple12: MultipleChoiceExerciseDto = {
  id: "MC-12",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Why can't covariant types accept method parameters of T?" }
      ]
    }
  ],

  correctOptionId: 3,

  options: [
    {
      id: 1,
      answer: [
        {
          content: [
            { token: "Syntax limitation" }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "Runtime limitation" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "Type safety violation" }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            { token: "Performance issue" }
          ]
        }
      ]
    }
  ]
};

export const multiple14: MultipleChoiceExerciseDto = {
  id: "MC-14",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Which is covariant?" }
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
            {
              token: [
                { type: "gr", value: "IList" },
                { type: "wh", value: "<" },
                { type: "gr", value: "T" },
                { type: "wh", value: ">" }
              ]
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
              token: [
                { type: "gr", value: "IEnumerable" },
                { type: "wh", value: "<" },
                { type: "gr", value: "T" },
                { type: "wh", value: ">" }
              ]
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
                { type: "gr", value: "Dictionary" },
                { type: "wh", value: "<" },
                { type: "gr", value: "TKey" },
                { type: "wh", value: "," },
                { type: "gr", value: "TValue" },
                { type: "wh", value: ">" }
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
              token: [
                { type: "gr", value: "List" },
                { type: "wh", value: "<" },
                { type: "gr", value: "T" },
                { type: "wh", value: ">" }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export const multiple15: MultipleChoiceExerciseDto = {
  id: "MC-15",
  type: "multiple",

  instruction: [
    {
      content: [
        { token: "Best scenario for using contravariance?" }
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
            { token: "Returning values" }
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "Consuming input parameters" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "Storing collections" }
          ]
        }
      ]
    },
    {
      id: 4,
      answer: [
        {
          content: [
            { token: "Serialization" }
          ]
        }
      ]
    }
  ]
};

export const match01: MatchPairsExerciseDto = {
  id: "MP-01",
  type: "match",

  instruction: [
    {
      content: [
        { token: "Match variance type with its meaning." }
      ]
    }
  ],

  options: [
    {
      id: 1,
      firstOption: {
        id: 1,
        answer: [
          {
            content: [
              { token: "Covariance" }
            ]
          }
        ]
      },
      secondOption: {
        id: 1,
        answer: [
          {
            content: [
              { token: "More derived output allowed" }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      firstOption: {
        id: 2,
        answer: [
          {
            content: [
              { token: "Contravariance" }
            ]
          }
        ]
      },
      secondOption: {
        id: 2,
        answer: [
          {
            content: [
              { token: "Less derived input allowed" }
            ]
          }
        ]
      }
    },
    {
      id: 3,
      firstOption: {
        id: 3,
        answer: [
          {
            content: [
              { token: "Invariance" }
            ]
          }
        ]
      },
      secondOption: {
        id: 3,
        answer: [
          {
            content: [
              { token: "Exact type required" }
            ]
          }
        ]
      }
    }
  ]
};

export const match02: MatchPairsExerciseDto = {
  id: "MP-02",
  type: "match",

  instruction: [
    {
      content: [
        { token: "Match keyword with its meaning." }
      ]
    }
  ],

  options: [
    {
      id: 1,
      firstOption: {
        id: 1,
        answer: [
          {
            content: [
              {
                token: [
                  { type: "bl", value: "out" }
                ]
              }
            ]
          }
        ]
      },
      secondOption: {
        id: 1,
        answer: [
          {
            content: [
              { token: "Output only (producer)" }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      firstOption: {
        id: 2,
        answer: [
          {
            content: [
              {
                token: [
                  { type: "bl", value: "in" }
                ]
              }
            ]
          }
        ]
      },
      secondOption: {
        id: 2,
        answer: [
          {
            content: [
              { token: "Input only (consumer)" }
            ]
          }
        ]
      }
    },
    {
      id: 3,
      firstOption: {
        id: 3,
        answer: [
          {
            content: [
              { token: "none" }
            ]
          }
        ]
      },
      secondOption: {
        id: 3,
        answer: [
          {
            content: [
              { token: "Read & write allowed" }
            ]
          }
        ]
      }
    }
  ]
};

export const match03: MatchPairsExerciseDto = {
  id: "MP-03",
  type: "match",

  instruction: [
    {
      content: [
        { token: "Match interface with its behavior." }
      ]
    }
  ],

  options: [
    {
      id: 1,
      firstOption: {
        id: 1,
        answer: [
          {
            content: [
              {
                token: [
                  { type: "gr", value: "IEnumerable" },
                  { type: "wh", value: "<" },
                  { type: "gr", value: "T" },
                  { type: "wh", value: ">" }
                ]
              }
            ]
          }
        ]
      },
      secondOption: {
        id: 1,
        answer: [
          {
            content: [
              { token: "Read-only sequence" }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      firstOption: {
        id: 2,
        answer: [
          {
            content: [
              {
                token: [
                  { type: "gr", value: "Action" },
                  { type: "wh", value: "<" },
                  { type: "gr", value: "T" },
                  { type: "wh", value: ">" }
                ]
              }
            ]
          }
        ]
      },
      secondOption: {
        id: 2,
        answer: [
          {
            content: [
              { token: "Consumes values" }
            ]
          }
        ]
      }
    },
    {
      id: 3,
      firstOption: {
        id: 3,
        answer: [
          {
            content: [
              {
                token: [
                  { type: "gr", value: "List" },
                  { type: "wh", value: "<" },
                  { type: "gr", value: "T" },
                  { type: "wh", value: ">" }
                ]
              }
            ]
          }
        ]
      },
      secondOption: {
        id: 3,
        answer: [
          {
            content: [
              { token: "Read and write collection" }
            ]
          }
        ]
      }
    }
  ]
};

export const match04: MatchPairsExerciseDto = {
  id: "MP-04",
  type: "match",

  instruction: [
    {
      content: [
        { token: "Match variance type with its safety principle." }
      ]
    }
  ],

  options: [
    {
      id: 1,
      firstOption: {
        id: 1,
        answer: [
          {
            content: [
              { token: "Covariant" }
            ]
          }
        ]
      },
      secondOption: {
        id: 1,
        answer: [
          {
            content: [
              { token: "Can read T" }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      firstOption: {
        id: 2,
        answer: [
          {
            content: [
              { token: "Contravariant" }
            ]
          }
        ]
      },
      secondOption: {
        id: 2,
        answer: [
          {
            content: [
              { token: "Can write T" }
            ]
          }
        ]
      }
    },
    {
      id: 3,
      firstOption: {
        id: 3,
        answer: [
          {
            content: [
              { token: "Invariant" }
            ]
          }
        ]
      },
      secondOption: {
        id: 3,
        answer: [
          {
            content: [
              { token: "Can read and write T" }
            ]
          }
        ]
      }
    }
  ]
};

export const code01: CodeExerciseDto = {
  id: "CODE-01",
  type: "code",
  instruction: "Fill the missing keyword to make the interface covariant.",
  correctOptionId: 2,

  options: [
    {
      id: 1,
      content: [{ type: "bl", value: "in" }],
    },
    {
      id: 2,
      content: [{ type: "bl", value: "out" }],
    },
    {
      id: 3,
      content: [{ type: "bl", value: "ref" }],
    },
    {
      id: 4,
      content: [{ type: "bl", value: "var" }],
    },
  ],

  lines: [
    {
      before: [
        { type: "bl", value: "interface " },
        { type: "gr", value: "IProducer" },
        { type: "wh", value: "<" },
      ],
      gap: true,
      after: [
        { type: "wh", value: " " },
        { type: "gr", value: "T" },
        { type: "wh", value: ">" },
      ],
    },
    {
      before: [{ type: "wh", value: "{" }],
    },
    {
      indent: 1,
      before: [
        { type: "gr", value: "T" },
        { type: "wh", value: " " },
        { type: "yl", value: "Create" },
        { type: "wh", value: "();" },
      ],
    },
    {
      before: [{ type: "wh", value: "}" }],
    },
  ],
};

export const code02: CodeExerciseDto = {
  id: "CODE-02",
  type: "code",
  instruction: "Fill the missing keyword to make the interface contravariant.",
  correctOptionId: 2,

  options: [
    {
      id: 1,
      content: [{ type: "bl", value: "out" }],
    },
    {
      id: 2,
      content: [{ type: "bl", value: "in" }],
    },
    {
      id: 3,
      content: [{ type: "bl", value: "ref" }],
    },
    {
      id: 4,
      content: [{ type: "bl", value: "dynamic" }],
    },
  ],

  lines: [
    {
      before: [
        { type: "bl", value: "interface " },
        { type: "gr", value: "IConsumer" },
        { type: "wh", value: "<" },
      ],
      gap: true,
      after: [
        { type: "wh", value: " " },
        { type: "gr", value: "T" },
        { type: "wh", value: ">" },
      ],
    },
    {
      before: [{ type: "wh", value: "{" }],
    },
    {
      indent: 1,
      before: [
        { type: "bl", value: "void " },
        { type: "yl", value: "Consume" },
        { type: "wh", value: "(" },
        { type: "gr", value: "T" },
        { type: "wh", value: " " },
        { type: "lb", value: "item" },
        { type: "wh", value: ");" },
      ],
    },
    {
      before: [{ type: "wh", value: "}" }],
    },
  ],
};

export const code04: CodeExerciseDto = {
  id: "CODE-04",
  type: "code",
  instruction: "Complete the assignment using delegate covariance.",
  correctOptionId: 1,

  options: [
    {
      id: 1,
      content: [{ type: "lb", value: "getString" }],
    },
    {
      id: 2,
      content: [
        { type: "bl", value: "new" },
        { type: "gr", value: " Func" },
        { type: "wh", value: "<" },
        { type: "bl", value: "object" },
        { type: "wh", value: ">" },
        { type: "wh", value: "()" },
      ],
    },
    // {
    //   id: 3,
    //   content: [{ type: "cmt", value: "// Cast required" }],
    // },
    // {
    //   id: 4,
    //   content: [{ type: "cmt", value: "// Not allowed" }],
    // },
  ],

  lines: [
    {
      before: [
        { type: "gr", value: "Func" },
        { type: "wh", value: "<" },
        { type: "bl", value: "string" },
        { type: "wh", value: ">" },
        { type: "wh", value: " " },
        { type: "lb", value: "getString" },
        { type: "wh", value: " = " },
        { type: "wh", value: "()" },
        { type: "wh", value: " => " },
        { type: "or", value: '"Hello"' },
        { type: "wh", value: ";" },
      ],
    },
    {
      before: [
        { type: "gr", value: "Func" },
        { type: "wh", value: "<" },
        { type: "bl", value: "object" },
        { type: "wh", value: ">" },
        { type: "wh", value: " " },
        { type: "lb", value: "getObject" },
        { type: "wh", value: " = " },
      ],
      gap: true,
      after: [{ type: "wh", value: ";" }],
    },
  ],
};