import axios, { AxiosError } from "axios";
import { get, map, slice } from "lodash";
import { nanoid } from "nanoid";
import queryString from "query-string";
import type { NextApiRequest, NextApiResponse } from "next"

import { handleError } from "../../src/error-handlers";

const CAFE_ID = 28152386;

const createUrl = (url: URL, searchParams: URLSearchParams) => `${url.toString()}${searchParams ? `?${searchParams.toString()}` : ''}`;

interface Articles {
  articleList: {
    item: {
      articleId: number,
      subject: string,
    }
  }[],
}

const articles = (data: Articles) => {
  return map(
    slice(get(data, 'articleList'), 0, 5),
    (article) => {
      const articleId = get(article, 'item.articleId');
      const subject = get(article, 'item.subject');
      const articleReadQueryString = queryString.stringify({
        clubid: CAFE_ID,
        articleid: articleId,
        boardtype: 'L',
        menuid: '99',
      })

      const href = createUrl(
        new URL('https://m.cafe.naver.com/ArticleRead.nhn'),
        new URLSearchParams(articleReadQueryString),
      );

      return {
        url: href,
        articleNumber: articleId,
        title: subject,
      };
    });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const articleListQueryString = queryString.stringify({
    'search.clubid': CAFE_ID,
    'search.queryType': 'lastArticle',
    'search.menuid': 99,
    'search.page': 1,
    'search.perPage': 50,
    ad: true,
    uuid: nanoid(36),
    adUnit: 'MW_CAFE_ARTICLE_LIST_RS',
  });

  const requestURL = createUrl(
    new URL('https://apis.naver.com/cafe-web/cafe2/ArticleListV2.json'),
    new URLSearchParams(articleListQueryString),
  );

  try {
    const { data: { message: { result } } } = await axios.get(requestURL);
    const data = articles(result);

    res.status(200).json({ success: true, data });
  } catch (err) {
    throw handleError(err as AxiosError);
  }
}
