import { LighthouseData } from "@/types";

export const LIGHTHOUSE_DATA: LighthouseData[] = [
    {
        title: 'Performance',
        children: 'The website has been optimized by using the NextJS native Image tag, the images are all in .webp format because of its superior compression capabilities which allows the immage to be smaller, the image size has been reduced so there isnt unused data, unused css has been removed...',
        percentage: 94
    },
    {
        title: 'Accessability',
        children: 'Made sure all the colors on the page are different enough that they are easily visible for people with impaired vision, made sure the website is easily readable by screen readers.',
        percentage: 100
    },
    {
        title: 'SEO',
        children: 'Using semantic HTML, and some best-pracices, I was able to score 100 on the first try in the SEO realm',
        percentage: 100
    },
    {
        title: 'Best Practices',
        children: 'Scored 100 first try',
        percentage: 100
    }
];