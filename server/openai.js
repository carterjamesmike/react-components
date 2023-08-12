const dotenv = require("dotenv");
dotenv.config();

const { Configuration, OpenAIApi } = require("openai");

//GPT config
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateText = async (userPrompt) => {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Tell me a joke",
    temperature: 0.8,
    max_tokens: 80,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return res.data.choices[0].text.trim();
};


module.exports = { generateText };
