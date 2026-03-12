import { MatchPairsExerciseDto } from "../../../types/MatchPairsExerciseDto";
import { MultipleChoiceExerciseDto } from "../../../types/MultipleChoiceExerciseDto";

export const multiple01: MultipleChoiceExerciseDto = {
  id: "S2-MC-01",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is the CLR in .NET?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Code editor" }] }] },
    { id: 2, answer: [{ content: [{ token: "Runtime environment managing execution" }] }] },
    { id: 3, answer: [{ content: [{ token: "Database engine" }] }] },
    { id: 4, answer: [{ content: [{ token: "Web server" }] }] }
  ]
}

export const multiple02: MultipleChoiceExerciseDto = {
  id: "S2-MC-02",
  type: "multiple",
  instruction: [
    { content: [{ token: "What is the main role of the CLR?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Write code" }] }] },
    { id: 2, answer: [{ content: [{ token: "Execute and manage applications" }] }] },
    { id: 3, answer: [{ content: [{ token: "Design UI" }] }] },
    { id: 4, answer: [{ content: [{ token: "Store files" }] }] }
  ]
}

export const multiple03: MultipleChoiceExerciseDto = {
  id: "S2-MC-03",
  type: "multiple",
  instruction: [
    { content: [{ token: "Why is the CLR required?" }] }
  ],
  correctOptionId: 1,
  options: [
    { id: 1, answer: [{ content: [{ token: "CPU understands only machine code" }] }] },
    { id: 2, answer: [{ content: [{ token: "C# runs directly on hardware" }] }] },
    { id: 3, answer: [{ content: [{ token: "It replaces Windows" }] }] },
    { id: 4, answer: [{ content: [{ token: "It compiles HTML" }] }] }
  ]
}

export const multiple04: MultipleChoiceExerciseDto = {
  id: "S2-MC-04",
  type: "multiple",
  instruction: [
    { content: [{ token: "C# code is first compiled into:" }] }
  ],
  correctOptionId: 3,
  options: [
    { id: 1, answer: [{ content: [{ token: "Machine code" }] }] },
    { id: 2, answer: [{ content: [{ token: "Assembly language" }] }] },
    {
      id: 3,
      answer: [{
        content: [{
          token: "CIL" 
        }]
      }]
    },
    { id: 4, answer: [{ content: [{ token: "Java bytecode" }] }] }
  ]
}

export const multiple05: MultipleChoiceExerciseDto = {
  id: "S2-MC-05",
  type: "multiple",
  instruction: [
    { content: [{ token: "What does CIL stand for?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Common Internet Language" }] }] },
    { id: 2, answer: [{ content: [{ token: "Common Intermediate Language" }] }] },
    { id: 3, answer: [{ content: [{ token: "Compiled Instruction Layer" }] }] },
    { id: 4, answer: [{ content: [{ token: "Central Integration Logic" }] }] }
  ]
}

export const multiple06: MultipleChoiceExerciseDto = {
  id: "S2-MC-06",
  type: "multiple",
  instruction: [
    { content: [{ token: "CIL is:" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "CPU-specific" }] }] },
    { id: 2, answer: [{ content: [{ token: "Platform-independent" }] }] },
    { id: 3, answer: [{ content: [{ token: "Windows-only" }] }] },
    { id: 4, answer: [{ content: [{ token: "Native code" }] }] }
  ]
}

export const multiple07: MultipleChoiceExerciseDto = {
  id: "S2-MC-07",
  type: "multiple",
  instruction: [
    { content: [{ token: "Who translates CIL into machine code?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Operating System" }] }] },
    {
      id: 2,
      answer: [{
        content: [{
          token: "JIT Compiler"
        }]
      }]
    },
    { id: 3, answer: [{ content: [{ token: "Visual Studio" }] }] },
    { id: 4, answer: [{ content: [{ token: "Garbage Collector" }] }] }
  ]
}

export const multiple08: MultipleChoiceExerciseDto = {
  id: "S2-MC-08",
  type: "multiple",
  instruction: [
    { content: [{ token: "When does JIT compilation occur?" }] }
  ],
  correctOptionId: 3,
  options: [
    { id: 1, answer: [{ content: [{ token: "While writing code" }] }] },
    { id: 2, answer: [{ content: [{ token: "During build only" }] }] },
    { id: 3, answer: [{ content: [{ token: "First time a method runs" }] }] },
    { id: 4, answer: [{ content: [{ token: "After program ends" }] }] }
  ]
}

export const multiple09: MultipleChoiceExerciseDto = {
  id: "S2-MC-09",
  type: "multiple",
  instruction: [
    { content: [{ token: "Why is JIT efficient?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Compiles everything immediately" }] }] },
    { id: 2, answer: [{ content: [{ token: "Compiles only used code" }] }] },
    { id: 3, answer: [{ content: [{ token: "Removes CPU usage" }] }] },
    { id: 4, answer: [{ content: [{ token: "Skips execution" }] }] }
  ]
}

