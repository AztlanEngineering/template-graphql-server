import { Model } from '../models'

import { Types as T } from 'mongoose'

// MAYBE have two dbs, one for the names, the other for the modeL:year couples
const modelController = {
  allModels: (r, make_id) => Model
    .find({'make':T.ObjectId(make_id)})
    .sort({'slug':1, 'year':1}),
  //.sort({'make_slug':1, 'year':1}),
  allModelsFromSlug: (r, make_slug) => Model
    .find({'make_slug':make_slug})
    .sort({'slug':1, 'year':1}),
  modelsFromYear: (r, make_id, from_year) => Model
    .find({
      'make':T.ObjectId(make_id),
      'year':{ $gte : from_year }
    }).sort({ 'slug':1, 'year':1 }),
  modelsFromYearFromSlug: (r, make_slug, from_year) => Model
    .find({
      'make_slug':make_slug,
      'year': { $gte : from_year }
    }).sort({ 'slug':1, 'year':1 })
}

export { modelController }
