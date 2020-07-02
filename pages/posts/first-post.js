import React from "react";
import Link from "next/link";

export default function () {
  return (
    <div>
      First post
      <Link href="/"><a>点击返回首页</a></Link>
    </div>
  )
}