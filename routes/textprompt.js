import express from "express"
const router = express.Router()
import {client} from "@gradio/client"
import esource from 'eventsource';
global.EventSource = esource

router.post("/", async (req, res) => {
    try {
    const data = req.body
    console.log(data)
    const app = await client("https://siddhantuniyal-mumbaihacks-genai.hf.space/--replicas/wqcxd/");
    const result = await app.predict("/predict", [
        data.level, // string  in 'level' Textbox component		
        data.characters, // string  in 'number_of_words' Textbox component		
        data.mistakes, // string  in 'how_many_errors' Textbox component		
        data.prompt, // string  in 'topic' Textbox component
    ]);

    const strRes = result.data ;
    const resultStr = strRes.join("");
    res.json({result:resultStr})

} catch (error) {
        console.log(error)
}
})

export default router;