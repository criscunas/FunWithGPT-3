import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {

  const city = req.body.city;
  const state = req.body.state;

  const questions = [`Question: What are 3 good restaurants in ${city}, ${state} and a url links to them?\n Response:`,`Question: what are some fun things to do near ${city}, ${state} ?\nResponse:`,`Question: what are 3 nice hotels near ${city}, ${state} and url links to them?\nResponse:`]
  
  const response = await Promise.all(
    questions.map( async ques => {
      const resp = await openai.createCompletion("text-davinci-002", {
        prompt: ques,
        temperature: 0.1,
        top_p: 1.0,
        max_tokens: 100,
      });
      return resp.data.choices[0].text;
    })
  )

  res.json({
    result: response,
    destination: {
      city: city,
      state: state
    }
  });

}
