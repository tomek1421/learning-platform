import { MatchPairsExerciseDto } from "../../../types/MatchPairsExerciseDto";
import { MultipleChoiceExerciseDto } from "../../../types/MultipleChoiceExerciseDto";


export const multiple01: MultipleChoiceExerciseDto = {
  id: "S1-MC-01",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is the primary role of the .NET platform when writing C# programs?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "It replaces the C# language compiler" }] }] },
    { id: 2, answer: [{ content: [{ token: "It provides an execution environment and libraries for applications" }] }] },
    { id: 3, answer: [{ content: [{ token: "It converts C# into machine language directly" }] }] },
    { id: 4, answer: [{ content: [{ token: "It installs applications on Windows" }] }] }
  ]
}

export const multiple02: MultipleChoiceExerciseDto = {
  id: "S1-MC-02",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which component of .NET is responsible for executing compiled code?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Base Class Library (BCL)" }] }] },
    { id: 2, answer: [{ content: [{ token: "Common Language Runtime (CLR)" }] }] },
    { id: 3, answer: [{ content: [{ token: "System Namespace" }] }] },
    { id: 4, answer: [{ content: [{ token: "Package Manager" }] }] }
  ]
}

export const multiple03: MultipleChoiceExerciseDto = {
  id: "S1-MC-03",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is the Base Class Library (BCL)?" }] }
  ],
  correctOptionId: 3,
  options: [
    { id: 1, answer: [{ content: [{ token: "A tool used to compile C# code" }] }] },
    { id: 2, answer: [{ content: [{ token: "A runtime responsible for executing applications" }] }] },
    { id: 3, answer: [{ content: [{ token: "A large collection of reusable classes and utilities" }] }] },
    { id: 4, answer: [{ content: [{ token: "A debugger for .NET applications" }] }] }
  ]
}

export const multiple04: MultipleChoiceExerciseDto = {
  id: "S1-MC-04",
  type: "multiple",
  instruction: [
    { content: [{ token: "Why does the BCL exist in .NET?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "To replace the C# compiler" }] }] },
    { id: 2, answer: [{ content: [{ token: "To avoid developers rewriting common functionality" }] }] },
    { id: 3, answer: [{ content: [{ token: "To restrict access to system resources" }] }] },
    { id: 4, answer: [{ content: [{ token: "To convert code into bytecode" }] }] }
  ]
}

export const multiple05: MultipleChoiceExerciseDto = {
  id: "S1-MC-05",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which namespace provides mathematical utilities?" }] }
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
                { type: "wh", value: "System" },
                { type: "wh", value: "." },
                { type: "gr", value: "IO" }
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
                { type: "wh", value: "System" },
                { type: "wh", value: "." },
                { type: "gr", value: "Collections" }
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
                { type: "wh", value: "System" },
                { type: "wh", value: "." },
                { type: "gr", value: "Math" }
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
                { type: "wh", value: "System" },
                { type: "wh", value: "." },
                { type: "gr", value: "Text" }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export const multiple06: MultipleChoiceExerciseDto = {
  id: "S1-MC-06",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is the purpose of namespaces in .NET?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "To execute code faster" }] }] },
    { id: 2, answer: [{ content: [{ token: "To organize classes and avoid naming conflicts" }] }] },
    { id: 3, answer: [{ content: [{ token: "To replace classes" }] }] },
    { id: 4, answer: [{ content: [{ token: "To reduce memory usage" }] }] }
  ]
}

export const multiple07: MultipleChoiceExerciseDto = {
  id: "S1-MC-07",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which statement best describes the relationship between C# and .NET?" }] }
  ],
  correctOptionId: 3,
  options: [
    { id: 1, answer: [{ content: [{ token: "C# runs independently of .NET" }] }] },
    { id: 2, answer: [{ content: [{ token: "C# is a scripting language for .NET only" }] }] },
    { id: 3, answer: [{ content: [{ token: "C# is a programming language designed to run on the .NET platform" }] }] },
    { id: 4, answer: [{ content: [{ token: " .NET is a compiler for C#" }] }] }
  ]
}

