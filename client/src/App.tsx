import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { mastraClient } from "./lib/mastra";

function App() {
  const [tweet, setTweet] = useState<string>('')
  const [topic, setTopic] = useState<string>('')
  
  const handleClick = async () => {
    const workflow = mastraClient.getWorkflow("generateTweetWorkflow")
    const run = await workflow.createRunAsync()

    const result = await workflow.startAsync({
      runId: run.runId,
      inputData: {
        topic: topic
      }
    })

    const x = result.steps['generateTweet']
    setTweet(x.output.tweet)
  }

  return (
    <>
    <div>
    <input 
      type="text" 
      value={topic} 
      onChange={(e) => setTopic(e.target.value)}
      placeholder="Enter topic"
    />
    <button onClick={handleClick}>Click me</button>
    <p>{tweet}</p>
    </div>
    </>
  )
}

export default App
