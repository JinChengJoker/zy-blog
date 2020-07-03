import fs from 'fs';
import path from "path";
import matter from "gray-matter";

export const getPosts = async () => {
  const postsDirPath = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postsDirPath)
  return fileNames.map(fileName => {
    const filename = fileName.replace(/\.md$/g, '')
    const text = fs.readFileSync(path.join(postsDirPath, fileName), 'utf-8')
    const {data: {title, date}, content} = matter(text)
    return {
      filename,
      title,
      date: date.toLocaleDateString(),
      content
    }
  })
}