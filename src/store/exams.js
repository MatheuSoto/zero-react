export const examsInitialState = { exams: [] }

export const examsReducer = (state, action) => {
  switch (action.type) {
    case 'addExam':
      return { ...state, exams: [action.exam, ...state.exams] }
    default:
      return state
  }
}
