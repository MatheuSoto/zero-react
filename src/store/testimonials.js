export const testimonialsInitialState = {
  testimonials: []
}

export const testimonialsReducer = (state, action) => {
  switch (action.type) {
    case 'addTestimonial':
      return { ...state, testimonials: [action.testimonial, ...state.testimonials] }
    default:
      return state
  }
}
