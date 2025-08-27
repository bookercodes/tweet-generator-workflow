import { mastra } from './mastra/index';

(async () => {
  const workflow = mastra.getWorkflow('weatherWorkflow');

  const run = await workflow.createRunAsync()
  const res = await run.start({ 
    inputData: {
      city: "New York",
    }
  })
  // const y= run.stream()
  // console.log("res.status", res.status)
  // console.log("res.steps", res.steps['plan-activities'].payload.condition)
})()