export const multiple10: MultipleChoiceExerciseDto = {
  id: "S2-MC-10",
  type: "multiple",
  instruction: [
    { content: [{ token: "After JIT compilation, what happens?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Recompiled every call" }] }] },
    { id: 2, answer: [{ content: [{ token: "Native code is cached" }] }] },
    { id: 3, answer: [{ content: [{ token: "Program restarts" }] }] },
    { id: 4, answer: [{ content: [{ token: "CLR shuts down" }] }] }
  ]
}

export const multiple11: MultipleChoiceExerciseDto = {
  id: "S2-MC-11",
  type: "multiple",
  instruction: [
    { content: [{ token: "Correct execution pipeline:" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "C# → Native → CIL" }] }] },
    { id: 2, answer: [{ content: [{ token: "C# → CIL → Native Code → CPU" }] }] },
    { id: 3, answer: [{ content: [{ token: "CLR → C# → CPU" }] }] },
    { id: 4, answer: [{ content: [{ token: "CIL → C# → Native" }] }] }
  ]
}

export const multiple12: MultipleChoiceExerciseDto = {
  id: "S2-MC-12",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which element enables platform independence?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Garbage Collector" }] }] },
    {
      id: 2,
      answer: [{
        content: [{
          token: "CIL"
        }]
      }]
    },
    { id: 3, answer: [{ content: [{ token: "Exception Handler" }] }] },
    { id: 4, answer: [{ content: [{ token: "Console" }] }] }
  ]
}

export const multiple13: MultipleChoiceExerciseDto = {
  id: "S2-MC-13",
  type: "multiple",
  instruction: [
    { content: [{ token: "CLR memory management performs:" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "File cleanup" }] }] },
    { id: 2, answer: [{ content: [{ token: "Garbage Collection" }] }] },
    { id: 3, answer: [{ content: [{ token: "Disk formatting" }] }] },
    { id: 4, answer: [{ content: [{ token: "Network optimization" }] }] }
  ]
}

