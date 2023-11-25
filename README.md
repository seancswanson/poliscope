# Poliscope

## Overview

Poliscope is a SvelteKit-based web application designed to simplify the political landscape for the 2024 U.S. Presidential Election. This handbook provides profiles of each candidate, leveraging OpenAI's ChatGPT, Ballotpedia, and open-sourced data to offer unbiased\* information and help voters make informed decisions.

\*[ChatGPT is not unbiased](https://help.openai.com/en/articles/8313359-is-chatgpt-biased). I prompt engineered to the best of my ability to take this into account.

### Features

- **Tri-Spectrum Analysis:** Analyzes candidates and provides perspectives across the political spectrum.
- **Explore Key Issues:** Stay informed about the issues shaping the 2024 election.
- **Data Transparency:** Our data is open-sourced, and Poliscope's code repository is public.

### How to Use Poliscope

1. **Select a Candidate:** Navigate to our candidates page to choose who you want to know more about.
2. **Read the Analysis:** Get insights across different political viewpoints for a comprehensive understanding.
3. **Learn About Issues:** Stay updated on the key issues.
4. **Make An Informed Decision:** Utilize the information to vote confidently.

## Data Sources

- **Candidate Quick Facts:** Utilizes Ballotpedia entries, summarized and parsed by ChatGPT into a specified JSON schema.
- **Candidate Poliscope Analysis:** Summarizes candidates' policy stances from diverse political perspectives.
- **Candidate Biography:** Fetched from the Simple English Wikipedia API for each candidate.

## Data Transparency & Contributing

- We encourage community involvement. If you have feature ideas or want to contribute data, please reach out.
- View and contribute to the data directly via our [GitHub repository](https://github.com/your-repo/poliscope).
- Submit issues or create pull requests for improvements.

## Support

- Questions, issues, or updates? Visit our [GitHub page](https://github.com/your-repo/poliscope).
- Want to show support? [Buy me a coffee!](https://buymeacoffee.com/your-link) 😁

## Developing Poliscope

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building Poliscope

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

---

Poliscope was crafted with ♡ by Sean Swanson to empower voters for the 2024 election. Your participation and feedback are highly valued as we aim to provide a platform that is both informative and easy to navigate.

---
