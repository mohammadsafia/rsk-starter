export const useAuth = () => {
  return {
    currentUser: {
      name: 'Demo User',
      email: 'demo@example.com',
      picture: '',
      userId: '1',
    },
    removeCurrentUser: () => {},
    isAuthed: true,
  };
};
