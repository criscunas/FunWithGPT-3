import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.apiKey,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  let option;
  const engine = req.body.engine;

  if(engine === 'Davinci') {
    option = "text-davinci-002"
  }

  if (engine === "Curie") {
    option = "text-curie-001";
  }

  if (engine === "Babbage") {
    option = "text-babbage-001";
  }

  if (engine === "Ada") {
    option = "text-ada-001";
  }

  const completion = await openai.createCompletion(`${option}`, {
    prompt: req.body.prompt,
    temperature: 0.5,
    top_p: 1.0,
    max_tokens: 64,
  });

  res.status(200).json({
    prompt: req.body.prompt,
    result: completion.data.choices[0].text,
    engine : option,
  });
}
