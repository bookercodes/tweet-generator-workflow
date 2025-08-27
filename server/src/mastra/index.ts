
import { Mastra } from '@mastra/core/mastra';
import { generateTweetWorkflow } from './workflows/generate-tweet-workflow';

export const mastra = new Mastra({
  workflows: { generateTweetWorkflow }
});
