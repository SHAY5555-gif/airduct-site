# Claude Instructions for Web Search

## When to Use Web Search

Use the `/openai-web-search` skill in the following scenarios:

1. **User explicitly requests web search**
   - "search the web for..."
   - "look up online..."
   - "find current information about..."

2. **Troubleshooting failures**
   - When you encounter bugs or errors you cannot resolve with available codebase context
   - When error messages reference external libraries, frameworks, or APIs you need current documentation for
   - When you need to verify if a bug is a known issue with a dependency

3. **Knowledge gaps**
   - When you need current information beyond your training data (post-January 2025)
   - When dealing with rapidly evolving technologies, frameworks, or APIs
   - When you need to verify best practices or current recommendations

4. **External dependencies**
   - When you need documentation for external APIs, libraries, or services
   - When checking compatibility between different versions of dependencies
   - When researching error messages from third-party tools

## How to Use the Skill

**Always invoke the skill using:**

```
/openai-web-search
```

Then provide your search query when prompted, or pass it as an argument.

## Examples

**Example 1: User request**
```
User: Search the web for the latest Next.js 15 features
Claude: /openai-web-search
Query: "Next.js 15 new features and changes"
```

**Example 2: Troubleshooting failure**
```
User: Fix this error in the build
Claude: [attempts fix, fails]
Claude: I'm unable to resolve this error with the current codebase context. Let me search for current solutions.
/openai-web-search
Query: "[specific error message] solution 2025"
```

**Example 3: API documentation needed**
```
User: Integrate with the Stripe payment API
Claude: Let me search for the current Stripe API documentation and best practices.
/openai-web-search
Query: "Stripe API integration Node.js current documentation"
```

## Important Notes

- The skill uses GPT-5.2 with OpenAI's web_search tool for real-time internet access
- Requires `OPENAI_API_KEY` environment variable to be set
- Provides more current and accurate web results than general web search
- Should be used proactively when you detect knowledge gaps or troubleshooting failures