export const multiple14: MultipleChoiceExerciseDto = {
  id: "S2-MC-14",
  type: "multiple",
  instruction: [
    { content: [{ token: "Garbage Collection prevents:" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Syntax errors" }] }] },
    { id: 2, answer: [{ content: [{ token: "Memory leaks" }] }] },
    { id: 3, answer: [{ content: [{ token: "Compilation errors" }] }] },
    { id: 4, answer: [{ content: [{ token: "Network failures" }] }] }
  ]
}

export const multiple15: MultipleChoiceExerciseDto = {
  id: "S2-MC-15",
  type: "multiple",
  instruction: [
    { content: [{ token: "CLR security enforcement:" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Improves UI speed" }] }] },
    { id: 2, answer: [{ content: [{ token: "Prevents unsafe operations" }] }] },
    { id: 3, answer: [{ content: [{ token: "Builds projects" }] }] },
    { id: 4, answer: [{ content: [{ token: "Writes logs" }] }] }
  ]
}

export const multiple16: MultipleChoiceExerciseDto = {
  id: "S2-MC-16",
  type: "multiple",
  instruction: [
    { content: [{ token: "Exception handling allows:" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Ignoring errors" }] }] },
    { id: 2, answer: [{ content: [{ token: "Structured error management" }] }] },
    { id: 3, answer: [{ content: [{ token: "Faster compilation" }] }] },
    { id: 4, answer: [{ content: [{ token: "CPU control" }] }] }
  ]
}

export const multiple17: MultipleChoiceExerciseDto = {
  id: "S2-MC-17",
  type: "multiple",
  instruction: [
    { content: [{ token: "Which process happens at runtime?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Writing C#" }] }] },
    { id: 2, answer: [{ content: [{ token: "JIT compilation" }] }] },
    { id: 3, answer: [{ content: [{ token: "Installing SDK" }] }] },
    { id: 4, answer: [{ content: [{ token: "Saving file" }] }] }
  ]
}

export const multiple18: MultipleChoiceExerciseDto = {
  id: "S2-MC-18",
  type: "multiple",
  instruction: [
    { content: [{ token: "Why is CLR called a managed environment?" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Developer manages memory" }] }] },
    { id: 2, answer: [{ content: [{ token: "CLR manages execution services" }] }] },
    { id: 3, answer: [{ content: [{ token: "OS controls logic" }] }] },
    { id: 4, answer: [{ content: [{ token: "CPU manages code" }] }] }
  ]
}

export const multiple19: MultipleChoiceExerciseDto = {
  id: "S2-MC-19",
  type: "multiple",
  instruction: [
    { content: [{ token: "A downside of JIT compilation is:" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Memory leaks" }] }] },
    { id: 2, answer: [{ content: [{ token: "Small delay on first execution" }] }] },
    { id: 3, answer: [{ content: [{ token: "No caching" }] }] },
    { id: 4, answer: [{ content: [{ token: "Platform dependency" }] }] }
  ]
}

export const multiple20: MultipleChoiceExerciseDto = {
  id: "S2-MC-20",
  type: "multiple",
  instruction: [
    { content: [{ token: "CLR acts primarily as:" }] }
  ],
  correctOptionId: 2,
  options: [
    { id: 1, answer: [{ content: [{ token: "Database server" }] }] },
    { id: 2, answer: [{ content: [{ token: "Translator and manager" }] }] },
    { id: 3, answer: [{ content: [{ token: "Text editor" }] }] },
    { id: 4, answer: [{ content: [{ token: "Compiler only" }] }] }
  ]
}

export const match01: MatchPairsExerciseDto = {
  id: "S2-MP-01",
  type: "match",
  instruction: [
    { content: [{ token: "Match the stages of C# execution in .NET:" }] }
  ],
  options: [
    {
      id: 1,
      firstOption: { id: 10, answer: [{ content: [{ token: "C# Source Code" }] }] },
      secondOption: { id: 11, answer: [{ content: [{ token: "Written by developer" }] }] }
    },
    {
      id: 2,
      firstOption: { id: 20, answer: [{ content: [{ token: "CIL" }] }] },
      secondOption: { id: 21, answer: [{ content: [{ token: "Platform-independent code" }] }] }
    },
    {
      id: 3,
      firstOption: { id: 30, answer: [{ content: [{ token: "JIT Compilation" }] }] },
      secondOption: { id: 31, answer: [{ content: [{ token: "Converts to native code" }] }] }
    },
    {
      id: 4,
      firstOption: { id: 40, answer: [{ content: [{ token: "Native Machine Code" }] }] },
      secondOption: { id: 41, answer: [{ content: [{ token: "Executed by CPU" }] }] }
    }
  ]
}

export const match02: MatchPairsExerciseDto = {
  id: "S2-MP-02",
  type: "match",
  instruction: [
    { content: [{ token: "Match CLR responsibilities with their purpose:" }] }
  ],
  options: [
    {
      id: 1,
      firstOption: { id: 10, answer: [{ content: [{ token: "Memory Management" }] }] },
      secondOption: { id: 11, answer: [{ content: [{ token: "Automatic Garbage Collection" }] }] }
    },
    {
      id: 2,
      firstOption: { id: 20, answer: [{ content: [{ token: "Security Enforcement" }] }] },
      secondOption: { id: 21, answer: [{ content: [{ token: "Prevents unsafe operations" }] }] }
    },
    {
      id: 3,
      firstOption: { id: 30, answer: [{ content: [{ token: "Exception Handling" }] }] },
      secondOption: { id: 31, answer: [{ content: [{ token: "Structured error management" }] }] }
    }
  ]
}

export const match03: MatchPairsExerciseDto = {
  id: "S2-MP-03",
  type: "match",
  instruction: [
    { content: [{ token: "Match runtime elements to their role:" }] }
  ],
  options: [
    {
      id: 1,
      firstOption: { id: 10, answer: [{ content: [{ token: "CLR" }] }] },
      secondOption: { id: 11, answer: [{ content: [{ token: "Runtime manager" }] }] }
    },
    {
      id: 2,
      firstOption: { id: 20, answer: [{ content: [{ token: "JIT Compiler" }] }] },
      secondOption: { id: 21, answer: [{ content: [{ token: "Code translator" }] }] }
    },
    {
      id: 3,
      firstOption: { id: 30, answer: [{ content: [{ token: "Garbage Collector" }] }] },
      secondOption: { id: 31, answer: [{ content: [{ token: "Memory cleaner" }] }] }
    }
  ]
}

export const match04: MatchPairsExerciseDto = {
  id: "S2-MP-04",
  type: "match",
  instruction: [
    { content: [{ token: "Match code types with execution stage:" }] }
  ],
  options: [
    {
      id: 1,
      firstOption: { id: 10, answer: [{ content: [{ token: "Source Code" }] }] },
      secondOption: { id: 11, answer: [{ content: [{ token: "Human readable" }] }] }
    },
    {
      id: 2,
      firstOption: { id: 20, answer: [{ content: [{ token: "CIL" }] }] },
      secondOption: { id: 21, answer: [{ content: [{ token: "Intermediate representation" }] }] }
    },
    {
      id: 3,
      firstOption: { id: 30, answer: [{ content: [{ token: "Native Code" }] }] },
      secondOption: { id: 31, answer: [{ content: [{ token: "CPU executable" }] }] }
    }
  ]
}

export const match05: MatchPairsExerciseDto = {
  id: "S2-MP-05",
  type: "match",
  instruction: [
    { content: [{ token: "Match JIT concepts with their function:" }] }
  ],
  options: [
    {
      id: 1,
      firstOption: { id: 10, answer: [{ content: [{ token: "JIT Compilation" }] }] },
      secondOption: { id: 11, answer: [{ content: [{ token: "Runtime translation" }] }] }
    },
    {
      id: 2,
      firstOption: { id: 20, answer: [{ content: [{ token: "Caching" }] }] },
      secondOption: { id: 21, answer: [{ content: [{ token: "Faster repeated execution" }] }] }
    },
    {
      id: 3,
      firstOption: { id: 30, answer: [{ content: [{ token: "Native Code" }] }] },
      secondOption: { id: 31, answer: [{ content: [{ token: "Maximum speed" }] }] }
    }
  ]
}