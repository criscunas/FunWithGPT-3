import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: req.body.prompt,
    temperature: 0,
    top_p:1.0,
    max_tokens:64
  });
  res.status(200).json({ 
    prompt: req.body.prompt,
    result: completion.data.choices[0].text 
  });
}

function generatePrompt(prompt) {
  const capitalizedPrompt =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return ` Prompt: ${capitalizedPrompt} Response:`;
}