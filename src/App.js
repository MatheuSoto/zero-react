import React from 'react'
import { useStateValue } from './store'

export default () => {
  const [{ exams }, dispatch] = useStateValue()
  const [{ testimonials }, dispatch1] = useStateValue()

  return (
    <div className='h-screen w-screen fixed  items-center justify-center font-medium text-lg'>
      <div>Exams: {JSON.stringify(exams)}</div>
      <div>Testimonials: {JSON.stringify(testimonials)}</div>
      <button
        onClick={() => dispatch({
          type: 'addExam',
          exam: { name: 'newExam' }
        })}
      >
      Add Exam
      </button>
    </div>
  )
}
