# AcoNews

AcoNews is a modern news website built using Next.js and React.js. It fetches the latest news from the [GNews.io API](https://gnews.io/) and displays it in a sleek, responsive user interface styled with Tailwind CSS and the `shad/cn` UI library. The website supports server-side rendering (SSR) to enhance performance and SEO. Additionally, users can search and filter news articles based on country, category, and language.

## Features

- **Server-Side Rendering (SSR):** All pages are rendered on the server for improved performance and SEO.
- **Responsive Design:** Fully responsive across devices, ensuring a seamless experience.
- **GNews.io API Integration:** Fetches live news articles using Axios, with support for searching and filtering by country, category, and language.
- **Modern UI:** Utilizes the `shad/cn` UI library for an elegant, user-friendly design.
- **Backend and Frontend Separation:** The frontend is developed with React.js, while the backend is handled by Next.js.
- **Hosted on Vercel:** The website is deployed and hosted using Vercel for easy scalability and reliability.
- **Iterative Incremental Model:** Developed using the iterative incremental model of software engineering to ensure continuous improvement and refinement.

## Tech Stack

- **Backend:** [Next.js](https://nextjs.org/)
- **Frontend:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shad/cn UI Library](https://shadcn.dev/)
- **API:** [GNews.io API](https://gnews.io/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Hosting:** [Vercel](https://vercel.com/)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/GlowingObsidian/AcoNews.git
   ```
2. Navigate to the project directory:
   ```
   cd AcoNews
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Set up environment variables:

   Create a `.env` file in the root directory and add your GNews API key:

   ```bash
   GNEWS_API_KEY=your_gnews_api_key
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

   The website will be available at `http://localhost:3000`.

## Usage

- On the homepage, users will see a list of the latest news article cards fetched from the GNews API.
- Users can search and filter articles based on country, category, and language.
- Clicking on the "Read more" link for any article will navigate to a detailed page displaying the full content of the article.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
