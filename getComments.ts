import fs from 'fs'

type ResponseData = {
  comments: Array<{
    id: string
    nickname: string
    body: string
    image_url: string
    comment_number: number
    good_vote: number
    bad_vote: number
    created_at: string
  }>
  cursor: string
}

// created_at は例えば Ruby だと Time.parse(t += 'JST') で Timeクラス として取得できる
type CommentJsonObject = {
  id: string
  nickname: string
  body: string
  image_url: string
  comment_number: number
  good_vote: number
  bad_vote: number
  created_at: string
}

export const getComments = () => {
  const commentsJson: ResponseData = JSON.parse(fs.readFileSync('out/sampleResponse.json', 'utf8'));

  for (const key in commentsJson) {
    if (key !== 'comments') { continue }

    const comments: Array<any> = commentsJson[key]
    comments.forEach((comment: CommentJsonObject) => {
      console.log(comment.body)
    })
  }
}
