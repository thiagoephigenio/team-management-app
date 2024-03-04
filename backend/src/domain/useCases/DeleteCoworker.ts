export interface DeleteCoworker {
  delete: (coworkerId: string) => Promise<void>;
}