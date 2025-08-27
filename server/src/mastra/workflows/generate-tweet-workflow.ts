import { createStep, createWorkflow } from "@mastra/core";
import { z } from "zod";
import { tweetWriterAgent } from "../agents/tweet-writer-agent";

const generateTweet = createStep({
  id: 'generateTweet',
  inputSchema: z.object({
    topic: z.string().describe('The topic of the tweet'),
  }),
  outputSchema: z.object({
    tweet: z.string().describe('The generated tweet'),
  }),
  execute: async ({ inputData }) => {
    const response = await tweetWriterAgent.generate([
      {
        role: 'user',
        content: `Write a tweet about: ${inputData.topic}`
      }
    ]);

    return {
      tweet: response.text
    }
  }
})

export const generateTweetWorkflow = createWorkflow({
  id: 'generateTweetWorkflow',
  inputSchema: z.object({
    topic: z.string().describe('The topic of the tweet'),
  }),
  outputSchema: z.object({
    tweet: z.string().describe('The generated tweet'),
  }),
})
.then(generateTweet)
.commit()
