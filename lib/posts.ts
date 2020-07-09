import fs from 'fs';
import path from "path";
import matter from "gray-matter";

const postsDirPath = path.join(process.cwd(), 'posts')

export const getPostFilenames = async () => {
  const fileNames = fs.readdirSync(postsDirPath)
  return fileNames.map(fileName => fileName.replace(/\.md$/g, ''))
}

export const getPosts = async () => {
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

export const getPost = async (filename: string) => {
  const fullPath = path.join(postsDirPath, filename + '.md')
  const text = fs.readFileSync(fullPath, 'utf-8')
  const {data: {title, date}, content} = matter(text)
  return {
    filename,
    title,
    date: date.toLocaleDateString(),
    content
  }
}