
type DifficultyTypes="easy" | "medium" | "hard";

export interface workTypes {
    slug: string,
    name: string,
    duration: number,
    difficulty: DifficultyTypes,
    sequence: Array<sequenceTypes>,

    
}

type sequenceTypes={
    slug: string,
    name: string,
    type: string,
    reps?: number,
    duration?: number,
}

