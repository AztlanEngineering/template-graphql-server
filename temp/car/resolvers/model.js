import { modelController } from '../controllers'

const modelResolver = {
  // results sorted by model, then year (TODO dbl check)
  Query: {
    allModels(r, a) {
      return modelController.allModels(r, a.make)
    },
    // From 19xz : includes year 19xz
    modelsFrom(r, a) {
      return modelController.modelsFromYear(r, a.make, a.from)
    },
  }
}

export default [
  modelResolver
]
