import {createAgent} from "@inngest/agent-kit";


export const documentationAgent = createAgent({
    name: "documentation_agent.",
    system: "You are an expert at generating documentation for code."
})

export const analysisAgent = createAgent({
    name: "analysis_agent.",
    system: "You are an expert at analyzing code and suggesting improvements."
})



