import { QueryResolvers, MutationResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'

const userProfile = {
  id: String(1),
  name: 'Tshepo Mohlatlole',
  status: 'cached',
}

const Query: Required<QueryResolvers<ResolverContext>> = {
  viewer(_parent: any, _args: any, _context: any, _info: any) {
    return userProfile
  },
}

const Mutation: Required<MutationResolvers<ResolverContext>> = {
  updateName(_parent: any, _args: any, _context: any, _info: any) {
    userProfile.name = _args.name
    return userProfile
  },
}

export default { Query, Mutation }