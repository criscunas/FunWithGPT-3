import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-babbage-001", {
    prompt: generatePrompt(req.body.prompt),
    temperature: 0.1,
  });
  res.status(200).json({
    prompt: req.body.prompt,
    result: completion.data.choices[0].text,
  });
}

function generatePrompt(prompt) {
  const capitalizedPrompt =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
  return ` Prompt: ${capitalizedPrompt} Response:`;
}
