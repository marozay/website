/** Skill area used for grouping. */
export type TechnologyType = "frontend" | "backend" | "data-and-ai";

/** Tool referenced by project stacks. */
export interface Technology {
  /** Technology identifier. */
  id: string;
  /** Display name for UI lists. */
  title: string;
  /** One sentence explaining tool purpose. */
  description: string;
  /** Icon source: local path or remote URL. */
  iconUrl: string;
  /** Homepage or repository URL. */
  source: string;
  /** Skill area for grouping. */
  type: TechnologyType;
}
