import Link from "next/link";
import React from "react";
import {GetServerSideProps} from "next";
import {UAParser} from 'ua-parser-js'

type Props = {
  browser: {
    name: string
    version: string
    major: string
  }
}

export default function Home(props: Props) {
  const {browser} = props
  return (
    <div className="container">
      <main>
        <h1 className="title">
          <Link href="/posts"><a>博客列表</a></Link>
        </h1>
        <p>当前浏览器 {browser.name}</p>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ua = context.req.headers["user-agent"]
  const uaResult = new UAParser(ua).getResult()
  return {
    props: {
      browser: uaResult.browser
    }
  }
}
