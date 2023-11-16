type NewComment = {
  name: string
  email: string
  comment: string
  slug: string
}

export const submitComment = async (comment: NewComment) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  })

  return result.json()
}
