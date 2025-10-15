import z from "zod";
import {createTool} from "@inngest/agent-kit";


const saveSuggestions = createTool({
    name: "save_suggestions",
    description: "Save the suggestions made by other agents into the state",
    parameters: z.object({
        suggestions: z.array(z.string()),
    }),
    handler: 
        
    
})