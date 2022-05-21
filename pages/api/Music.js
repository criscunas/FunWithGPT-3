import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.apiKey,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  
  const feel = req.body.feeling;
  const action = req.body.activity;
  const instrument = req.body.instrument;


  const questions = [
    `Give me 10 songs for ${action}, feeling ${feel}, with ${instrument}\nResponse`,
    `Give me the youtube link for Rick Astley Never Gonna Give You Up \nResponse`,
  ];
  
  const response = await Promise.all(
    questions.map(async (ques) => {
      const resp = await openai.createCompletion("text-davinci-001", {
        prompt: ques,
        temperature: 1,
        top_p: 1.0,
        max_tokens: 200,
      });
      return resp.data.choices[0].text;
    })
  );

  res.json({
    result: response
  });
}
