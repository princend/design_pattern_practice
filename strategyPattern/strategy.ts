export interface Strategy {
    operation(): void;
    getName(): string;
}