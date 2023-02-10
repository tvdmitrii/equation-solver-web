export interface SolutionResponse{
    success: string;
    error: string;
    solution: Record<string, number>;
    guess_values: Record<string, number>;
}