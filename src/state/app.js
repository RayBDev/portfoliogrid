const initialState = {
  isHomeOpen: false,
  isResumeOpen: false,
  isWorkOpen: false,
  isContactOpen: false,
}

const TOGGLE_HOME_OPEN = "TOGGLE_HOME_OPEN"
const TOGGLE_RESUME_OPEN = "TOGGLE_RESUME_OPEN"
const TOGGLE_WORK_OPEN = "TOGGLE_WORK_OPEN"
const TOGGLE_CONTACT_OPEN = "TOGGLE_CONTACT_OPEN"

export const toggleHomeOpen = isHomeOpen => ({
  type: TOGGLE_HOME_OPEN,
  isHomeOpen,
})

export const toggleResumeOpen = isResumeOpen => ({
  type: TOGGLE_RESUME_OPEN,
  isResumeOpen,
})

export const toggleWorkOpen = isWorkOpen => ({
  type: TOGGLE_WORK_OPEN,
  isWorkOpen,
})

export const toggleContactOpen = isContactOpen => ({
  type: TOGGLE_CONTACT_OPEN,
  isContactOpen,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HOME_OPEN:
      return { ...state, isHomeOpen: action.isHomeOpen }
    case TOGGLE_RESUME_OPEN:
      return { ...state, isResumeOpen: action.isResumeOpen }
    case TOGGLE_WORK_OPEN:
      return { ...state, isWorkOpen: action.isWorkOpen }
    case TOGGLE_CONTACT_OPEN:
      return { ...state, isContactOpen: action.isContactOpen }
    default:
      return state
  }
}
