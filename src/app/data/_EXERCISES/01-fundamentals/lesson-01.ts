import { MultipleChoiceExerciseDto } from "../../../types/MultipleChoiceExerciseDto";


export const multiple01: MultipleChoiceExerciseDto = {
  id: "q1",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is the main purpose of the .NET platform?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "To replace the operating system" }] }] },
    { id: 2, answer: [{ content: [{ token: "To provide tools, libraries, and runtime for running C# applications" }] }] },
    { id: 3, answer: [{ content: [{ token: "To convert C# into Java" }] }] },
    { id: 4, answer: [{ content: [{ token: "To design graphical interfaces only" }] }] }
  ]
};

export const multiple02: MultipleChoiceExerciseDto = {
  id: "q2",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is the Base Class Library (BCL)?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "A compiler for C# code" }] }] },
    { id: 2, answer: [{ content: [{ token: "A set of pre-written classes and tools developers can use" }] }] },
    { id: 3, answer: [{ content: [{ token: "A debugger used in Visual Studio" }] }] },
    { id: 4, answer: [{ content: [{ token: "A Windows-only framework for UI design" }] }] }
  ]
};

export const multiple03: MultipleChoiceExerciseDto = {
  id: "q3",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which namespace provides mathematical operations such as square root?" }] }
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
                { type: "gr", value: "Text" }
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
                { type: "gr", value: "Data" }
              ]
            }
          ]
        }
      ]
    }
  ]
};


export const multiple04: MultipleChoiceExerciseDto = {
  id: "q4",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is the role of the Common Language Runtime (CLR)?" }] }
],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Writing code for developers" }] }] },
    { id: 2, answer: [{ content: [{ token: "Executing and managing .NET applications" }] }] },
    { id: 3, answer: [{ content: [{ token: "Designing user interfaces" }] }] },
    { id: 4, answer: [{ content: [{ token: "Connecting applications to databases" }] }] }
  ]
};

export const multiple05: MultipleChoiceExerciseDto = {
  id: "multiple05",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is the intermediate language generated after compiling C# code?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "JVM" }] }] },
    { id: 2, answer: [{ content: [{ token: "CIL (Common Intermediate Language)" }] }] },
    { id: 3, answer: [{ content: [{ token: "HTML" }] }] },
    { id: 4, answer: [{ content: [{ token: "XML" }] }] }
  ]
};

export const multiple06: MultipleChoiceExerciseDto = {
  id: "multiple06",
  type: "multiple",
  instruction: [
    { content: [{ token: "What does JIT stand for?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Java Integration Tool" }] }] },
    { id: 2, answer: [{ content: [{ token: "Just-In-Time compilation" }] }] },
    { id: 3, answer: [{ content: [{ token: "Joint Interface Technology" }] }] },
    { id: 4, answer: [{ content: [{ token: "Java Intermediate Translation" }] }] }
  ]
};

export const multiple07: MultipleChoiceExerciseDto = {
  id: "multiple07",
  type: "multiple",
  instruction: [
    { content: [{ token: "What does the CLR do besides executing code?" }] }
  ],
  correctOptionId: 4,
  options: [
    { id: 1, answer: [{ content: [{ token: "Manages memory and garbage collection" }] }] },
    { id: 2, answer: [{ content: [{ token: "Handles security" }] }] },
    { id: 3, answer: [{ content: [{ token: "Provides exception handling" }] }] },
    { id: 4, answer: [{ content: [{ token: "All of the above" }] }] }
  ]
};

export const multiple08: MultipleChoiceExerciseDto = {
  id: "multiple08",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is Garbage Collection?" }] }
  ],
  correctOptionId: 1,
  options: [
    { id: 1, answer: [{ content: [{ token: "Cleaning unused variables automatically" }] }] },
    { id: 2, answer: [{ content: [{ token: "Deleting files from the system" }] }] },
    { id: 3, answer: [{ content: [{ token: "Removing unused code during compilation" }] }] },
    { id: 4, answer: [{ content: [{ token: "Clearing program logs" }] }] }
  ]
};

export const multiple09: MultipleChoiceExerciseDto = {
  id: "multiple09",
  type: "multiple",
  instruction: [
    { content: [{ token: "What type of platform was the original .NET Framework?" }] }
  ],
  correctOptionId: 3,
  options: [
    { id: 1, answer: [{ content: [{ token: "Cross-platform" }] }] },
    { id: 2, answer: [{ content: [{ token: "Linux only" }] }] },
    { id: 3, answer: [{ content: [{ token: "Windows-only" }] }] },
    { id: 4, answer: [{ content: [{ token: "Mobile only" }] }] }
  ]
};

export const multiple10: MultipleChoiceExerciseDto = {
  id: "multiple10",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which modern .NET version introduced the unified platform after .NET Core?" }] }
  ],
  correctOptionId: 3,
  options: [
    { id: 1, answer: [{ content: [{ token: ".NET 3" }] }] },
    { id: 2, answer: [{ content: [{ token: ".NET 4" }] }] },
    { id: 3, answer: [{ content: [{ token: ".NET 5" }] }] },
    { id: 4, answer: [{ content: [{ token: ".NET 10" }] }] }
  ]
};