export const multiple08: MultipleChoiceExerciseDto = {
  id: "S1-MC-08",
  type: "multiple",
  instruction: [
    { content: [{ token: "What does the CLR primarily manage during program execution?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Database connections" }] }] },
    { id: 2, answer: [{ content: [{ token: "Memory allocation and garbage collection" }] }] },
    { id: 3, answer: [{ content: [{ token: "Internet communication" }] }] },
    { id: 4, answer: [{ content: [{ token: "Operating system updates" }] }] }
  ]
}

export const multiple09: MultipleChoiceExerciseDto = {
  id: "S1-MC-09",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which task is handled by the .NET runtime rather than the developer?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Writing application logic" }] }] },
    { id: 2, answer: [{ content: [{ token: "Managing memory cleanup automatically" }] }] },
    { id: 3, answer: [{ content: [{ token: "Designing algorithms" }] }] },
    { id: 4, answer: [{ content: [{ token: "Creating class structures" }] }] }
  ]
}

export const multiple10: MultipleChoiceExerciseDto = {
  id: "S1-MC-10",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is a major advantage of the BCL?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "It reduces the need for object-oriented programming" }] }] },
    { id: 2, answer: [{ content: [{ token: "It provides pre-tested implementations of common programming tasks" }] }] },
    { id: 3, answer: [{ content: [{ token: "It eliminates the need for compilers" }] }] },
    { id: 4, answer: [{ content: [{ token: "It allows code to run without the runtime" }] }] }
  ]
}

export const multiple11: MultipleChoiceExerciseDto = {
  id: "S1-MC-11",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which namespace is commonly used for working with text?" }] }
  ],
  correctOptionId: 1,
  options: [
    { id: 1, answer: [{ content: [{ token: "System.Text" }] }] },
    { id: 2, answer: [{ content: [{ token: "System.Files" }] }] },
    { id: 3, answer: [{ content: [{ token: "System.StringTools" }] }] },
    { id: 4, answer: [{ content: [{ token: "System.Characters" }] }] }
  ]
}

export const multiple12: MultipleChoiceExerciseDto = {
  id: "S1-MC-12",
  type: "multiple",
  instruction: [
    { content: [{ token: "What does the DateTime class allow developers to do?" }] }
  ],
  correctOptionId: 3,
  options: [
    { id: 1, answer: [{ content: [{ token: "Perform mathematical operations" }] }] },
    { id: 2, answer: [{ content: [{ token: "Manage database queries" }] }] },
    { id: 3, answer: [{ content: [{ token: "Work with date and time values" }] }] },
    { id: 4, answer: [{ content: [{ token: "Store application configuration" }] }] }
  ]
}

export const multiple13: MultipleChoiceExerciseDto = {
  id: "S1-MC-13",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which namespace contains data structures like List<T>?" }] }
  ],
  correctOptionId: 1,
  options: [
    { id: 1, answer: [{ content: [{ token: "System.Collections.Generic" }] }] },
    { id: 2, answer: [{ content: [{ token: "System.Runtime" }] }] },
    { id: 3, answer: [{ content: [{ token: "System.Collections.Static" }] }] },
    { id: 4, answer: [{ content: [{ token: "System.Data.Collections" }] }] }
  ]
}

export const multiple14: MultipleChoiceExerciseDto = {
  id: "S1-MC-14",
  type: "multiple",
  instruction: [
    { content: [{ token: "Why is List<T> preferred over arrays for dynamic collections?" }] }
  ],
  correctOptionId: 1,
  options: [
    { id: 1, answer: [{ content: [{ token: "It automatically resizes as elements change" }] }] },
    { id: 2, answer: [{ content: [{ token: "It stores data more securely" }] }] },
    { id: 3, answer: [{ content: [{ token: "It requires less memory" }] }] },
    { id: 4, answer: [{ content: [{ token: "It compiles faster" }] }] }
  ]
}

export const multiple15: MultipleChoiceExerciseDto = {
  id: "S1-MC-15",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which responsibility belongs to the CLR?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Installing NuGet packages" }] }] },
    { id: 2, answer: [{ content: [{ token: "Managing thread execution and memory" }] }] },
    { id: 3, answer: [{ content: [{ token: "Writing application logs" }] }] },
    { id: 4, answer: [{ content: [{ token: "Compiling C# code into IL" }] }] }
  ]
}

