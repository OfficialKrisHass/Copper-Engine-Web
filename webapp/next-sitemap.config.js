/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://coppr.dev",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,

    
};

async function GetArticles() {

    const articlesPath = path.join(process.cwd(), "public/articles");

    const files = await fs.readdir(articlesPath);
    const articles = [];

    for (const file of files) {

        const filePath = path.join(articlesPath, file);

        const stats = await fs.stat(filePath);
        if (!stats.isFile() || path.extname(file) != ".md") continue;

        articles.push(path.parse(file).name);

    }

    return articles;

}