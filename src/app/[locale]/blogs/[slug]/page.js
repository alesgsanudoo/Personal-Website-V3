import Markdown from "markdown-to-jsx"
import fs from 'fs'
import path from 'path';
import matter from "gray-matter"
import {redirect} from "next/navigation";
import React from "react";
import {getTranslations} from "next-intl/server";
import {BlogContent} from "@/components/BlogContent";

function getPostContent(slug, language) {
    try {
        const folder = `blogs/${language}/`;
        const file = folder + `${slug}.md`;
        const content = fs.readFileSync(file, 'utf8');
        return matter(content);
    } catch (e) {
        redirect('/404');
    }
}


function getAllPosts(lan) {
    const postsDirectory = path.join(process.cwd(), 'blogs', lan);
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const {data, content} = matter(fileContents);

        return {
            slug: filename.replace(/\.md$/, ''),
            data,
            content,
        };
    });
}

export default async function postPage(props) {
    const {locale, slug} = await props.params;
    const lan = await getTranslations('PostPage');
    const post = getPostContent(slug, locale);
    const posts = getAllPosts(locale);
    const otherPosts = posts.filter((item) => item.slug !== slug)
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <BlogContent postName={post.data.title} postDate={post.data.date} postContent={post.content}
                         otherPosts={otherPosts}></BlogContent>
            <footer className="flex mb-10 flex-col space-y-2 mt-5 pr-4 pl-4 items-center">
                <h2 className="text-gray-500">
                    {lan('footer.paragraph1')}<a href="https://github.com/alesgsanudoo" target="_blank"
                                                 className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">Alex</a> ❤️!
                </h2>
                <h2 className="text-gray-500 text-center">
                    {lan('footer.paragraph2')}<a href="https://nextjs.org/" target="_blank"
                                                 className="font-bold text-blue-500 hover:text-blue-700 dark:text-amber-500 dark:hover:text-amber-700">NextJS</a>{lan('footer.paragraph3')}<a
                    href="https://tailwindcss.com/" target="_blank"
                    className="font-bold text-blue-500 hover:text-blue-700  dark:text-amber-500 dark:hover:text-amber-700">TailwindCSS</a>.
                </h2>
            </footer>
        </div>
    )
}