export const multiple16: MultipleChoiceExerciseDto = {
  id: "S1-MC-16",
  type: "multiple",
  instruction: [
    { content: [{ token: "What does the term runtime refer to in .NET?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "The time it takes to compile a program" }] }] },
    { id: 2, answer: [{ content: [{ token: "The environment where compiled code executes" }] }] },
    { id: 3, answer: [{ content: [{ token: "Programming language syntax rules" }] }] },
    { id: 4, answer: [{ content: [{ token: "Library installation process" }] }] }
  ]
}

export const multiple17: MultipleChoiceExerciseDto = {
  id: "S1-MC-17",
  type: "multiple",
  instruction: [
    { content: [{ token: "What problem does the BCL primarily solve?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Hardware incompatibility" }] }] },
    { id: 2, answer: [{ content: [{ token: "Rewriting common functionality repeatedly" }] }] },
    { id: 3, answer: [{ content: [{ token: "Network latency" }] }] },
    { id: 4, answer: [{ content: [{ token: "Compiler performance" }] }] }
  ]
}

export const multiple18: MultipleChoiceExerciseDto = {
  id: "S1-MC-18",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which is an example of functionality provided by the BCL?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Automatic UI design" }] }] },
    { id: 2, answer: [{ content: [{ token: "File reading and writing" }] }] },
    { id: 3, answer: [{ content: [{ token: "Cloud deployment" }] }] },
    { id: 4, answer: [{ content: [{ token: "GPU acceleration" }] }] }
  ]
}

