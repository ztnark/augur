export const UPDATE_HAS_LOADED_CATEGORY = 'UPDATE_HAS_LOADED_CATEGORY'

export const updateHasLoadedCategory = hasLoadedCategory => (
  {
    type: UPDATE_HAS_LOADED_CATEGORY,
    data: {
      hasLoadedCategory,
    },
  }
)
