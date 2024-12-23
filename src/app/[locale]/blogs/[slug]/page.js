import Markdown from "markdown-to-jsx"
import fs from 'fs'
import path from 'path';
import matter from "gray-matter"
import {notFound, redirect} from "next/navigation";
import React from "react";
import {getTranslations} from "next-intl/server";
import {motion} from "motion/react"
import {BlogContent} from "@/app/[locale]/blogs/[slug]/BlogContent";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

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



export default async function postPage(props) {
    const {locale, slug} = await props.params;
    const lan = await getTranslations('PostPage');
    const post = getPostContent(slug, locale);
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <BlogContent postName={post.data.title} postDate={post.data.date} postContent={post.content}></BlogContent>
        </div>
    )
}