export const multiple19: MultipleChoiceExerciseDto = {
  id: "S1-MC-19",
  type: "multiple",
  instruction: [
    { content: [{ token: "What happens when a C# program executes in .NET?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "It runs directly on hardware" }] }] },
    { id: 2, answer: [{ content: [{ token: "The CLR loads and manages execution" }] }] },
    { id: 3, answer: [{ content: [{ token: "The BCL compiles the code" }] }] },
    { id: 4, answer: [{ content: [{ token: "The OS rewrites the code" }] }] }
  ]
}

export const multiple20: MultipleChoiceExerciseDto = {
  id: "S1-MC-20",
  type: "multiple",
  instruction: [
    { content: [{ token: "Why is the .NET ecosystem considered powerful?" }] }
  ],
  correctOptionId: 1,
  options: [
    { id: 1, answer: [{ content: [{ token: "It combines runtime management with reusable libraries" }] }] },
    { id: 2, answer: [{ content: [{ token: "It eliminates programming languages" }] }] },
    { id: 3, answer: [{ content: [{ token: "It automatically generates applications" }] }] },
    { id: 4, answer: [{ content: [{ token: "It removes operating systems" }] }] }
  ]
}

export const match01: MatchPairsExerciseDto = {
  id: "S1-MP-01",
  type: "match",
  instruction: [
    { content: [{ token: "Match the .NET components with their primary responsibilities:" }] }
  ],
  options: [
    {
      id: 1,
      firstOption: { id: 10, answer: [{ content: [{ token: "Base Class Library (BCL)" }] }] },
      secondOption: { id: 11, answer: [{ content: [{ token: "Provides reusable classes and utilities" }] }] }
    },
    {
      id: 2,
      firstOption: { id: 20, answer: [{ content: [{ token: "Common Language Runtime (CLR)" }] }] },
      secondOption: { id: 21, answer: [{ content: [{ token: "Executes code and manages memory" }] }] }
    },
    {
      id: 3,
      firstOption: { id: 30, answer: [{ content: [{ token: "System.Math" }] }] },
      secondOption: { id: 31, answer: [{ content: [
        { token: [{ type: "wh", value: "System" }, { type: "wh", value: "." }, { type: "gr", value: "Math" }] },
      ] }] }
    }
  ]
};

export const match02: MatchPairsExerciseDto = {
  id: "S1-MP-02",
  type: "match",
  instruction: [
    { content: [{ token: "Match the .NET namespaces with their purpose:" }] }
  ],
  options: [
    {
      id: 1,
      firstOption: {
        id: 10,
        answer: [
          {
            content: [
              {
                token: [
                  { type: "wh", value: "System" },
                  { type: "wh", value: "." },
                  { type: "gr", value: "Text" }
                ]
              }
            ]
          }
        ]
      },
      secondOption: { id: 11, answer: [{ content: [{ token: "Text manipulation" }] }] }
    },
    {
      id: 2,
      firstOption: {
        id: 20,
        answer: [
          {
            content: [
              {
                token: [
                  { type: "wh", value: "System" },
                  { type: "wh", value: "." },
                  { type: "wh", value: "Collections" },
                  { type: "wh", value: "." },
                  { type: "gr", value: "Generic" }
                ]
              }
            ]
          }
        ]
      },
      secondOption: {
        id: 21,
        answer: [
          {
            content: [
              { token: "Dynamic collections like " },
              { token: [
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
    },
    {
      id: 3,
      firstOption: {
        id: 30,
        answer: [
          {
            content: [
              { token: [
                  { type: "gr", value: "DateTime" }
                ]
              }
            ]
          }
        ]
      },
      secondOption: { id: 31, answer: [{ content: [{ token: "Working with dates and times" }] }] }
    }
  ]
};

export const match03: MatchPairsExerciseDto = {
  id: "S1-MP-03",
  type: "match",
  instruction: [
    { content: [{ token: "Match the runtime concepts with their descriptions:" }] }
  ],
  options: [
    {
      id: 1,
      firstOption: { id: 10, answer: [{ content: [{ token: "Garbage Collection" }] }] },
      secondOption: { id: 11, answer: [{ content: [{ token: "Automatic memory management" }] }] }
    },
    {
      id: 2,
      firstOption: { id: 20, answer: [{ content: [{ token: "Thread Management" }] }] },
      secondOption: { id: 21, answer: [{ content: [{ token: "Manages concurrent execution" }] }] }
    },
    {
      id: 3,
      firstOption: { id: 30, answer: [{ content: [{ token: "JIT Compilation" }] }] },
      secondOption: { id: 31, answer: [{ content: [{ token: "Converts IL to machine code at runtime" }] }] }
    }
  ]
};

export const match04: MatchPairsExerciseDto = {
  id: "S1-MP-04",
  type: "match",
  instruction: [
    { content: [{ token: "Match the example to the category in .NET:" }] }
  ],
  options: [
    {
      id: 1,
      firstOption: {
        id: 10,
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
      secondOption: { id: 11, answer: [{ content: [{ token: "Data Structure" }] }] }
    },
    {
      id: 2,
      firstOption: {
        id: 20,
        answer: [
          {
            content: [
              { token: [{ type: "gr", value: "Console" }, { type: "wh", value: "." }, { type: "yl", value: "WriteLine" }, { type: "wh", value: "(" }, { type: "wh", value: ")" }] }
            ]
          }
        ]
      },
      secondOption: { id: 21, answer: [{ content: [{ token: "Text Output" }] }] }
    },
    {
      id: 3,
      firstOption: {
        id: 30,
        answer: [
          {
            content: [
              { token: [{ type: "gr", value: "DateTime" }, { type: "wh", value: "." }, { type: "wh", value: "Now" }] }
            ]
          }
        ]
      },
      secondOption: { id: 31, answer: [{ content: [{ token: "Date & Time" }] }] }
    }
  ]
};

export const match05: MatchPairsExerciseDto = {
  id: "S1-MP-05",
  type: "match",
  instruction: [
    { content: [{ token: "Match the task to the correct .NET tool or class:" }] }
  ],
  options: [
    {
      id: 1,
      firstOption: { id: 10, answer: [{ content: [{ token: "Reading a file" }] }] },
      secondOption: { id: 11, answer: [{ content: [
        { token: [{ type: "wh", value: "System" }, { type: "wh", value: "." }, { type: "gr", value: "IO" }] }
      ] }] }
    },
    {
      id: 2,
      firstOption: { id: 20, answer: [{ content: [{ token: "Performing math calculations" }] }] },
      secondOption: { id: 21, answer: [{ content: [
        { token: [{ type: "wh", value: "System" }, { type: "wh", value: "." }, { type: "gr", value: "Math" }] }
      ] }] }
    },
    {
      id: 3,
      firstOption: { id: 30, answer: [{ content: [{ token: "Manipulating text" }] }] },
      secondOption: { id: 31, answer: [{ content: [
        { token: [{ type: "wh", value: "System" }, { type: "wh", value: "." }, { type: "gr", value: "Text" }] }
      ] }] }
    }
  ]
};