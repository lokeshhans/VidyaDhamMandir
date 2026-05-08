import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  theme: 'light',
  modalOpen: false,
  modalType: null,
  galleryFilter: 'all',
  admissionForm: {
    name: '',
    classLevel: '',
    mobile: '',
    goal: '',
    loading: false,
    success: false,
    error: null,
  },
  notifications: [],
  mobileMenuOpen: false,
};

function appReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, mobileMenuOpen: !state.mobileMenuOpen };
    case 'CLOSE_MOBILE_MENU':
      return { ...state, mobileMenuOpen: false };
    case 'OPEN_MODAL':
      return { ...state, modalOpen: true, modalType: action.payload };
    case 'CLOSE_MODAL':
      return { ...state, modalOpen: false, modalType: null };
    case 'SET_GALLERY_FILTER':
      return { ...state, galleryFilter: action.payload };
    case 'UPDATE_FORM':
      return {
        ...state,
        admissionForm: { ...state.admissionForm, ...action.payload },
      };
    case 'FORM_LOADING':
      return {
        ...state,
        admissionForm: { ...state.admissionForm, loading: true, error: null },
      };
    case 'FORM_SUCCESS':
      return {
        ...state,
        admissionForm: {
          ...initialState.admissionForm,
          success: true,
          loading: false,
        },
      };
    case 'FORM_ERROR':
      return {
        ...state,
        admissionForm: {
          ...state.admissionForm,
          loading: false,
          error: action.payload,
        },
      };
    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [
          ...state.notifications,
          { id: Date.now(), ...action.payload },
        ],
      };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter((n) => n.id !== action.payload),
      };
    default:
      return state;
  }
}

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
}
