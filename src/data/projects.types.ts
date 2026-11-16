import type { Technology } from "./technologies.types";

/** Single engagement shown in timeline. */
export interface Project {
  /** Project identifier. */
  id: string;
  /** Company or product name. */
  title: string;
  /** One-line summary for cards. */
  shortDescription: string;
  /** Long text for detail view; inline HTML allowed. */
  fullDescription: string;
  /** Job title */
  role: string;

  /** First working day. */
  startDate: Date;
  /** Last working day; null marks ongoing work. */
  endDate: Date | null;

  /** Ordered gallery; first image serves as thumbnail. */
  images: string[];
  /** Tools used on project. */
  stack: Technology[];
}
