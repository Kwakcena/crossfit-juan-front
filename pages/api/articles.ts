import type { NextApiRequest, NextApiResponse } from "next"

const mockData = [
  {
    url: "https://m.cafe.naver.com/ArticleRead.nhn?clubid=28152386&articleid=16085&boardtype=L&menuid=99",
    articleNumber: 16085,
    title: "230404화 수업예약",
  },
  {
    url: "https://m.cafe.naver.com/ArticleRead.nhn?clubid=28152386&articleid=16080&boardtype=L&menuid=99",
    articleNumber: 16080,
    title: "230403월 수업예약",
  },
  {
    url: "https://m.cafe.naver.com/ArticleRead.nhn?clubid=28152386&articleid=16071&boardtype=L&menuid=99",
    articleNumber: 16071,
    title: "230331금 수업예약",
  },
  {
    url: "https://m.cafe.naver.com/ArticleRead.nhn?clubid=28152386&articleid=16064&boardtype=L&menuid=99",
    articleNumber: 16064,
    title: "230330목 수업예약",
  },
  {
    url: "https://m.cafe.naver.com/ArticleRead.nhn?clubid=28152386&articleid=16060&boardtype=L&menuid=99",
    articleNumber: 16060,
    title: "230329수 수업예약",
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ data: mockData })
}
