import store from '../store'

export const authorizeToken = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 本来は付与された認証トークンをバックエンドのAPI経由で検証すべき
    if (!store.state.auth || !store.state.auth.token) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
}
