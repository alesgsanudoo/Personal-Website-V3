import fs from 'fs'
import path from 'path';
import matter from "gray-matter"
import {redirect} from "next/navigation";
import React from "react";
import {getTranslations} from "next-intl/server";
import {ProjectContent} from "@/components/ProjectContent";

function getProjectContent(slug, language) {
    try {
        const folder = `projects/${language}/`;
        const file = folder + `${slug}.md`;
        const content = fs.readFileSync(file, 'utf8');
        return matter(content);
    } catch (e) {
        redirect('/404');
    }
}


function getAllProjects(lan) {
    const postsDirectory = path.join(process.cwd(), 'projects', lan);
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

export default async function ProjectPage(props) {
    const {locale, slug} = await props.params;
    const lan = await getTranslations('ProjectPage');
    const project = getProjectContent(slug, locale);
    const projects = getAllProjects(locale);
    const otherProjects = projects.filter((item) => item.slug !== slug)

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <ProjectContent projectName={project.data.title} technologies={project.data.technologies}
                            github={project.data.github} preview={project.data.preview} projectContent={project.content}
                            otherProjects={otherProjects}></ProjectContent>
            <footer className="flex mb-10 flex-col space-y-2 mt-5 pr-4 pl-4 items-center select-none">
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