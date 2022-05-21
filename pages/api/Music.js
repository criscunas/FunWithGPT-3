import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  
  const feel = req.body.feeling;
  const action = req.body.activity;
  const instrument = req.body.instrument;

  const questions = [
    `Name 3 ${feel} songs ?\nResponse:`,
    `Name 3 songs good for ${action}?\nResponse:`,
    `Name 3 songs that use a ${instrument}\nResponse:`,
    `Give me a working youtube link\nResponse`
  ];
  
  const response = await Promise.all(
    questions.map(async (ques) => {
      const resp = await openai.createCompletion("text-curie-001", {
        prompt: ques,
        temperature: 0.5,
        top_p: 1.0,
        max_tokens: 80,
      });
      return resp.data.choices[0].text;
    })
  );

  res.json({
    result: response
  });
}
