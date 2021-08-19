import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import config from './config'
import { Client } from 'core/Http/Client'
import { closedLoadingDialog, openedLoadingDialog } from 'app/store/app/dialogSlice'

const reducerName = `${config.reducerKey}/categories`

const categoriesAdapter = createEntityAdapter()

// Initial State

const initialState = categoriesAdapter.getInitialState({})

// Thunk functions

export const fetchCategories = createAsyncThunk(`${reducerName}/fetchCategories`, async (args, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Client.get(`/categories`)

    return response.data
  } catch (error) {
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const insertCategory = createAsyncThunk(`${reducerName}/insertCategory`, async (category, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Client.post(`/categories`, category)

    return response.data
  } catch (error) {
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const updateCategory = createAsyncThunk(`${reducerName}/updateCategory`, async (category, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Client.put(`/categories/${category.id}`, category)

    return response.data
  } catch (error) {
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const deleteCategory = createAsyncThunk(`${reducerName}/deleteCategory`, async (category, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    await Client.delete(`/categories/${category.id}`)

    return category.id
  } catch (error) {
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

// Reducer

const categoriesSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    resetCategories(state, action) {
      categoriesAdapter.removeAll(state)
    }
  },
  extraReducers: {
    [fetchCategories.fulfilled]: categoriesAdapter.setAll,
    [insertCategory.fulfilled]: categoriesAdapter.addOne,
    [updateCategory.fulfilled]: categoriesAdapter.upsertOne,
    [deleteCategory.fulfilled]: categoriesAdapter.removeOne
  }
})

// Actions

export const { resetCategories } = categoriesSlice.actions

// Selectors

export const { selectAll: selectAllCategories } = categoriesAdapter.getSelectors(
  state => state[config.reducerKey].categories
)

export default categoriesSlice.reducer
