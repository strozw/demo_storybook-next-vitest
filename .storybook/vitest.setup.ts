import { setProjectAnnotations } from "@storybook/nextjs";
import { beforeAll } from "vitest";
import * as projectAnnotations from "./preview";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const project = setProjectAnnotations([
  projectAnnotations,
  {
    parameters: {
      react: {
        rsc: true,
      },
    },
  },
]);

beforeAll(project.beforeAll);