const Post = () => {
  return (
    <div>
      TBD
    </div>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

// export async function getStaticProps({ params }: Params) {
//   const post = getPostBySlug(params.slug, [
//     'title',
//     'date',
//     'slug',
//     'author',
//     'content',
//     'ogImage',
//     'coverImage',
//   ])
//   const content = await markdownToHtml(post.content || '')

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   }
// }

// export async function getStaticPaths() {
//   const posts = getAllPosts(['slug'])

//   return {
//     paths: posts.map((posts) => {
//       return {
//         params: {
//           slug: posts.slug,
//         },
//       }
//     }),
//     fallback: false,
//   }
// }
