import { useEffect, useState } from "react";

const useFetchVscoPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchPosts = async () => {
            try {
                const res = await fetch("/api/vsco-posts", {
                    signal: controller.signal,
                });

                const data = await res.json();

                const formattedPosts = (data.media || [])
                    .filter(item => item?.image?.responsive_url)
                    .map((item, index) => ({
                        index,
                        imageUrl: `https://${item.image.responsive_url}`,
                    }));
                setPosts(formattedPosts);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Error fetching posts:", err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPosts()

        return () => {
            controller.abort();
        };
    }, []);

    return { posts, loading};
};

export default useFetchVscoPosts;
