import fs from 'fs'
import matter from 'gray-matter'

export default function getBlogMetadata(basePath, language) {
    const folder = basePath + '/' + language;
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    // get the file data
    return markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${language}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            excerpt: matterResult.data.excerpt,
            slug: filename.replace('.md', '')
        }
    })
}

